import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LxtNavBar from './components/LxtNavBar'
import LxtHome from './pages/LxtHome'
import LxtAbout from './pages/LxtAbout'
import LxtContact from './pages/LxtContact'
import LxtProduct from './pages/LxtProduct'
import LxtProductDetail from './pages/LxtProductDetail'
import LxtNotFound from './pages/LxtNotFound'
import LxtUsers from './pages/LxtUsers'
import LxtUserAdd from './pages/LxtUserAdd'
import LxtUserEdit from './pages/LxtUserEdit'
import LxtCategories from './pages/LxtCategories'

export default function LxtApp() {
  return (
    <div className='container border'>
      <h1>React Route - Demo [Lê Xuân Toàn]</h1>
      <hr />
      <BrowserRouter>
        <LxtNavBar />
        <Routes>
          <Route path='/' element={<LxtHome />} />
          <Route path='/about' element={<LxtAbout />} />
          <Route path='/contact' element={<LxtContact />} />

          {/* Nested route  */}
          <Route path='/products' element={<LxtProduct />} >
            <Route path=":id" element={<LxtProductDetail />} />
          </Route>

          <Route path='/users' element={<LxtUsers />}> </Route>
          <Route path="/users/add" element={<LxtUserAdd />} />
          <Route path="/users/edit/:id" element={<LxtUserEdit />} />

          <Route path='/categories' element={<LxtCategories />}> </Route>

          {/* 404 page  */}
          <Route path='*' element={<LxtNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}