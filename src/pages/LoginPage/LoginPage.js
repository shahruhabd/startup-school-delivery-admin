import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Container, Typography, Box, CssBaseline, useTheme } from '@mui/material';

const LoginPage = () => {
    const theme = useTheme(); // Используем хук темы для доступа к цветовой палитре

    return (
        <Container component="main">
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: 'background.default',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: theme.spacing(3),
                        borderRadius: '4px',
                        boxShadow: 3,
                        width: 600,
                        maxWidth: '100%',
                        bgcolor: 'background.paper',
                    }}
                >
                    {/* Текст, указывающий на назначение страницы */}
                    <Typography component="h1" variant="h5" sx={{ color: 'text.secondary', mb: 2 }}>
                        Админ панель
                    </Typography>
                    {/* Заголовок страницы */}
                    <Typography component="h2" variant="h6" sx={{ marginBottom: 2, color: 'text.primary' }}>
                        Вход
                    </Typography>
                    <LoginForm />
                </Box>
            </Box>
        </Container>
    );
};

export default LoginPage;   