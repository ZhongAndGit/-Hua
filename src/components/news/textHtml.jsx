import React from "react";
import api from '../../api/newsApi';
import Back from '../back'
import './index.css'


class textHtml extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    const url = window.location.pathname
    let lastIn = url.lastIndexOf('/')
    let jsons = url.substring(lastIn + 1, url.length)
    this.state = {
      uid: jsons,
      detailJons: ''
    }
  }
  async getList() {
    const { uid } = this.state
    const res = await api.textDetail(uid)
    this.setState({
      detailJons: res
    })

  }
  render() {
    const { detailJons } = this.state
    return (
      <div className="lookTextContent">
        <div className='lookBack'>
          <Back />
        </div>
        <div className="lookText" dangerouslySetInnerHTML={{ __html: detailJons }}></div>
      </div>

    )
  }
  componentDidMount() {
    this.getList()
  }
}


export default textHtml

