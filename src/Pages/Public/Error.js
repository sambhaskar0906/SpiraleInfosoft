import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import ErrorImg from '../../assest/404img.jpg'

const Error = () => {
    const navigate = useNavigate();
    const gotoHome = () => {
        navigate("/")
    }

    return (
        <Box
            m={3}
            sx={{
                display: { xs: 'block', md: 'flex' },
                justifyContent: 'space-around',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    width: { xs: '100%', sm: '80%', md: '50%' },
                    textAlign: 'center'
                }}
            >
                <img
                    src={ErrorImg}
                    alt="Error"
                    style={{
                        width: '100%',
                        maxWidth: '500px',
                        height: 'auto'
                    }}
                />
            </Box>

            <Box
                sx={{
                    width: { xs: '100%', sm: '80%', md: '50%' },
                    textAlign: 'center'
                }}
            >
                <Stack spacing={2}>
                    <Typography variant='h4'>
                        404
                    </Typography>
                    <Typography variant='h5'>
                        UH OH! You're Lost....
                    </Typography>
                    <Typography variant='body2'>
                        The page you are looking for does not exist. How you got here is a mystery.
                    </Typography>
                    <Typography variant='body2'>
                        But you can click the below button to go back to the homepage.
                    </Typography>
                </Stack>
                <Box marginTop='16px'>
                    <Button
                        variant="outlined"
                        startIcon={<KeyboardBackspaceIcon />}
                        onClick={gotoHome}
                    >
                        Go To Home
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Error;
