import React, { createContext, useState, useContext } from 'react';

// Create the authentication context
const AuthContext = createContext();

/**
 * Authentication provider component that wraps the application and provides authentication state and actions.
 * @param {Object} props - The props passed to the provider.
 * @param {ReactNode} props.children - The child components that require access to the authentication context.
 */
export const AuthProvider = ({ children }) => {
    // State to manage the authentication status
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // State to store user information
    const [user, setUser] = useState(null);

    /**
     * Function to handle user login.
     * @param {string} username - The username of the user.
     * @param {string} password - The password of the user.
     */
    const login = async (username, password) => {
        // Here you should implement the authentication logic (e.g., API call)
        // If authentication is successful:
        setIsAuthenticated(true);
        setUser({ username }); // You can store more user information if needed
    };

    /**
     * Function to handle user logout.
     */
    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        // Provide the authentication state and actions to child components
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

/**
 * Custom hook to use the authentication context.
 * @returns {Object} - The authentication context value, including state and actions.
 */
export const useAuth = () => useContext(AuthContext);
