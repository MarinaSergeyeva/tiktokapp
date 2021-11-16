import React from 'react';
import Box from '@mui/material/Box';
import { CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
