import React from "react";

import { PullToRefresh, Image } from 'antd-mobile'
import { NavLink } from 'react-router-dom';
import { sleep } from 'antd-mobile/es/utils/sleep'
import api from '../../api/newsApi'
import MyIcon from '../icon'
import NewVideoListSkeleton from "./skeleton/newVideoListSkeleton";
import './index.css'
class newVideoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newsList: []
    }
  }
  async getList() {
    // const res = await api.jsonPvideo('videoList')
    // setTimeout(() => {
    //   this.setState({
    //     newsList: res['Video_Recom']
    //   })
    // }, 500)



    // 打包app
    const res = await api.recommend({params:{ channel: "T1457068979049", size: 20 }})
    setTimeout(() => {
      this.setState({
        newsList: res['视频']
      })
    }, 500)
      
  }
  render() {
    const { newsList } = this.state
    if (newsList.length !== 0) {
      return (
        <PullToRefresh
          onRefresh={async () => {
            await sleep(1000)
            this.getList()
          }}>
          {
            newsList.map((item, index) => (
              <div className='video-list-item' key={index}>
                <div className='video-imgs'>
                  <Image src={item.cover} style={{ borderRadius: 10 }}></Image>
                </div>
                <div className="video-click"> <NavLink to={'/lookVideoNews/' + item.vid} className="activeClass" key={index}><MyIcon type={'icon-bofangqi-bofangxiaodianshi-white'} className="icon" /></NavLink></div>
                <div className="video-texts">
                  <div className="video-titles">{item.title}</div>
                  <div className="video-source">
                    <div>类型：{item.category}</div>
                    <div>来源：{item.topicName}</div>
                  </div>
                </div>
              </div>
            ))
          }
        </PullToRefresh>
      )
    } else {
      return (
        <NewVideoListSkeleton></NewVideoListSkeleton>
      )
    }

  }
  componentDidMount() {
    this.getList()
  }
}


export default newVideoList

