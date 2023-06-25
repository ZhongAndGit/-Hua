import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

const Icon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3959726_v029kr4eca.js', // 在 iconfont.cn 上生成
});
function MyIcon(props) {
  const { type, ...rest } = props
  return <Icon type={type} {...rest}></Icon>
}

export default MyIcon
