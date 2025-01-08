import React from 'react'
import HomeAppBar from '../../../Component/Public/HomeAppBar'
import { Outlet } from 'react-router-dom'
import Footer from '../../../Component/Public/Footer'
import ScrollToTopButton from '../../../Component/Public/ScrollToTopButton'
import { Toolbar } from '@mui/material'
import WhatsappChat from '../../../Component/Public/WhatsappChat'

const PublicLayout = () => {
    return (
        <div>
            <HomeAppBar />
            <Toolbar />
            <Toolbar />
            <Toolbar />
            <Outlet />
            <WhatsappChat />
            <ScrollToTopButton />
            <Footer />
        </div>
    )
}

export default PublicLayout
