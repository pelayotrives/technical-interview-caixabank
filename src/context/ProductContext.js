import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchProducts } from '../api/api';

// Create a context for product information
const ProductContext = createContext();

/**
 * Provider component for product information.
 * This component fetches product data from an API and provides it to all child components.
 * @param {Object} props - The props passed to the provider.
 * @param {ReactNode} props.children - Child components that require access to the product context.
 */
export const ProductProvider = ({ children }) => {
    // State for storing the list of products
    const [products, setProducts] = useState([]);
    // State for tracking the loading status
    const [loading, setLoading] = useState(true);

    // Effect hook to fetch product data from the API when the component mounts
    useEffect(() => {
        const getProducts = async () => {
            try {
                // Attempt to fetch product data from the API
                const data = await fetchProducts();
                // Update the products state with the fetched data
                setProducts(data);
            } catch (error) {
                // Log any errors that occur during the fetch operation
                console.error('Error fetching products:', error);
            } finally {
                // Set loading to false once the data is fetched or an error occurs
                setLoading(false);
            }
        };

        // Call the getProducts function
        getProducts();
    }, []); // Empty dependency array means this effect runs only once on mount

    return (
        // Provide the products and loading state to child components
        <ProductContext.Provider value={{ products, loading }}>
            {children}
        </ProductContext.Provider>
    );
};

/**
 * Custom hook for accessing the product context.
 * This hook simplifies the process of accessing the product information and loading state.
 * @returns {Object} The product context value, including the list of products and the loading state.
 */
export const useProducts = () => useContext(ProductContext);
