import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Category() {
  const { bgColor } = useSelector((state) => state.reducer.value)
  const light = {
    backgroundColor: bgColor,
    color: 'black',
    boxShadow: ' 1px 1px 10px 1px'
  }
  const dark = {
    backgroundColor: bgColor,
    color: 'blue',
    border: '1px solid #198754',
  }
  return (
    <>
      <div className=' container  mt-4 '>
        <h6>Category</h6>
        <ul className="  d-flex  flex-row flex-wrap">
          <Link to={'/'} ><li className='list-group-item   p-1 m-2'>                             <button style={ bgColor==='white'? light:dark } className=" btn " >General</button></li></Link>
          <Link to={'/category/business'} ><li className='list-group-item   p-1 m-2'>            <button style={ bgColor==='white'? light:dark } className=" btn " >Business</button></li></Link>
          <Link to={'/category/entertainment'} ><li className='list-group-item   p-1 m-2'>       <button style={ bgColor==='white'? light:dark } className=" btn " >Entertainment</button></li></Link>
          <Link to={'/category/health'} ><li className='list-group-item   p-1 m-2'>              <button style={ bgColor==='white'? light:dark } className=" btn " >Health</button></li></Link>
          <Link to={'/category/science'} ><li className='list-group-item   p-1 m-2'>             <button style={ bgColor==='white'? light:dark } className=" btn " >Science</button></li></Link>
          <Link to={'/category/sports'} ><li className='list-group-item   p-1 m-2'>              <button style={ bgColor==='white'? light:dark } className=" btn " >Sports</button></li></Link>
          <Link to={'/category/technology'} ><li className='list-group-item   p-1 m-2'>          <button style={ bgColor==='white'? light:dark } className=" btn " >Technology</button></li></Link>
        </ul>
      </div >
    </>
  )
};
