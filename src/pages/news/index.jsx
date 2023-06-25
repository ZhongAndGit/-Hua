import React from 'react';
import { Tabs } from 'antd-mobile'
import ContentsList from '../../components/news/contentsList';
import NewVideoList from '../../components/news/newVideoList'
import style from './index.module.css'

class news extends React.Component {
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
      <div className={style.news} >
        <Tabs className={style.tabsDiy}
          onChange={key => {
            this.setState({ keyValue: key })
          }}
        >
          {tabList.map(item => (
            <Tabs.Tab title={item.name} key={item.value} />
          ))}
        </Tabs>
        <div className={style.contentViewList}>
          {
            keyValue === 'recommend' ? <NewVideoList></NewVideoList> : <ContentsList keyValue={keyValue} oldItem={tabList}></ContentsList>
          }

        </div>

      </div>
    )
  }
}

export default news