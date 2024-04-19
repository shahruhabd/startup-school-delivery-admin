import React, { useState } from 'react';
import {
  IconButton,
  Drawer,
  Box,
  CssBaseline,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import NavigationDrawer from '../../components/NavigationDrawer/NavigationDrawer';

const HomePage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, position: 'absolute', top: 10, left: 10 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 },
        }}
      >
        <NavigationDrawer open={drawerOpen} onClose={handleDrawerToggle} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Основной контент */}
      </Box>
    </Box>
  );
};

export default HomePage;
