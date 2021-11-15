import { lightBlue, orange } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#9adcfb',
      main: lightBlue[200],
      dark: '#5a94af',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffd699',
      main: orange[200],
      dark: '#b28e59',
      contrastText: '#000',
    },
  },
});
export default theme;
