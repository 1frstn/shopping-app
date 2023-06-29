import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Cart from './components/Cart'
import RootLayout from './components/RootLayout'

function App() {


  return (
    <BrowserRouter>
    <RootLayout/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
