import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './views/Mainpage';
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Mainpage/>}></Route>
  </Routes>
  <Routes>
    <Route path="/login" element={<Login/>}></Route>
  </Routes>
  <Routes>
    <Route path="/register" element={<Register/>}></Route>
  </Routes>
  <Routes>
    <Route path="/home" element={<Home/>}></Route>
  </Routes>
</BrowserRouter>
  )
}

export default App