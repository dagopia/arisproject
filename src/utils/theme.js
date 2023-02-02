import { createTheme } from "@mui/material";
import { primaryMain, secondaryMain } from "./colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f19179",
    },
  },
});

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
    },
  },
  status: {
    danger: "orange",
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: 0,
          paddingLeft: 6,
          paddingRight: 0,
          marginLeft: 0,
          marginRight: 0,
        },
        icon: {
          marginRight: 4,
        },
        message: {
          marginLeft: 2,
          marginRight: 4,
          paddingRight: 8,
        },
        action: {
          paddingLeft: 0,
          marginRight: 2,
          marginLeft: 0,
        },
      },
    },
  },
});
