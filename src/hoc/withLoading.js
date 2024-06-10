// Import React library for component creation
import React from 'react';
// Import CircularProgress component from Material-UI for loading indicator
import { CircularProgress } from '@mui/material';

/**
 * A Higher-Order Component (HOC) that enhances a component with loading functionality.
 * @param {Component} WrappedComponent - The component to be enhanced.
 * @returns {Component} - A new component with loading functionality based on the value of the isLoading prop.
 */
const withLoading = (WrappedComponent) => {
    // Return a functional component that accepts props
    return ({ isLoading, ...props }) => {
        // If isLoading prop is true, display the loading indicator
        if (isLoading) {
            return <CircularProgress />;
        }

        // If not loading, render the wrapped component with all passed props
        return <WrappedComponent {...props} />;
    };
};

// Export the HOC for use in other parts of the application
export default withLoading;
