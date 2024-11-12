import { createTheme } from '@mui/material/styles';

const palette = {
  defaultOrange: "#FF8200",
  defaultGreen: "#0D3501"
}

const theme = createTheme({
  palette: {
    primary: {
      main: palette.defaultGreen,
    },
    secondary: {
      main: palette.defaultOrange,
    },
    background: {
      default: '#fff',
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          margin: '2px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '16px',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          transition: 'color 0.1s',
          ":hover" : {
            fontWeight: 'bold',
          }
        }
      }
    },
  },
});

export default theme;
export { palette };