import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Avatar, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import ErrorIcon from '@mui/icons-material/Error';

const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <AppBar position="static" color="primary" elevation={0}>
            <Toolbar>
                <Container maxWidth="lg" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" color="inherit" noWrap>
                        <Button color="inherit" component={Link} to="/" role="button">Home</Button>
                    </Typography>
                    <Box>
                        <Button color="inherit" component={Link} to="/products/savings-account" role="button">Savings Account</Button>
                        <Button color="inherit" component={Link} to="/products/credit-card" role="button">Credit Card</Button>
                        <Button color="inherit" component={Link} to="/products/personal-loan" role="button">Personal Loan</Button>
                    </Box>
                    <Box>
                        {isAuthenticated ? (
                            <Button color="inherit" onClick={logout}>
                                <Avatar sx={{ bgcolor: 'orange', mr: 1 }}>U</Avatar> Logout
                            </Button>
                        ) : (
                            <Button color="inherit" component={Link} to="/login" role="button">Login</Button>
                        )}
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
