import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ProductList from './ProductList';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    // TODO: Use useEffect to simulate loading and update the loading state
    // Once the products are loaded, set isLoading to false 👍🏻
    // Simulate a 2-second loading time 👍🏻
    // Cleanup the timer to prevent memory leaks 👍🏻
    // Empty dependency array ensures the effect runs only once on component mount 👍🏻

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (

        <Container maxWidth="lg">
            <Box textAlign="center" mt={8} mb={6}>
                <AccountBalanceIcon style={{ fontSize: 60, marginBottom: 16 }} />
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to Our Bank
                </Typography>

                <Typography variant="h5" component="p" gutterBottom>
                    Explore our banking products and find the one that best suits your needs.
                </Typography>
            </Box>

            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={10} lg={8}>
                    <ProductList isLoading={isLoading} />
                </Grid>
            </Grid>
        </Container>
    );
};


export default Home;
