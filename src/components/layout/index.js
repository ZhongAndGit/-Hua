import React from 'react';
import './index.css';
import BottomMenu from '../bottomMenu';
import { Routes, Route } from 'react-router-dom';
import routeList from '../../routes/index'

function coms(item, index) {
  return <Route path={item.path} key={index} element={<item.componentName></item.componentName>}></Route>
}
function home() {
  let listRou = routeList.map((item, index) => {
    if (!!item.children) {
      let ras = [coms(item, index)];
      item.children.map((ite, ind) => {
        ras.push(coms(ite, ind))
      })
      return ras
    }
    return coms(item, index)
  })
  return (
    <div className='home'>
      <div className='contentView'>
        <Routes>
          {[].concat.apply([],listRou)}
        </Routes>
      </div>
      <BottomMenu ></BottomMenu>
    </div>
  )
}





export default home