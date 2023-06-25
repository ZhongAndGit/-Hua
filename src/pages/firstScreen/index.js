// import React from 'react';
import './index.css';
// import moreFunction from '../../js'

// const { myCanvas, getEquipmentSize } = new moreFunction();
// class firstScreem extends React.Component {
//   constructor(props) {
//     super(props)
//     const { width, height } = getEquipmentSize()
//     this.width = width > 400 ? 400 : width
//     this.height = height > 400 ? 400 : height
//   }
//   render() {
//     return (
//       <div className="firstScreem" >
//         <canvas id='firstCa' width={this.width} height={this.width}></canvas>
//       </div>
//     )
//   }
//   componentDidMount() {
//     myCanvas().clock('firstCa')
//     let src = window.location.href

//     setTimeout(() => {
//       window.location.href = src + 'home'
//     }, 3000)
//   }
// }

// export default firstScreem; 


import React from 'react';
import { useNavigate } from 'react-router-dom';
function FirstScreem() {
  const history = useNavigate();
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      history('/news');
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [history]);
  return (
    <div className='firstScreem'>
      <h1>闹啥</h1>
    </div>
  );
}
export default FirstScreem;