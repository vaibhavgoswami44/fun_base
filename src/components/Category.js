import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Category() {
  const { bgColor } = useSelector((state) => state.reducer.value)
  
  return (
    <>
      <div className=' container  mt-4 ' data-bs-theme={bgColor}>
        <h6>Category</h6>
        <ul className="  d-flex  flex-row flex-wrap">
          <Link to={'/'} >
            <li className='list-group-item   p-1 m-2'>
              <button  className={` btn btn-${bgColor} shadow `} type='button' >General</button>
            </li>
          </Link>
          <Link to={'/category/business'} >
            <li className='list-group-item   p-1 m-2'>
              <button  className={` btn btn-${bgColor} shadow `} type='button' >Business</button>
            </li>
          </Link>
          <Link to={'/category/entertainment'} >
            <li className='list-group-item   p-1 m-2'>
              <button  className={` btn btn-${bgColor} shadow `} type='button' >Entertainment</button>
            </li>
          </Link>
          <Link to={'/category/health'} >
            <li className='list-group-item   p-1 m-2'>
              <button  className={` btn btn-${bgColor} shadow `} type='button' >Health</button>
            </li>
          </Link>
          <Link to={'/category/science'} >
            <li className='list-group-item   p-1 m-2'>
              <button  className={` btn btn-${bgColor} shadow `} type='button' >Science</button>
            </li>
          </Link>
          <Link to={'/category/sports'} >
            <li className='list-group-item   p-1 m-2'>
              <button  className={` btn btn-${bgColor} shadow `} type='button' >Sports</button>
            </li>
          </Link>
          <Link to={'/category/technology'} >
            <li className='list-group-item   p-1 m-2'>
              <button  className={` btn btn-${bgColor} shadow `} type='button' >Technology</button>
            </li>
          </Link>
        </ul>
      </div >
    </>
  )
};
