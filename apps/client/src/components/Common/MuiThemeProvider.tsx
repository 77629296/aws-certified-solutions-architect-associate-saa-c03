import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeColor } from '@/constants/theme';

type Props = { children: React.ReactNode };

const MuiThemeProvider = ({ children }: Props) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: themeColor,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
