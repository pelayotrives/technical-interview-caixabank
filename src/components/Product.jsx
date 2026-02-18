/*
TODO for Developer:
Implement the `Button` component to navigate to more information about the product. 👍🏻

Required Props:
- name: The name of the product. 👍🏻
- description: The description of the product.  👍🏻
- link: The link to navigate to more information about the product. Example: /products/test-product 👍🏻

Rendering Props:
Render the `name` and `description` of the product using the provided props. 👍🏻

Desestructuring Props:
Destructure the props in the function parameters for readability. 👍🏻
*/

import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// Product component definition
/* Desestructuring Props:
Destructure the props in the function parameters for readability. */
const Product = ({name, description, link}) => (
    // Card component to display product information
    <Card style={{ marginBottom: '20px' }}>
        {/* CardContent for the content of the product */}
        <CardContent>
            {/*   Render the `name` and `description` of the product using the provided props. */}
            {/* Title of the product */}
            <Typography variant="h5" component="h2">
                {name}
            </Typography>
            {/* Description of the product */}
            <Typography variant="body2" component="p" style={{ marginBottom: '20px' }}>
                {description}
            </Typography>
            {/* Implement the `Button` component to navigate to more information about the product. */}
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`/products/${link}`}
                aria-roledescription='button'
                role="button"
            >
                More Information
            </Button>
        </CardContent>
    </Card>
);

export default Product;
