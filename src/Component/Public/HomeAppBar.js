import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../../assest/spiralelogo.png';
import { useThemeContext } from '../../App';
import { Link, useLocation } from 'react-router-dom';
import { Stack, useMediaQuery } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const drawerWidth = 220;
const navItems = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Technology', route: '/technology' },
    { name: 'Services', route: '/service' },
    { name: 'Career', route: '/career' },
    { name: 'Contact', route: '/contact' }
];

function HomeAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const theme = useThemeContext();
    const location = useLocation(); // Get the current location
    const isMobileView = useMediaQuery('(max-width:965px)'); // Check if screen width is 965px or less

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img src={Logo} alt="Logo" style={{ height: '30px', width: '120px' }} />
            </Typography>
            <Divider />
            <List sx={{ px: 5 }}>
                {navItems.map(({ name, route }) => (
                    <ListItem key={name} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={route}
                            sx={{
                                textAlign: 'center',
                                borderBottom: location.pathname === route ? `2px solid ${theme.palette.primary.main}` : 'none',
                                color: location.pathname === route ? theme.palette.primary.main : theme.palette.text.primary,
                                '&:hover': {
                                    backgroundColor: theme.palette.action.hover,
                                }
                            }}
                        >
                            <ListItemText primary={name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ backgroundColor: theme.palette.primary.deem, py: 0.5, px: { xs: 2, md: 14, lg: 14 } }}>
                <Stack direction={'row'} sx={{ alignItems: 'center' }}>
                    <Stack direction={'row'} spacing={1} color={'#fff'} alignItems={'center'}>
                        <CallIcon />
                        <Typography variant='body1' fontWeight={'bold'} color='#fff' >
                            +91 1202555999
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={2} sx={{ marginLeft: 'auto', color: '#fff' }}>
                        <FacebookIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                        <LinkedInIcon />
                    </Stack>
                </Stack>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    component="nav"
                    sx={{
                        background: 'transparent',
                        boxShadow: 'none',
                        position: 'static',
                    }}
                >
                    <Toolbar sx={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: { xs: 2, md: 14, lg: 14 }, py: 2
                    }}>
                        {isMobileView ? (
                            <>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{ color: '#000' }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Drawer
                                    container={container}
                                    variant="temporary"
                                    open={mobileOpen}
                                    onClose={handleDrawerToggle}
                                    ModalProps={{
                                        keepMounted: true,
                                    }}
                                    sx={{
                                        display: { xs: 'block' },
                                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, border: 'none' },
                                    }}
                                >
                                    {drawer}
                                </Drawer>
                            </>
                        ) : (
                            <>
                                <Typography
                                    component="div"
                                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                                >
                                    <img src={Logo} alt="Logo" style={{ height: '30px', width: 'auto' }} />
                                </Typography>
                                <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1, gap: theme.spacing(2) }}>
                                    {navItems.map(({ name, route }) => (
                                        <Button
                                            key={name}
                                            component={Link}
                                            to={route}
                                            sx={{
                                                color: location.pathname === route ? theme.palette.primary.main : theme.palette.text.primary,
                                                fontWeight: 'bold',
                                                borderBottom: location.pathname === route ? `2px solid ${theme.palette.primary.main}` : 'none',
                                                '&:hover': {
                                                    backgroundColor: location.pathname === route ? theme.palette.action.selected : theme.palette.action.hover,
                                                    borderBottom: location.pathname === route ? `2px solid ${theme.palette.primary.main}` : 'none',
                                                }
                                            }}
                                        >
                                            {name}
                                        </Button>
                                    ))}
                                </Box>
                            </>
                        )}
                        <Box sx={{ display: { sm: 'block' } }}>
                            <Button variant="none" sx={{ backgroundColor: theme.palette.primary.deem, borderRadius: '50px' }}>Get a quote</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default HomeAppBar;
