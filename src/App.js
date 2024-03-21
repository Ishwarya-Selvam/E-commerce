import './App.css';
import ProductList from './Productlist/Productlist';
import Login from './Login/Login';
import {useState} from 'react'

function App() {
  console.log("App rendering")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const onLogin = () => {
    console.log("App Component: Login is set")
    setIsLoggedIn(!isLoggedIn)
  }
  return(
    <div className='main'>
      <div className="app">
        <h1 className='heading'>E-Commerce Application</h1>
        {
          isLoggedIn ? <ProductList/> : <Login onLogin={onLogin}/>
        }
      </div>
    </div>
  )
    
}

export default App;
