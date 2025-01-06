import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicLayout from '../../Pages/Public/Layouts/PublicLayout'
import Home from '../../Pages/Public/Home'
import About from '../../Pages/Public/About'
import Services from '../../Pages/Public/Services'
import Career from '../../Pages/Public/Career'
import Contact from '../../Pages/Public/Contact'
import WebDevelop from '../../Pages/DropDown/WebDevelopment/WebDevelop'
import AppDevlop from '../../Pages/DropDown/AppDevelopment/AppDevlop'
import CmsDevelop from '../../Pages/DropDown/CmsDevelopment/CmsDevelop'
import WebDesign from '../../Pages/DropDown/WebsiteDesigning/WebDesign'
import Ecommers from '../../Pages/DropDown/EcommersServices/Ecommers'
import ApiService from '../../Pages/DropDown/APIServices/ApiService'
import Php from '../../Pages/DropDown/WebDevelopment/WebDevelopItems/Php'
import Laravel from '../../Pages/DropDown/WebDevelopment/WebDevelopItems/Laravel'
import ReactJs from '../../Pages/DropDown/WebDevelopment/WebDevelopItems/ReactJs'
import ReactNativeApp from '../../Pages/DropDown/AppDevelopment/AppDevelopItems/ReactNativeApp'
import NativeAndroidApp from '../../Pages/DropDown/AppDevelopment/AppDevelopItems/NativeAndroidApp'
import NativeIosApp from '../../Pages/DropDown/AppDevelopment/AppDevelopItems/NativeIosApp'
import HybridApp from '../../Pages/DropDown/AppDevelopment/AppDevelopItems/HybridApp'
import CrossPlateformApp from '../../Pages/DropDown/AppDevelopment/AppDevelopItems/CrossPlateformApp'
import Wordpress from '../../Pages/DropDown/CmsDevelopment/CmsDevelopItem/Wordpress'
import UiUx from '../../Pages/DropDown/WebsiteDesigning/WebsiteDesignitem/UiUx'
import PrivacyPolicy from '../../Pages/Public/PrivacyPolicy'
import OurCalture from '../../Pages/Public/OurCalture'
import Apply from '../../Pages/Public/Apply'
import SoftwareDevelopement from '../../Pages/Public/SoftwareDevelopement'
import GrowBussiness from '../../Pages/Public/GrowBussiness'
import CreateBrands from '../../Pages/Public/CreateBrands'
import Error from '../../Pages/Public/Error'


const PublicRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<PublicLayout />} >
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='#' element={<Services />} />
                    <Route path='/career' element={<Career />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                    {/* web Development DropDown */}
                    <Route path='/services/web-development' element={<WebDevelop />} />
                    <Route path='/services/web-development/php' element={<Php />} />
                    <Route path='/services/web-development/laravel' element={<Laravel />} />
                    <Route path='/services/web-development/reactjs' element={<ReactJs />} />

                    {/* app Development DropDown */}
                    <Route path='/services/app-development' element={<AppDevlop />} />
                    <Route path='/services/app-development/react-native' element={<ReactNativeApp />} />
                    <Route path='/services/app-development/native-android' element={<NativeAndroidApp />} />
                    <Route path='/services/app-development/native-ios' element={<NativeIosApp />} />
                    <Route path='/services/app-development/hybrid' element={<HybridApp />} />
                    <Route path='/services/app-development/cross-plateform' element={<CrossPlateformApp />} />

                    {/* cms Development DropDown */}
                    <Route path='/services/cms-development' element={<CmsDevelop />} />
                    <Route path='/services/cms-development/wordpress' element={<Wordpress />} />

                    {/* webdesign Development DropDown */}
                    <Route path='/services/web-designing' element={<WebDesign />} />
                    <Route path='/services/web-designing/uiux' element={<UiUx />} />

                    {/* eCommers Development DropDown */}
                    <Route path='/services/ecommers-service' element={<Ecommers />} />

                    {/* Api Services Development DropDown */}
                    <Route path='/services/api-service' element={<ApiService />} />

                    {/* our Culuture */}
                    <Route path='/ourCuluture' element={<OurCalture />} />

                    {/* Apply */}
                    <Route path='/apply' element={<Apply />} />

                    {/* Software Development */}
                    <Route path='/software-development' element={<SoftwareDevelopement />} />

                    {/* Grow Bussiness */}
                    <Route path='/grow-bussiness' element={<GrowBussiness />} />

                    {/* Create Brands */}
                    <Route path='/create-brands' element={<CreateBrands />} />
                </Route>
                {/* error page */}
                <Route path='*' element={<Error />} />
            </Routes>

        </div >
    )
}

export default PublicRoutes
