// TODO:
// 1. Fetch products from context 👍🏻
// 2. If loading, display "Loading..." message 👍🏻
// 3. Implement the map function for products in the return section.
//    - Use Grid item for each product. 👍🏻
//    - Ensure each product takes up the entire width in its own row (xs={12}). 👍🏻
// 
// 4. Verify that products are correctly rendered inside the Grid container. 👍🏻
// 5. Export the component wrapped with the withLoading HOC 👍🏻

// Import dependencies
import React from 'react';
import { useProducts } from '../context/ProductContext';
import Product from './Product';
import withLoading from '../hoc/withLoading';
import { Grid } from '@mui/material'; // Import Grid from Material-UI

const ProductList = ({ isLoading }) => {
    // Fetch products from context
    const { products } = useProducts();

    // If loading, display "Loading..." message
    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <Grid container spacing={2}> {/* Use Grid container with spacing */}
            {products.map((product) => (
                <Grid item xs={12} key={product.id}> 
                    <Product {...product} />
                </Grid>
            ))}

        </Grid>
    );
};

// Export the component wrapped with the withLoading HOC
export default withLoading(ProductList);