import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { useNavigate } from 'react-router';

export const Navigation = () => {
  const navigate = useNavigate();

  const handlePageChange = location => {
    navigate(location);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, paddingX: '20px' }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => handlePageChange('/')}
            >
              <MusicNoteIcon />
              TikTuk
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
