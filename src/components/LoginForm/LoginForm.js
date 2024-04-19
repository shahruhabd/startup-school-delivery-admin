import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            setErrorMessage('Пожалуйста, введите имя пользователя и пароль.');
        } else {
            setErrorMessage('');
            // Здесь место для вашего кода аутентификации
            console.log('Попытка входа', { username, password });
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Логин"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                variant="outlined"
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
            />
            {errorMessage && (
                <Box mt={2} mb={1} color="error.main">
                    {errorMessage}
                </Box>
            )}
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Войти
            </Button>
        </Box>
    );
};

export default LoginForm;
