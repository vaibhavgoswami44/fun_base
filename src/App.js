import { useState, React } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Category from './components/Category'
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import Spinners from './components/Spinners'

const App = () => {

  const API_KEY = process.env.REACT_APP_API_KEY
  const [mode, setMode] = useState('white')
  const [bgColor, setBgColor] = useState('white')
  const [modeText, setModeText] = useState("Enable Dark Mode")
  const [textColor, setTextColor] = useState('black')
  const [searchText, serSearchText] = useState('')
  const [alert, setAlert] = useState(false)



  const handleMode = () => {

    if (mode === 'white') {
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      setModeText('Disable Dark Mode')
      setMode('dark')
      setTextColor('white')
      setBgColor('black')
    }
    else {
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      setModeText('Enable Dark Mode')
      setMode('white')
      setTextColor('black')
      setBgColor('white')
    }
  }


  const handleText = (evt) => {
    let text = evt.target.value
    serSearchText(text)
  }
  const handleSearch = async (evt) => {


    if (searchText.length === 0) {

      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 1500)
      return evt.preventDefault();
    }
    else {
      // return evt.preventDefault();
    }
  }


  return (

    <>
      <Navbar bgColor={bgColor} textColor={textColor} modeText={modeText} handleMode={handleMode} alert={alert} />
      <div style={{ height: '45px', marginTop: '5px' }}>
        {alert ? <div className="alert alert-danger" role="alert">Please Enter Text to Search </div> : ''}
      </div>
      <form className='d-flex flex-row container mt-4 mb-3'>
        <input className="form-control me-2" type="search" placeholder="Search any Topic" aria-label="Search" onChange={handleText} />
        <Link to={`/search/${searchText}`} onClick={handleSearch} >  <button className="btn btn-outline-success" style={{ color: 'blue' }}  >Search</button> </Link>
      </form>
      <Category />
      <Routes>
        <Route path='/' element={<News search={false} key='/' API_KEY={API_KEY} category={'general'} textColor={textColor} bgColor={bgColor} />} />
        <Route path='/category/business' element={<News search={false} key='business' API_KEY={API_KEY} category={'business'} textColor={textColor} bgColor={bgColor} />} />
        <Route path='/category/entertainment' element={<News key='entertainment' API_KEY={API_KEY} category={'entertainment'} textColor={textColor} bgColor={bgColor} />} />
        <Route path='/category/health' element={<News search={false} key='helth' API_KEY={API_KEY} category={'health'} textColor={textColor} bgColor={bgColor} />} />
        <Route path='/category/science' element={<News search={false} key='science' API_KEY={API_KEY} category={'science'} textColor={textColor} bgColor={bgColor} />} />
        <Route path='/category/sports' element={<News search={false} key='sports' API_KEY={API_KEY} category={'sports'} textColor={textColor} bgColor={bgColor} />} />
        <Route path='/category/technology' element={<News search={false} key='technology' API_KEY={API_KEY} category={'technology'} textColor={textColor} bgColor={bgColor} />} />
        <Route path={`/search/${searchText}`} element={<News key='search' searchText={searchText} search={true} API_KEY={API_KEY} textColor={textColor} bgColor={bgColor} />} />
        <Route path={`/search/*`} element={ <Spinners/> } />
      </Routes>
    </>
  )
}
export default App