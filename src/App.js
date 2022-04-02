import './App.scss'
import Layout from './components/Layout/index.js'
import Home from './components/Home/index.js'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="" element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
