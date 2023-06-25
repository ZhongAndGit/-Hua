import React, { useRef, useState } from 'react';
import './index.css';
const lineProgress = React.memo((props) => {
  const progressBarRef = useRef(null);
  const [drag, setDrag] = useState(false);
  const { buffereValue, dotValue, lineInsideValue } = props.ProgressValue
  const dotLeft = {
    left: `${dotValue || 0}%`
  }
  const lineWidth = {
    width: `${lineInsideValue || 0}%`
  }
  const buffereWidth = {
    width: `${buffereValue || 0}%`
  }
  const handleMouseDown = (e) => {
    setDrag(true)
  }
  const handleMouseUp = (e) => {
    setDrag(false)
  }

  const handleMouseMove = (e) => {
    // clientX鼠标偏移量从窗口x=0开始计数 offsetWidth总长度 offsetLeft偏移量
    const { clientX } = e.touches[0]
    const { offsetWidth, offsetLeft } = progressBarRef.current;
    if (drag) {
      if (offsetLeft < (clientX + 4) < (offsetWidth + offsetLeft)) {
        let letVule = (clientX - offsetLeft) / offsetWidth
        props.upProgVlaue(letVule > 1 ? 1 : letVule < 0 ? 0 : letVule)
      } else {
        handleMouseUp()
      }
    }
  }
  return (
    <div className='lineProgress' ref={progressBarRef} onTouchMove={handleMouseMove} onTouchEnd={handleMouseUp}>
      <div className='lineInside' style={lineWidth}></div>
      <div className='buffere' style={buffereWidth}></div>
      <div className='dot' style={dotLeft} onTouchStart={handleMouseDown}  ></div>
    </div>
  )
})
export default lineProgress