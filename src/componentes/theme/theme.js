import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
// azul #152549 azul letra #13387f gris #f6f6f6  rojo #d8232f   dorado #bb691e  
  palette: {
    primary: {
      light: '#4dabf5',
      main: '#2196f3',
      dark: '#1769aa',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e57373',
      main: '#c30b31',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    warning:{
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },

    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    tonalOffset: 0.2,
  },
  
});
    
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
   
 
 export default theme;