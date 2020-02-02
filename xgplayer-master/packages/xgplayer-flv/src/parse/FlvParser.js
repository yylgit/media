//破译者 
//parseData 最后是创建tag this._store.state.tags中
import Demuxer from './demux/Demuxer'
import Buffer from '../write/Buffer'
import Tag from '../models/Tag'

export default class FlvParser extends Demuxer {
  constructor (store) {
    super(store)
    this.CLASS_NAME = this.constructor.name
    this.temp_u8a = null
    this.dataLen = 0
    this.stop = false
    this.index = 0 // record the position in single round
    this.offset = 0
    this.filePosition = 0 // record current file position
    this.firstFlag = true
  }

  seek () {
    this.offset = 0
  }

  destroy () {
    this.temp_u8a = null
    this.dataLen = 0
    this.stop = false
    this.index = 0 // record the position in single round
    this.offset = 0
    // 记录当前的这次数据所在的总数据的位置 
    this.filePosition = 0
  }

  setFlv (flvU8a) {
    // debugger
    // 每一次setFlv都回重置index和offset 然后返回offset 外面根据offset进行裁剪数据
    this.stop = false
    this.index = 0
    this.offset = 0
    const tempU8a = this.temp_u8a = flvU8a
    this.dataLen = this.temp_u8a.length

    if (!this.firstFlag) {
      return this.parseData()
      // 超过13个字节才开始处理
    } else if (tempU8a.length > 13 && FlvParser.isFlvHead(tempU8a)) {
      // 解析是否有音视频   
      this.parseHead()
      // 改变this.index
      this.readData(9) // 跳过头部  
      this.readData(4) // 跳过下一个记录头部size的 int32
      this.parseData()
      this.firstFlag = false
      this.filePosition += this.offset // 这里好像是bug parseData里面已经进行计算了
      return this.offset
    } else {
      return this.offset
    }
  }

  parseData () {
    // debugger
    const {length: u8aLength} = this.temp_u8a
    // 这里有个疑问 如果header和body不是一次来的 tag会不会计算错误，没有严格的tag的开始和结束标志 
    // 第一次buffer tag的body没有完全到结束了 但是offset把11个header字节删除了，下次来就没有header字节了。
    while (this.index < u8aLength && !this.stop) {
      //offset是最后返回的处理到的位置
      this.offset = this.index
      const tag = new Tag()
      if (this.unreadLength >= 11) {
        // 可以读出tag的信息 11个字节
        tag.position = this.filePosition + this.offset
        tag.tagType = this.readData(1)[0]
        tag.bodySize = this.readData(3)
        tag.Timestamp = this.readData(4)
        tag.StramId = this.readData(3)
      } else {
        // 如果数据小于11个字节  当前tag信息不完整 则直接return offset就是当前的index
        this.stop = true
        //不改变offset 拼接下次的数据继续处理
        continue
      }
      if (this.unreadLength >= this.getBodySize(tag.bodySize) + 4) {
        tag.body = this.readData(this.getBodySize(tag.bodySize))
        tag.tagSize = this.readData(4)
        // 最后是存放到了store中的tags
        const {tags, _hasVideo, _hasAudio} = this._store.state
        switch (tag.tagType) {
          case 9:
            _hasVideo && tags.push(tag)
            break
          case 8:
            _hasAudio && tags.push(tag)
            break
          case 18:
            tags.push(tag)
            break
        }
      } else {
        //不改变offset 拼接下次的数据继续处理
        this.stop = true
        continue
      }

      this.offset = this.index
    }
    // 改变filePosition
    this.filePosition += this.offset
    this.temp_u8a = null
    return this.offset
  }

  /**
   * @param sizeArr
   * @return
   */
  getBodySize (sizeArr) {
    return Buffer.readAsInt(sizeArr)
  }
  // 
  parseHead () {
    const {temp_u8a: tempU8a, _store} = this
    const result = {
      match: false
    }
    // 第四个字节是1
    if (tempU8a[3] !== 1) {
      return result
    }
    // 第五个字节
    const flag = tempU8a[4]
    // 100  第三位是1代表有音频
    const hasAudio = ((flag & 4) >>> 2) !== 0
    // 01 第一位是1 代表有视频
    const hasVideo = (flag & 1) !== 0

    if (!hasAudio && !hasVideo) {
      return result
    }

    _store.hasAudio = hasAudio
    _store.hasVideo = hasVideo
  }

  readData (length) {
    // this.index永远在未读数据的第一个
    const _index = this.index
    this.index += length
    return this.temp_u8a.slice(_index, _index + length)
  }

  get unreadLength () {
    return this.dataLen - this.index
  }

  static isFlvHead (tempU8a) {
    let firstThreeChars = [tempU8a[0], tempU8a[1], tempU8a[2]]
    return String.fromCharCode.apply(String, firstThreeChars) === 'FLV'
  }
}
