import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { changeTheme } from '../state/slices'

const Navbar = () => {
    const {bgColor  , modeText} = useSelector((state)=>state.reducer.value)
    const dispatch = useDispatch()
    return (
        <>
            <div className='sticky-top' style={{ height: '50px' }}>
                <nav data-bs-theme={bgColor} className={`navbar  navbar-expand-lg fixed-top sticky-top navbar-${bgColor} bg-${bgColor} `}>
                    <div className="  container-fluid">
                        <a className="navbar-brand" href="/" >News</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a href='/' className="nav-link"  >Home</a>
                                </li>
                            </ul>
                            <div  className=" me-2 form-check form-switch">
                                <input onClick={()=>dispatch(changeTheme())}  className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  />
                                <label  className="form-check-label" htmlFor="flexSwitchCheckDefault">{modeText}</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar