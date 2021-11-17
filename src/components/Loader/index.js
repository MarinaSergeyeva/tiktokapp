import React from 'react';
import Box from '@mui/material/Box';
import { CircularProgress, Typography, useTheme } from '@mui/material';

const Loader = () => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{ display: 'block', mb: '20px' }}
        component="p"
        variant="h6"
        color={palette.primary.main}
      >
        A little more patience, bro :)
      </Typography>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
