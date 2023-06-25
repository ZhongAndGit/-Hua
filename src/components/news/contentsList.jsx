import React from "react";

import { PullToRefresh, Image } from 'antd-mobile'
import { NavLink } from 'react-router-dom';
import { sleep } from 'antd-mobile/es/utils/sleep'
import api from '../../api/newsApi';
import ContentsListSkeleton from "./skeleton/contentsListSkeleton";
import './index.css'
class contentsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newsList: [],
      keyValue: props.keyValue
    }
  }
  async getList(keys) {
    // const { keyValue } = this.props
    // const res = await api.articles(api.textNumbers[keys || keyValue])
    // let lastIn = res.lastIndexOf(')')
    // let frstIn = res.indexOf('({')
    // let jsons = res.substring(frstIn + 1, lastIn)
    // setTimeout(() => {
    //   this.setState({
    //     newsList: JSON.parse(jsons)[api.textNumbers[keys || keyValue]]
    //   })
    // }, 500)

    const { keyValue } = this.props
    const values = await api.jsonParticles(api.textNumbers[keys || keyValue],'artiList')
    setTimeout(() => {
      this.setState({
        newsList: values[api.textNumbers[keys || keyValue]]
      })
    }, 500)
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.keyValue === prevState.keyValue) {
      return null
    } else {
      return {
        keyValue: nextProps.keyValue,
        newsList: []
      }
    }
  }
  componentDidUpdate(prevState) {

    if (this.state.keyValue !== prevState.keyValue) {
      this.getList(this.state.keyValue)
    }
  }
  render() {
    const { newsList, keyValue } = this.state

    if (!!newsList.length) {
      return (
        <PullToRefresh
          onRefresh={async () => {
            await sleep(1000)
            this.getList(keyValue)
          }}>
          {
            newsList.map((item, index) => (
              <NavLink to={'/textHtml/' + item.docid} className="activeClass" key={index}>
                <div className='list-item' key={index} >
                  <Image className="imgs" src={item.imgsrc} style={{ borderRadius: 8 }} fit='cover'></Image>
                  <div className='texts'>
                    <div className="title">{item.title}</div>
                    <div className="source">来源：{item.source}</div>
                  </div>
                </div>
              </NavLink>
            ))
          }
        </PullToRefresh>
      )
    } else {
      return (<ContentsListSkeleton></ContentsListSkeleton>)
    }
  }
  componentDidMount() {
    this.getList()
  }
}


export default contentsList

