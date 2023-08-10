import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import login from './pages/login'




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={login} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
