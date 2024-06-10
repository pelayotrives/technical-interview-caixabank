import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
    palette: {
        primary: {
            main: '#5ebf0d',
        },
        secondary: {
            main: '#000000',
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        },
        text: {
            primary: '#000000',
            secondary: '#5ebf0d',
        },
    },
});

export default theme;
