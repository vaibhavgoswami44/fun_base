import { useState, React } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Category from './components/Category'
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import Spinners from './components/Spinners'

const App = () => {

  const API_KEY = process.env.REACT_APP_API_KEY
  const [searchText, serSearchText] = useState('')
  const [alert, setAlert] = useState(false)

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
  }


  return (

    <>
      <Navbar alert={alert} />
      <div style={{ height: '45px', marginTop: '5px' }}>
        {alert ? <div className="alert alert-danger" role="alert">Please Enter Text to Search </div> : ''}
      </div>
      <form className='d-flex flex-row container mt-4 mb-3'>
        <input className="form-control me-2" type="search" placeholder="Search any Topic" aria-label="Search" onChange={handleText} />
        <Link to={`/search/${searchText}`} onClick={handleSearch} >  <button className="btn btn-outline-success" style={{ color: 'blue' }}  >Search</button> </Link>
      </form>
      <Category />
      <Routes>
        <Route path='/' element={<News search={false} key='/' API_KEY={API_KEY} category={'general'} />} />
        <Route path='/category/business' element={<News search={false} key='business' API_KEY={API_KEY} category={'business'} />} />
        <Route path='/category/entertainment' element={<News key='entertainment' API_KEY={API_KEY} category={'entertainment'} />} />
        <Route path='/category/health' element={<News search={false} key='helth' API_KEY={API_KEY} category={'health'} />} />
        <Route path='/category/science' element={<News search={false} key='science' API_KEY={API_KEY} category={'science'} />} />
        <Route path='/category/sports' element={<News search={false} key='sports' API_KEY={API_KEY} category={'sports'} />} />
        <Route path='/category/technology' element={<News search={false} key='technology' API_KEY={API_KEY} category={'technology'} />} />
        <Route path={`/search/${searchText}`} element={<News key='search' searchText={searchText} search={true} API_KEY={API_KEY} />} />
        <Route path={`/search/*`} element={<Spinners />} />
      </Routes>
    </>
  )
}
export default App