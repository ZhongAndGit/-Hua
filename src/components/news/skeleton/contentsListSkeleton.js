import { Skeleton } from 'antd-mobile'
import './index.css'



function contentsListSkeleton() {
  return (
    <div className='skeConte'>
      <div className='textList'>
        <Skeleton animated className='textImg'></Skeleton>
        <Skeleton.Paragraph animated className='textContent'></Skeleton.Paragraph >
      </div>
      <div className='textList'>
        <Skeleton animated className='textImg'></Skeleton>
        <Skeleton.Paragraph animated className='textContent'></Skeleton.Paragraph >
      </div>
      <div className='textList'>
        <Skeleton animated className='textImg'></Skeleton>
        <Skeleton.Paragraph animated className='textContent'></Skeleton.Paragraph >
      </div>
      <div className='textList'>
        <Skeleton animated className='textImg'></Skeleton>
        <Skeleton.Paragraph animated className='textContent'></Skeleton.Paragraph >
      </div>
      <div className='textList'>
        <Skeleton animated className='textImg'></Skeleton>
        <Skeleton.Paragraph animated className='textContent'></Skeleton.Paragraph >
      </div>
      <div className='textList'>
        <Skeleton animated className='textImg'></Skeleton>
        <Skeleton.Paragraph animated className='textContent'></Skeleton.Paragraph >
      </div>
    </div>
  )
}

export default contentsListSkeleton

