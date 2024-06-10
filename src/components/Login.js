/*
TODO for Developer:

1. Implement the call to login and navigate to the homepage inside handleSubmit.
   - Call the `login` function with `username` and `password`. 👍🏻
   - Use `navigate` to redirect the user to the homepage (`'/'`) after successful login. 👍🏻

2. Implement the form validation logic in isFormValid function.
   - Ensure that both `username` and `password` are not empty. 👍🏻
   - The function should return `true` if both fields are filled, otherwise `false`. 👍🏻

3. Attach `handleSubmit` to the form's `onSubmit` event to enable form submission.  👍🏻

4. Use the `isFormValid` function to determine if the submit button should be enabled or disabled.  👍🏻
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Container, TextField, Button, Box, Typography } from '@mui/material';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormValid()) {
            try {
                await login(username, password);
                navigate('/');
            } catch (error) {
                console.error('Failed to login:', error);
            }
        }
    };

    const isFormValid = () => {
        return username.trim() !== '' && password.trim() !== '';
    };

    return (
        <Container maxWidth="sm">
            <Box mt={8} textAlign="center">
                <Typography variant="h4" component="h1" gutterBottom>
                    Log In
                </Typography>
                {/* Attach `handleSubmit` to the form's `onSubmit` event to enable form submission.*/}
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    {/* Use the `isFormValid` function to determine if the submit button should be enabled or disabled.*/}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={!isFormValid()}
                    >
                        Log In
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Login;
