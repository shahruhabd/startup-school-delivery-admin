import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Button,
} from '@mui/material';
import {
  Dashboard,
  DirectionsCar,
  Map,
  School,
  People,
  ExitToApp,
} from '@mui/icons-material';

const drawerWidth = 300;

const NavigationDrawer = ({ open, onClose }) => {
  const drawer = (
    <Box
      sx={{ width: drawerWidth, display: 'flex', flexDirection: 'column', height: '100%' }}
      role="presentation"
    >
      <Typography variant="h6" noWrap sx={{ p: 2 }}>
        Иванов Иван Иванович
      </Typography>
      <Divider />
      <List>
        {['Дашборд', 'Водители', 'Маршруты', 'Ученики', 'Родители'].map(
          (text, index) => (
            <ListItem button key={text} onClick={onClose}>
              <ListItemIcon>
                {index === 0 ? (
                  <Dashboard />
                ) : index === 1 ? (
                  <DirectionsCar />
                ) : index === 2 ? (
                  <Map />
                ) : index === 3 ? (
                  <School />
                ) : (
                  <People />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <Button
        variant="outlined"
        color="primary"
        startIcon={<ExitToApp />}
        fullWidth
        sx={{ m: 2 }}
      >
        Выход
      </Button>
    </Box>
  );

  return drawer;
};

export default NavigationDrawer;
