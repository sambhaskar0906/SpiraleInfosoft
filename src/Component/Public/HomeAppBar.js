import React, { useEffect, useState } from "react";
import {
    AppBar,
    Box,
    CssBaseline,
    Drawer,
    IconButton,
    Toolbar,
    Button,
    useMediaQuery,
    useTheme,
    Stack,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assest/pvf7cj26.png";
import menuData from "../../Component/Public/MenuData";
import DropdownMenu from "../Public/DropDown";
import AccordionMenu from "../Public/AccordionMenu";
import AOS from "aos";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { CloseOutlined } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import { useNavigate } from "react-router-dom";

const drawerWidth = 270; // Width of the drawer
const ContactBar = ({ isVisible }) => (
    <Box data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        sx={{
            background: "#070B3B",
            py: 0.5,
            px: { xs: 2, sm: 10, lg: 14 },
            display: isVisible ? 'block' : 'none',
        }}
    >
        <Stack direction="row" alignItems="center">
            <Stack direction="row" spacing={1} color="#fff" alignItems="center">
                <CallIcon />
                <Typography variant="body2" fontWeight="bold" color="#fff">
                    +91 1202555999
                </Typography>
            </Stack>
            <Stack
                direction="row"
                spacing={2}
                sx={{ marginLeft: "auto", color: "#fff" }}
            >
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <LinkedInIcon />
            </Stack>
        </Stack>
    </Box>
);

const HomeAppBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [isContactVisible, setIsContactVisible] = useState(true);
    const theme = useTheme();
    const isMobileView = useMediaQuery("(max-width:965px)");
    const navigate = useNavigate();

    const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
    const handleShowMoreToggle = () => setShowMore((prev) => !prev);

    // Handle scroll to toggle ContactBar visibility
    useEffect(() => {
        const handleScroll = () => {
            setIsContactVisible(window.scrollY < 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 500 }); // Initialize AOS with default duration
    }, []);

    const handleGetaQuote = () => {
        window.scrollTo(0, 0);
        navigate('/contact');
    }

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" elevation={1}
                    component="nav"
                    sx={{
                        background: "#FFF",
                        boxShadow: "none",
                        position: "fixed",
                        zIndex: 1200,
                        transition: "background 0.3s ease",
                    }}
                >
                    <ContactBar isVisible={isContactVisible} />
                    <Toolbar
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            py: 0.5,
                            px: { xs: 2, sm: 10, lg: 14 },
                        }}
                    >
                        {/* Logo Section */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                src={Logo}
                                alt="Logo"
                                style={{ height: "50px", width: "180px", cursor: 'pointer' }}
                                onClick={() => navigate('/')}
                            />
                        </Box>

                        {/* Desktop Navigation */}
                        {!isMobileView && (
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: theme.spacing(1),
                                }}
                            >
                                {menuData?.map((menuItem, index) => (
                                    <DropdownMenu
                                        key={index}
                                        data-aos="zoom-in"
                                        items={[menuItem]}
                                    />
                                ))}
                            </Box>
                        )}

                        {/* Mobile Menu Button */}
                        {isMobileView && (
                            <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                {/* <IconButton
                                    color="inherit"
                                    aria-label="show more"
                                    edge="end"
                                    onClick={handleShowMoreToggle}
                                    sx={{ color: "#000" }}
                                >
                                    <MoreHorizIcon />
                                </IconButton> */}
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="end"
                                    onClick={handleDrawerToggle}
                                    sx={{ color: "#000" }}
                                >
                                    {mobileOpen ? <CloseOutlined /> : <MenuIcon />}
                                </IconButton>
                            </Stack>
                        )}

                        {/* Quote Button */}
                        <Button
                            variant="contained"
                            sx={{
                                display: { md: "block", xs: "none" },
                                borderRadius: "50px",
                                textAlign: "center",
                                ml: { xs: 1, md: 0 },
                            }}
                            onClick={handleGetaQuote}
                        >
                            Get a Quote
                        </Button>
                    </Toolbar>
                </AppBar>

                {/* Mobile Drawer */}
                <Drawer
                    anchor="left"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    sx={{
                        "& .MuiDrawer-paper": { width: drawerWidth, backgroundColor: "#fff" },
                    }}
                >
                    <Box
                        sx={{ width: drawerWidth, py: 2, height: "100vh", overflowY: "auto" }}
                    >
                        <AccordionMenu
                            menuData={menuData.map((menu) => ({
                                ...menu,
                                action: () => {
                                    handleDrawerToggle(); // Close the Drawer
                                    window.location.href = menu.route; // Refresh the page
                                    window.scrollTo(0, 0); // Scroll to the top
                                },
                            }))}
                            onClose={handleDrawerToggle}
                        />
                    </Box>
                </Drawer>

            </Box>

            {/* Show More Button */}
            {showMore && (
                <Box>
                    <Toolbar />
                    <Box
                        sx={{
                            background: '#FFF',
                            position: "fixed",
                            top: '10%',
                            height: '100px',
                            width: '200px',
                            right: 10,
                            zIndex: 1300,
                        }}
                    >

                        <Box sx={{ m: 2, p: 2, background: theme.palette.primary.dark }}>
                            <Button sx={{ borderRadius: '50px', background: '#fff' }}
                                fullWidth
                                variant="none"
                                color="info"
                                onClick={handleShowMoreToggle}
                            >
                                Get More
                            </Button>
                        </Box>
                    </Box >
                </Box>

            )}
        </>
    );
};

export default HomeAppBar;