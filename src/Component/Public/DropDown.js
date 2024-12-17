import React, { useState, useEffect } from "react";
import { Button, Typography, Box, IconButton, useTheme, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { useLocation } from "react-router-dom";

const Dropdown = styled("div")({
    position: "relative",
    display: "block",
    "&:hover > div": {
        display: "block",
    },
});

const DropdownContent = styled("div")({
    display: "none",
    position: "absolute",
    backgroundColor: "#fff",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    zIndex: 1,
    minWidth: "220px",
    borderLeft: "2px solid #03a9f4",
});

const NestedDropdown = styled(DropdownContent)({
    left: "100%",
    top: 0,
});

const StyledButton = styled(Button)(({ active }) => ({
    textTransform: "none",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    overflow: "hidden",
    background: "none",
    position: "relative",
    color: active ? "#03a9f4" : "#000",
    "&::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        height: active ? "1px" : "100px",
        width: active ? "100%" : "0",
        backgroundColor: "#03a9f4",
        transition: "width 0.5s ease-in-out, color 0.3s ease-in-out",
        zIndex: -1,
    },
    "&:hover::after": {
        height: "100%",
        width: "100%",
    },
    "&:hover": {
        color: "#fff",
    },
}));

const DropdownMenu = ({ items }) => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const location = useLocation();
    const theme = useTheme();


    const renderMenu = (menuItems) =>
        menuItems.map((item, index) => (
            <Dropdown key={index}>
                <StyledButton
                    fullWidth
                    href={item.route || "#"}
                    active={location.pathname === item.route}
                >
                    {item.icon && (
                        <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                            {item.icon}
                        </Box>
                    )}
                    <Stack direction={'row'} gap={1} alignItems={'center'}>
                        <Typography variant="body2" fontWeight={"bold"}>
                            {item.name}
                        </Typography>
                        <Typography variant="h5" sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                            {item.icon1}
                        </Typography>
                    </Stack>
                </StyledButton>
                {item.subMenu && (
                    <DropdownContent data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="100">
                        {item.subMenu.map((subItem, subIndex) =>
                            subItem.subMenu ? (
                                <Dropdown key={subIndex}>
                                    <StyledButton
                                        fullWidth
                                        href={subItem.route || "#"}
                                        active={location.pathname === subItem.route}
                                        onMouseEnter={() => setHoveredItem(subIndex)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                        sx={{ borderBottom: '1px solid #e9e9e9', }}
                                    >
                                        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                            <IconButton size="small" sx={{ background: theme.palette.info.light, mr: 1, display: "flex", alignItems: "center" }}>
                                                {subItem.icon}
                                            </IconButton>
                                            <Typography variant="body2">{subItem.name}</Typography>
                                            <Typography variant="h5" sx={{}}>
                                                {hoveredItem === subIndex ? item.icon2 : item.icon1}
                                            </Typography>
                                        </Box>
                                    </StyledButton>
                                    <NestedDropdown>
                                        {subItem.subMenu.map((nestedItem, nestedIndex) => (
                                            <StyledButton
                                                key={nestedIndex}
                                                href={nestedItem.route || "#"}
                                                active={location.pathname === nestedItem.route}
                                            >
                                                {nestedItem.icon && (
                                                    <IconButton size="small" sx={{ background: theme.palette.info.light, mr: 1, display: "flex", alignItems: "center" }}>
                                                        {nestedItem.icon}
                                                    </IconButton>
                                                )}
                                                <Typography variant="body2">
                                                    {nestedItem.name}
                                                </Typography>
                                            </StyledButton>
                                        ))}
                                    </NestedDropdown>
                                </Dropdown>
                            ) : (
                                <StyledButton
                                    sx={{ borderBottom: '1px solid #e9e9e9', }}
                                    key={subIndex}
                                    href={subItem.route || "#"}
                                    active={location.pathname === subItem.route}
                                >
                                    {subItem.icon && (
                                        <IconButton size="small" sx={{ background: theme.palette.info.light, mr: 1, display: "flex", alignItems: "center", pl: 1.4 }}>
                                            {subItem.icon}
                                        </IconButton>
                                    )}
                                    <Typography data-aos="fade-left" variant="body2">{subItem.name}</Typography>
                                </StyledButton>
                            )
                        )}
                    </DropdownContent>
                )}
            </Dropdown >
        ));

    return <>{renderMenu(items)}</>;
};

export default DropdownMenu;
