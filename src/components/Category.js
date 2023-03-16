import React from 'react'
import { Link } from 'react-router-dom'

export default function Category(props)  {
    return(
        <>
         <div className=' container  mt-4 '>
        <h6>Category</h6>
        <ul className="  d-flex  flex-row flex-wrap">
         <Link to={'/'} ><li className='list-group-item   p-1 m-2'><button style={{ backgroundColor:   props.bgColor, color:'blue' , border:   props.bgColor === 'white' ? 'none' : '1px solid #198754', boxShadow:   props.bgColor === 'white' ? ' 1px 1px 10px 1px' : '' }}  className=" btn " >General</button></li></Link>
         <Link to={'/category/business'} ><li className='list-group-item   p-1 m-2'><button style={{ backgroundColor:   props.bgColor, color:'blue', border:   props.bgColor === 'white' ? 'none' : '1px solid #198754', boxShadow:   props.bgColor === 'white' ? ' 1px 1px 10px 1px' : '' }}  className=" btn " >Business</button></li></Link>
         <Link to={'/category/entertainment'} ><li className='list-group-item   p-1 m-2'><button style={{ backgroundColor:   props.bgColor, color:'blue', border:   props.bgColor === 'white' ? 'none' : '1px solid #198754', boxShadow:   props.bgColor === 'white' ? ' 1px 1px 10px 1px' : '' }}  className=" btn " >Entertainment</button></li></Link>
         <Link to={'/category/health'} ><li className='list-group-item   p-1 m-2'><button style={{ backgroundColor:   props.bgColor, color:'blue', border:   props.bgColor === 'white' ? 'none' : '1px solid #198754', boxShadow:   props.bgColor === 'white' ? ' 1px 1px 10px 1px' : '' }}  className=" btn " >Health</button></li></Link>
         <Link to={'/category/science'} ><li className='list-group-item   p-1 m-2'><button style={{ backgroundColor:   props.bgColor, color:'blue', border:   props.bgColor === 'white' ? 'none' : '1px solid #198754', boxShadow:   props.bgColor === 'white' ? ' 1px 1px 10px 1px' : '' }}  className=" btn " >Science</button></li></Link>
         <Link to={'/category/sports'} ><li className='list-group-item   p-1 m-2'><button style={{ backgroundColor:   props.bgColor, color:'blue', border:   props.bgColor === 'white' ? 'none' : '1px solid #198754', boxShadow:   props.bgColor === 'white' ? ' 1px 1px 10px 1px' : '' }}  className=" btn " >Sports</button></li></Link>
         <Link to={'/category/technology'} ><li className='list-group-item   p-1 m-2'><button style={{ backgroundColor:   props.bgColor, color:'blue', border:   props.bgColor === 'white' ? 'none' : '1px solid #198754', boxShadow:   props.bgColor === 'white' ? ' 1px 1px 10px 1px' : '' }}  className=" btn " >Technology</button></li></Link>
        </ul>
      </div >
        </>
    )
};
