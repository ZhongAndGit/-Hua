import videojs from 'video.js'
import React, { Component } from 'react';
import 'video.js/dist/video-js.css'
import './index.css'
import MyIcon from '../icon'
import Back from '../back'
import moreFunction from '../../js';
import LineProgress from '../lineProgressShannon'


const { convertSecondsToHMS } = new moreFunction();
class videoShannon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      oldStartTime: 0,
      oldEndTime: 0,
      startData: '00:00:00',
      endData: '00:00:00',
      lineInside: 0,
      playerState: 'ready',
      bufferedPercentage: 0,
      fullStatus: false
    }
  }
  componentDidMount() {
    this.player = videojs(this.videoNode, this.props.videoJsOptions, () => {
      this.setState({ playerState: 'ready' });
      this.player.on('ended', this.handleEnded);
      this.player.on('timeupdate', this.handleTimeUpdate);
      this.player.on('loadedmetadata', this.handleLoadedMetadata);
      this.player.on('progress', this.handleProgress);
    });

  }
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
      if (document.getElementsByClassName('landscape').length !== 0) {
        this.handleRestFull()
      }

    }
  }
  handleTimeUpdate = () => {
    // 获取播放视频时间
    const { h, m, s } = convertSecondsToHMS(this.player.currentTime())
    this.setState({
      startData: `${h}:${m}:${s}`,
      oldStartTime: this.player.currentTime(),
      lineInside: Math.floor(this.player.currentTime() / this.state.oldEndTime * 100)
    })
  }
  handleLoadedMetadata = () => {
    // 获取视频时长
    const { h, m, s } = convertSecondsToHMS(this.player.duration())
    this.setState({
      endData: `${h}:${m}:${s}`,
      oldEndTime: this.player.duration()
    })
  };
  handleProgress = () => {
    // 获取缓冲
    const bufferedTimeRange = this.player.buffered();

    if (bufferedTimeRange.length > 0) {
      const bufferedEnd = bufferedTimeRange.end(bufferedTimeRange.length - 1);
      const duration = this.player.duration();

      // 计算缓冲的百分比
      const bufferedPercentage = (bufferedEnd / duration) * 100;
      this.setState({
        bufferedPercentage: bufferedPercentage,
      })
    }
  }
  this_Start = () => {
    this.player.play();
    this.setState({ playerState: 'paused' });
  }
  handlePause = () => {
    this.setState({ playerState: 'ready' });
    this.player.pause()
  }
  handleEnded = () => {
    this.setState({ playerState: 'ended' });
  }
  upProgVlaue = (value) => {
    // 总时长/此时时间 = value
    let thisTime = (this.state.oldEndTime) * value
    this.setState({
      lineInside: value * 100
    })
    this.player.currentTime(thisTime)
  }


  handleSetFull = () => {
    document.documentElement.requestFullscreen();
    window.screen.orientation.lock('landscape')

    document.documentElement.classList.add('landscape');
    this.setState({
      fullStatus: true
    })
  };

  handleRestFull = () => {
    document.exitFullscreen();
    window.screen.orientation.unlock();

    document.documentElement.classList.remove('landscape');
    this.setState({
      fullStatus: false
    })
  };
  render() {
    const { startData, endData, lineInside, bufferedPercentage, playerState, fullStatus } = this.state
    const ProgressValue = {
      buffereValue: bufferedPercentage,
      dotValue: lineInside,
      lineInsideValue: lineInside
    }
    return (
      <div className='ShannonVideo-content'>

        <div className='ShannonVideo-tools'>
          <div className='' onClick={this.goBack}>
            <Back />
          </div>

          <div></div>
        </div>
        <video ref={el => this.videoNode = el} className="video-Shannon"></video>
        <div className='ShannonVideo-Progress-tools'>
          <MyIcon type={playerState === 'paused' ? 'icon-pause2-white' : 'icon-bofang1-white'} className="icon" onClick={() => { playerState === 'paused' ? this.handlePause() : this.this_Start() }} />
          <div className='timeAndPro'>
            <div className='times'>{startData}</div>
            <div className='pro'>
              <LineProgress ProgressValue={ProgressValue} upProgVlaue={this.upProgVlaue} />
            </div>
            <div className='times'>{endData}</div>
          </div>
          <MyIcon type={!fullStatus ? 'icon-quanping1-white' : 'icon-quanping-white'} className="icon" onClick={() => { !fullStatus ? this.handleSetFull() : this.handleRestFull() }} />
        </div>
      </div >
    )
  }
}
export default videoShannon