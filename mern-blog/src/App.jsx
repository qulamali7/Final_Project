import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.scss'
import MainLayout from './layout/MainLayout'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path="/" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
