// TODO: 
// 1. Extract the product ID from the URL parameters.
// 2. Get products and loading state from the context.
// 3. Find the product that matches the product ID.
// 4. Handle loading state: Display a loading spinner and text while loading.
// 5. Handle the case when the product is found: Display product details.

import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import { useProducts } from '../context/ProductContext';
import InfoIcon from '@mui/icons-material/Info';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const ProductDetail = () => {
    // Extract the product ID from the URL parameters.
    const { productId } = useParams();

    // Get products and loading state from the context.
    const { products, loading } = useProducts();

    // Find the product that matches the product ID.
    const numericProductId = parseInt(productId, 10);
    const product = products.find((product) => product.id === numericProductId);

    return (
        <Container maxWidth="md">
            <Box textAlign="center" mt={8} mb={4}>
                {/*Handle loading state: Display a loading spinner and text(Loading...) while loading. */}
                {loading ? (
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <CircularProgress />
                        <Typography variant="body1" component="p">
                            Loading...
                        </Typography>
                    </Box>       
                    /* Handle the case when the product is found: Display product details. */
                ) : product ? (
                    <>
                        <InfoIcon style={{ fontSize: 60, marginBottom: 16 }} />
                        <Typography variant="h2" component="h1" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            {product.description}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {/* In case there were product details, they would be displayed here: */}
                            {product.details}
                        </Typography>
                    </>
                ) : (
                    /*When a product is not found, the ProductDetail component should display a "Product not found." message. */
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <ErrorOutlineIcon style={{ fontSize: 60, marginBottom: 16 }} />
                        <Typography variant="h5" component="p">
                            Product not found.
                        </Typography>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default ProductDetail;
