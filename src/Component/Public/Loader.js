import React from 'react';
import { Box, Typography } from '@mui/material';

const Loader = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.1)', // Semi-transparent background
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: 50,
                    height: 50,
                    transformStyle: 'preserve-3d',
                    animation: 'rotateCube 2s infinite ease-in-out',
                }}
            >
                {/* Cube Faces */}
                <Box
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#3498db',
                        transform: 'rotateY(0deg) translateZ(25px)',
                    }}
                ></Box>
                <Box
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#e74c3c',
                        transform: 'rotateY(90deg) translateZ(25px)',
                    }}
                ></Box>
                <Box
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#f39c12',
                        transform: 'rotateX(90deg) translateZ(25px)',
                    }}
                ></Box>
                <Box
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#2ecc71',
                        transform: 'rotateX(-90deg) translateZ(25px)',
                    }}
                ></Box>
                <Box
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#9b59b6',
                        transform: 'rotateY(180deg) translateZ(25px)',
                    }}
                ></Box>
                <Box
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#1abc9c',
                        transform: 'rotateY(-90deg) translateZ(25px)',
                    }}
                ></Box>
            </Box>

            <Typography sx={{ marginTop: 2, fontSize: 18, fontWeight: 500, color: '#333' }}>
                Loading...
            </Typography>

            {/* Keyframes for 3D Cube Rotation */}
            <style>
                {`
          @keyframes rotateCube {
            0% {
              transform: rotateX(0) rotateY(0);
            }
            25% {
              transform: rotateX(90deg) rotateY(0);
            }
            50% {
              transform: rotateX(90deg) rotateY(90deg);
            }
            75% {
              transform: rotateX(0) rotateY(90deg);
            }
            100% {
              transform: rotateX(0) rotateY(0);
            }
          }
        `}
            </style>
        </Box>
    );
};

export default Loader;
