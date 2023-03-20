import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { changeTheme } from '../state/slices'

const Navbar = () => {
    const {bgColor ,textColor , modeText} = useSelector((state)=>state.reducer.value)
    const dispatch = useDispatch()
    return (
        <>
            <div className='sticky-top' style={{ height: '50px' }}>
                <nav className="navbar  navbar-expand-lg fixed-top sticky-top " style={{ boxShadow: bgColor === 'white' ? '1px 1px 10px 1px' : '1px 1px 10px 1px #525252', backgroundColor: bgColor }}>
                    <div className="  container-fluid">
                        <a className="navbar-brand" href="/" style={{ color: textColor }}>News</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ filter: bgColor === 'white' ? 'invert(0)' : 'invert(1)' }}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a href='/' className="nav-link" style={{ color: textColor }} >Home</a>
                                </li>
                            </ul>
                            <div className=" me-2 form-check form-switch">
                                <input  onClick={()=>dispatch(changeTheme())} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: textColor }}>{modeText}</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar