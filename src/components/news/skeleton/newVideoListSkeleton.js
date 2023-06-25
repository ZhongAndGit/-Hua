import { Skeleton } from 'antd-mobile'
import './index.css'



function newVideoListSkeleton() {
  return (
    <div className='skeConte'>
      <Skeleton animated className='customSkeleton'></Skeleton>
      <Skeleton animated className='customSkeleton'></Skeleton>
      <Skeleton animated className='customSkeleton'></Skeleton>
      <Skeleton animated className='customSkeleton'></Skeleton>
      <Skeleton animated className='customSkeleton'></Skeleton>
      <Skeleton animated className='customSkeleton'></Skeleton>
      {/* <Skeleton.Paragraph  animated ></Skeleton.Paragraph > */}
    </div>
  )
}

export default newVideoListSkeleton

