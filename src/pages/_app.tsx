import { createTheme, Theme, ThemeProvider } from "@mui/material";
import "../../styles.css";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#ea8a81',
      light: '#ea8a8180'
    }
  }
});

function MyApp({ Component, pageProps }) {
  return (<ThemeProvider theme={theme}>
    <Component {...pageProps} /></ ThemeProvider>
  );
}

export default MyApp;
