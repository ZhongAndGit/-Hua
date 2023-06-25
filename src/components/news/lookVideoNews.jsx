import React from "react";
import api from '../../api/newsApi'
import VideoShannon from '../videoShannon'
import './index.css'
import { Skeleton } from 'antd-mobile'


class LookVideoNews extends React.Component {
  constructor(props) {
    super(props)
    const url = window.location.pathname
    let lastIn = url.lastIndexOf('/')
    let jsons = url.substring(lastIn + 1, url.length)
    this.state = {
      detailJons: {},
    }

    this.getList(jsons)
  }
  async getList(uid) {
    // const res = await api.videoDetail(uid)
    // this.setState({
    //   detailJons: res
    // })

    // 打包app
    const res = await api.jsonPvideoDetail(uid,null)
    this.setState({
      detailJons: res.data
    })
  }
  render() {
    const { detailJons } = this.state
    const CourseVideoJsOptions = {
      autoplay: false,
      controls: false,
      // fluid:true,//是否自适应
      nativeControlsForTouch: false,//原生控件
      sources: [
        {
          src: detailJons.mp4_url,
          type: 'video/mp4'
        },
      ]
    }
    if (!!detailJons.mp4_url) {

      return (
        <div className="lookVideo">
          <VideoShannon videoJsOptions={CourseVideoJsOptions}></VideoShannon>
        </div>
      )
    } else {
      return (
        <Skeleton></Skeleton>
      )
    }
  }
}


export default LookVideoNews

