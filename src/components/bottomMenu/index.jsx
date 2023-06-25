import { useSelector, useDispatch } from 'react-redux';
import { toggleIndex, siwTab } from '../../hookRedux/store';
import { NavLink } from 'react-router-dom';
import style from './index.module.css'
import MyIcon from '../icon'
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Counter() {
  const tabIndex = useSelector(state => state.bottomMenuIndex);
  const tabList = useSelector(state => state.bottomMenuList);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(siwTab(location.pathname));
  }, [dispatch, location]);
  return (
    <div className={style.bottomMenu}>
      {
        tabList.map((item, index) => {
          return <NavLink to={item.route} className={style.activeClass} key={index}><div className={tabIndex === index ? `${style.menuList} ${style.active}` : style.menuList} onClick={() => { dispatch(toggleIndex(index)) }}>
            <MyIcon type={tabIndex === index ? item.activeIcon : item.icon} className={style.icon} />
            <div className={style.text}>{item.text}</div>
          </div></NavLink>
        })
      }
    </div>
  );
}
export default Counter;