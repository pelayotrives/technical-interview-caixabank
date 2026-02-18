import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, AppBar, Container, Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { ProductProvider } from './context/ProductContext';
import { AuthProvider } from './context/AuthContext';
import withAuth from './hoc/withAuth';

// Lazy loading components using React.lazy
const Home = lazy(() => import('./components/Home'));
const Login = lazy(() => import('./components/Login'));
const Navbar = lazy(() => import('./components/Navbar'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));

const WrappedProductDetail = withAuth(ProductDetail);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <ProductProvider>
          <Router>
            {/* AppBar for the navigation */}
            <AppBar position="static" color="secondary" elevation={0}>
              <Navbar />
            </AppBar>
            {/* Main container for the content */}
            <Container component="main" maxWidth="lg" style={{ marginTop: '24px', marginBottom: '40px' }}>
              {/* Suspense for lazy loading with a loading fallback */}
              <Suspense fallback={<div>Loading...</div>}>
                {/* Routes for different pages */}
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/products/:productId" element={<WrappedProductDetail />} />
                </Routes>
              </Suspense>
            </Container>
          </Router>
        </ProductProvider>
      </AuthProvider>
      {/* Footer */}
      <Box component="footer" bgcolor="primary.main" color="white" textAlign="center" p={2} style={{ position: 'fixed', bottom: 0, width: '100%' }}>
        <Typography variant="body2">&copy; 2024 NUWE</Typography>
      </Box>
    </ThemeProvider >
  );
}

export default App;
