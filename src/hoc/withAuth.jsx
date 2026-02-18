import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { Snackbar, Alert } from '@mui/material';

/**
 * Higher-Order Component (HOC) to handle authentication and show a Snackbar when the user is not authenticated.
 * @param {Component} Component - The component to be wrapped and protected.
 * @returns {Component} - A new component that handles authentication and displays a Snackbar message.
 */
const withAuth = (Component) => {
    return (props) => {
        // Get the authentication state from the AuthContext
        const { isAuthenticated } = useAuth();

        // State to control the visibility of the Snackbar
        const [openSnackbar, setOpenSnackbar] = useState(false);
        // State to control the redirection
        const [redirect, setRedirect] = useState(false);

        // Effect to show the Snackbar if the user is not authenticated
        useEffect(() => {
            if (!isAuthenticated) {
                setOpenSnackbar(true);

                // Set a timeout to redirect after showing the Snackbar
                const timer = setTimeout(() => {
                    setRedirect(true);
                }, 3000); // 3 seconds before redirecting

                // Cleanup the timer on component unmount
                return () => clearTimeout(timer);
            }
        }, [isAuthenticated]);

        // Function to close the Snackbar
        const handleCloseSnackbar = () => {
            setOpenSnackbar(false);
        };

        // If redirect is true, navigate to the login page
        if (redirect) {
            return <Navigate to="/login" />;
        }

        // If authenticated, render the original component
        return (
            <>
                <Component {...props} />
                {/* Snackbar to show when redirecting to login */}
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    sx={{
                        '& .MuiSnackbarContent-root': {
                            backgroundColor: '#f44336', // Red background for high visibility
                            color: '#fff', // White text for contrast
                            fontSize: '1.2rem', // Larger font size
                        }
                    }}
                >
                    <Alert
                        onClose={handleCloseSnackbar}
                        severity="warning"
                        sx={{
                            width: '100%',
                            fontSize: '1.2rem',
                            backgroundColor: '#f44336', // Red background for high visibility
                            color: '#fff' // White text for contrast
                        }}
                    >
                        You must be logged in to view this content.
                    </Alert>
                </Snackbar>
            </>
        );
    };
};

export default withAuth;
