import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { changeTheme } from '../state/slices'

const Navbar = (props) => {
    // {handleLanguage,handleCountry}
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
                            {/* <div className='me-2'>
                                <label className='me-2 mb-2' style={{ color: 'black' }} >Language:</label>
                                <select className='' style={{ width: '150px' }} onChange={handleLanguage}>
                                    <option value="ar"> Arabic </option>
                                    <option value="de"> German </option>
                                    <option value="en" selected> English </option>
                                    <option value="es"> Spanish </option>
                                    <option value="fr"> French </option>
                                    <option value="he"> Hebrew </option>
                                    <option value="it"> Italian </option>
                                    <option value="nl"> Dutch </option>
                                    <option value="no"> Norwegian </option>
                                    <option value="pt"> Portuguese </option>
                                    <option value="ru"> Russian </option>
                                    <option value="sv"> Swedish </option>
                                    <option value="zh"> Chinese </option>
                                </select>
                            </div>
                            <div>
                                <label className='me-2 mb-2' style={{ color: 'black' }} >country:</label>
                                <select className='me-2' style={{ width: '150px' }} onChange={handleCountry}>
                                    <option value="AE">United Arab Emirates</option>
                                    <option value="AR">Argentina</option>
                                    <option value="AT">Austria</option>
                                    <option value="AU">Australia</option>
                                    <option value="BE">Belgium</option>
                                    <option value="BG">Bulgaria</option>
                                    <option value="BR">Brazil</option>
                                    <option value="CA">Canada</option>
                                    <option value="CH">Switzerland</option>
                                    <option value="CN">China</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CU">Cuba</option>
                                    <option value="CZ">Czech Republic</option>
                                    <option value="DE">Germany</option>
                                    <option value="EG">Egypt</option>
                                    <option value="FR">France</option>
                                    <option value="GB">United Kingdom</option>
                                    <option value="GR">Greece</option>
                                    <option value="HK">Hong Kong</option>
                                    <option value="HU">Hungary</option>
                                    <option value="ID">Indonesia</option>
                                    <option value="IE">Ireland</option>
                                    <option value="IL">Israel</option>
                                    <option value="IN" selected>India</option>
                                    <option value="IT">Italy</option>
                                    <option value="JP">Japan</option>
                                    <option value="KR">Korea, Republic of</option>
                                    <option value="LT">Lithuania</option>
                                    <option value="LV">Latvia</option>
                                    <option value="MA">Morocco</option>
                                    <option value="MX">Mexico</option>
                                    <option value="MY">Malaysia</option>
                                    <option value="NG">Nigeria</option>
                                    <option value="NL">Netherlands</option>
                                    <option value="NO">Norway</option>
                                    <option value="NZ">New Zealand</option>
                                    <option value="PH">Philippines</option>
                                    <option value="RO">Romania</option>
                                    <option value="RS">Serbia</option>
                                    <option value="RU">Russian Federation</option>
                                    <option value="SA">Saudi Arabia</option>
                                    <option value="SE">Sweden</option>
                                    <option value="SG">Singapore</option>
                                    <option value="SI">Slovenia</option>
                                    <option value="SK">Slovakia</option>
                                    <option value="TH">Thailand</option>
                                    <option value="TR">Turkey</option>
                                    <option value="TW">Taiwan, Province of China</option>
                                    <option value="UA">Ukraine</option>
                                    <option value="US">United States</option>
                                    <option value="VE">Venezuela, Bolivarian Republic of</option>
                                    <option value="ZA">South Africa</option>
                                </select>
                            </div> */}
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