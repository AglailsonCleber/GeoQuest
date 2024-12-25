import { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}