import { BsCart4 } from "react-icons/bs";
import { DiLaravel } from "react-icons/di";
import { FaApple, FaCaretRight, FaLaptopCode, FaMobileAlt, FaReact, FaWordpress } from "react-icons/fa";
import { FcAndroidOs, FcTreeStructure } from "react-icons/fc";
import { GiLaptop } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdAppSettingsAlt } from "react-icons/md";
import { SiPhp } from "react-icons/si";
import { TbApi, TbUxCircle, } from "react-icons/tb";

const menuData = [
    { name: "Home", route: "/" },
    { name: "About", route: '/about' },
    {
        name: "Services", icon1: <IoMdArrowDropdown />, icon2: <FaCaretRight />,
        subMenu: [
            {
                name: "Web Development", route: "/services/web-development", icon1: <IoMdArrowDropdown />, icon2: <FaCaretRight />, icon: <FaLaptopCode style={{ color: 'blue' }} />,
                subMenu: [
                    { name: "PHP", route: "/services/web-development/php", icon: <SiPhp style={{ color: '#3f51b5' }} /> },
                    { name: "Laravel", route: "/services/web-development/laravel", icon: <DiLaravel style={{ color: '#f64336' }} /> },
                    { name: "React Js", route: "/services/web-development/reactjs", icon: <FaReact style={{ color: '#2196f3' }} /> },
                ],
            },
            {
                name: "App Development", route: "/services/app-development", icon1: <IoMdArrowDropdown />, icon2: <FaCaretRight />, icon: <FaMobileAlt style={{ color: '#ff9800' }} />,
                subMenu: [
                    { name: "React Native App Development", route: "/services/app-development/react-native", icon: <FaReact style={{ color: '#2196f3' }} /> },
                    { name: "Native Andiod App Development", route: "/services/app-development/native-android", icon: <FcAndroidOs style={{ color: '#4caf50' }} /> },
                    { name: "Native IOS App Development", route: "/services/app-development/native-ios", icon: <FaApple style={{ color: '#212121' }} /> },
                    { name: "Hybrid App Development", route: "/services/app-development/hybrid", icon: <FcTreeStructure style={{ color: 'blue' }} /> },
                    { name: "Cross-Plateform App Development", route: "/services/app-development/cross-plateform", icon: <MdAppSettingsAlt style={{ color: '#f88336' }} /> },
                ],
            },
            {
                name: "CMS Development", route: "/services/cms-development", icon1: <IoMdArrowDropdown />, icon2: <FaCaretRight />, icon: <FaWordpress style={{ color: '#4fc3f7' }} />,
                subMenu: [
                    { name: "WordPress", route: "/services/cms-development/wordpress", icon: <FaWordpress style={{ color: '#4fc3f7' }} /> },
                ],
            },
            {
                name: "Website Designing", route: "/services/web-designing", icon1: <IoMdArrowDropdown />, icon2: <FaCaretRight />, icon: <GiLaptop style={{ color: '#ff9800' }} />,
                subMenu: [
                    { name: "UI/UX", route: "/services/web-designing/uiux", icon: <TbUxCircle style={{ color: '#ff9800' }} /> },
                ],
            },
            { name: "ECommerce Services", route: "/services/ecommers-service", icon: <BsCart4 style={{ color: '#bf360c' }} /> },
            { name: "API Services", route: "/services/api-service", icon: <TbApi style={{ color: '#212121' }} /> },
        ],
    },
    { name: "Career", route: '/career' },
    { name: "Contact", route: '/contact' },
];

export default menuData;

