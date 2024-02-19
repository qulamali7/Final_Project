import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.scss'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import UserProfile from './pages/UserProfile'
import PostDetail from './pages/PostDetail'
import LoginRegister from './pages/LoginRegister'
import ErrorPage from './pages/Error'
import AdminPanel from './pages/AdminPanel'
import PrivateRoute from './routes/PrivateRoute'
import AddAdmin from './pages/AddAdmin'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/blogs' element={<Blog />} />
            <Route path='/userProfile' element={<UserProfile />} />
            <Route path='/detail/:id' element={<PostDetail />} />
            <Route path='/login' element={<LoginRegister />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
          <Route path='/addAdmin' element={<AddAdmin />} />
          <Route path='/adminPanel' element={<AdminPanel />} />
          {/* <Route element={<PrivateRoute roles={["admin"]} />}>
            <Route path="/adminPanel" element={<AdminPanel />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
