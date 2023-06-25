
import React from 'react';
import { Tabs, Input } from 'antd-mobile'
import MyIcon from '../../components/icon';
import './index.css'

class video extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabList: [
        { name: '推荐', value: 'recommend' },
        { name: '新闻', value: 'newsList' },
        { name: '娱乐', value: 'entertainment' },
        { name: '体育', value: 'sports' },
        { name: '财经', value: 'finance' },
        { name: '军事', value: 'military' },
        { name: '科技', value: 'technology' },
        { name: '手机', value: 'mobile' },
        { name: '数码', value: 'digital' },
        { name: '时尚', value: 'fashion' },
        { name: '游戏', value: 'games' },
        { name: '教育', value: 'education' },
        { name: '健康', value: 'health' },
        { name: '旅游', value: 'travel' }
      ],
      keyValue: 'recommend'
    }
  }

  render() {
    const { keyValue, tabList } = this.state
    return (
      <div className="video" >
        <div className='topInput'>

          <div className='inputStyle'>
            <MyIcon type={'icon-sousuo'} />
            <input type="text" className='restInput' disabled placeholder='请输入关键字' />
          </div>
          <MyIcon type={'icon-lishijilu'} className="icon" />
          <MyIcon type={'icon-yunxiazai'} className="icon" />
        </div>
        {/* <Tabs className='tabsDiy'
          onChange={key => {
            this.setState({ keyValue: key })
          }}
        >
          {tabList.map(item => (
            <Tabs.Tab title={item.name} key={item.value} />
          ))}
        </Tabs> */}


      </div>
    )
  }
}

export default video