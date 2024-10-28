import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicLayout from '../../Pages/Public/Layouts/PublicLayout'
import Home from '../../Pages/Public/Home'
import About from '../../Pages/Public/About'
import Technology from '../../Pages/Public/Technology'
import Services from '../../Pages/Public/Services'
import Career from '../../Pages/Public/Career'
import Contact from '../../Pages/Public/Contact'

const PublicRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<PublicLayout />} >
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/technology' element={<Technology />} />
                    <Route path='/service' element={<Services />} />
                    <Route path='/career' element={<Career />} />
                    <Route path='/contact' element={<Contact />} />
                </Route>
            </Routes>

        </div>
    )
}

export default PublicRoutes
