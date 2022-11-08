import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
const options: ThemeOptions = {
  palette: {
    primary: {
      light: "#ffff00",
      main: "#ffc500",
      dark: "#ffae00",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
};

const theme = createTheme(options);
const Theme = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
