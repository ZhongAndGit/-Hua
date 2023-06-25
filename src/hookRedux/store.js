import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    bottomMenuIndex: 0,
    bottomMenuList: [
      { text: '新闻', route: "/news", icon: 'icon-xinwenshenhedan-xinwenshichang', activeIcon: 'icon-xinwenshenhedan-xinwenshichang-active' },
      { text: '短视频', route: "/shortVideos", icon: 'icon-shipin', activeIcon: 'icon-shipin-active' },
      { text: '看书', route: "/book", icon: 'icon-shu', activeIcon: 'icon-shu-active' },
      { text: '音乐', route: "/music", icon: 'icon-yinle', activeIcon: 'icon-yinle-active' },
      { text: '看电影', route: "/video", icon: 'icon-dianshi', activeIcon: 'icon-dianshi-active' },
      { text: '我的', route: "/my", icon: 'icon-wode1', activeIcon: 'icon-wode1-active' }
    ]
  },
  reducers: {
    toggleIndex: (state, value) => {
      state.bottomMenuIndex = value.payload
    },
    siwTab: (state, value) => {
      if (state.bottomMenuList[state.bottomMenuIndex].route === value.payload) return
      state.bottomMenuList.map((items, index) => {
        if (items.route === value.payload) {
         state.bottomMenuIndex = index
        }
        return true
      })
    }
  },
});
export const { toggleIndex, siwTab } = counterSlice.actions;
export default counterSlice.reducer;

