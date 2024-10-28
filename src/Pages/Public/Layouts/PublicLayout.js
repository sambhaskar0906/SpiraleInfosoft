import React from 'react'
import HomeAppBar from '../../../Component/Public/HomeAppBar'
import { Outlet } from 'react-router-dom'
import Footer from '../../../Component/Public/Footer'

const PublicLayout = () => {
    return (
        <div>
            <HomeAppBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default PublicLayout
