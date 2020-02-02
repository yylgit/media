import Player from 'xgplayer'
import VodTask from './tasks/VodTask'
import Flv from './Flv'

class FlvPlayer extends Player {
  constructor (options) {
    super(options)
    this._options = options
    this.__flv__ = null
    this.init(options)
    Object.defineProperty(this, 'src', {
      
      set: (val) => {
        debugger
        // 点播的时候 直接return了 blob:http://192.168.2.105:5000/ece1d4d5-7e37-4517-acf5-692673f1a93d
        if (typeof val === 'string' && val.startsWith('blob:')) {
          return
        }
        this._options.url = val
        this.__flv__.destroy()
        this.__flv__ = new Flv(this._options, this)
        this.__flv__.load()
        // flv 也是video组件播放 地址是mse.url
        this.video.src = this.__flv__.mse.url
        this.currentTime = 0
        setTimeout(() => {
          this.play()
        }, 0)
      },
      get: () => {
        return this._options.url
      },
      configurable: true
    })
    if (options.autoplay) {
      this.start()
    }
  }

  init (options) {
    const player = this
    const { isLive } = options
    player.__flv__ = new Flv(options, player)
    player.once('complete', () => {
      // start方法的下一个事件循环触发complete 
      player.createInstance(player.__flv__)
    })
    player.on('pause', () => {
      !isLive && VodTask.clear()
    })
    this.once('destroy', () => {
      VodTask.clear()
      player.__flv__.destroy()
      player.__flv__.mse = null
      player.video.src = ''
      player.__flv__ = null
    })
  }

  createInstance (flv) {
    debugger
    // start之后执行的方法
    const player = this
    if (this._options.isLive) {
      Player.util.addClass(player.root, 'xgplayer-is-live')
      const live = Player.util.createDom('xg-live', '正在直播', {}, 'xgplayer-live')
      player.controls.appendChild(live)
    }
    //开始load
    flv.load()
  }

  start () {
    // 开始播放
    debugger
    if (!this.inited) {
      return
    }
    const flvPlayer = this.__flv__
    // 触发父类的start 父类里触发complete事件
    super.start(flvPlayer.mse.url)
    this.src = flvPlayer.mse.url
    return true
  }

  get inited () {
    return this.__flv__ !== undefined
  }
}

module.exports = FlvPlayer
