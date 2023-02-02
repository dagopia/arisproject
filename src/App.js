import { Box, Fab, IconButton, Menu, ThemeProvider } from "@mui/material";
import { darkTheme, theme } from "./utils/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./routes/Login";
import { DarkMode, Language, LightMode, Settings } from "@mui/icons-material";
import { useEffect, useState } from "react";
import i18next from "i18next";
import { Dashboard } from "./routes/Dashboard";
import { Approval } from "./routes/Approval";
import { HouseOwners } from "./routes/HouseOwners";
import { IDAmendment } from "./routes/IdAmend";
import { Issues } from "./routes/Issues";
import { LeaveReq } from "./routes/LeaveReq";
import { Payment } from "./routes/Payment";
import { Registration } from "./routes/Registration";
import { Report } from "./routes/Report";
import { Residents } from "./routes/Residents";
import { VitalEvent } from "./routes/VitalEvent";

function App() {
  const [dmode, setDmode] = useState(localStorage.getItem("mode") || "light");
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "en");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const queryClient = new QueryClient();
  const darkMode = () => {
    setDmode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const changeLanguage = () => {
    setLang((prevLang) => (prevLang === "en" ? "am" : "en"));
  };

  useEffect(() => {
    localStorage.setItem("mode", dmode);
  }, [dmode, setDmode]);

  useEffect(() => {
    localStorage.setItem("i18nextLng", lang);
    i18next.changeLanguage(lang);
  }, [lang, setLang]);

  return (
    <ThemeProvider theme={dmode === "dark" ? darkTheme : theme}>
      <QueryClientProvider client={queryClient}>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "transparent",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Box>
            <Box>
              <Fab
                color="primary"
                aria-label="add"
                size="medium"
                onClick={changeLanguage}
                sx={{ mr: 1 }}
              >
                {lang === "en" ? (
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    አማ
                    <Language />
                  </Box>
                ) : (
                  <Box>
                    En
                    <Language />
                  </Box>
                )}
              </Fab>
              <Fab size="medium" aria-label="add" onClick={darkMode}>
                {dmode === "light" ? <DarkMode /> : <LightMode />}
              </Fab>
            </Box>
          </Box>
        </Menu>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/approvals" element={<Approval />} />
            <Route path="/house-owners" element={<HouseOwners />} />
            <Route path="/id-amendment" element={<IDAmendment />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/leave-request" element={<LeaveReq />} />
            <Route path="/payments" element={<Payment />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/reports" element={<Report />} />
            <Route path="/residents" element={<Residents />} />
            <Route path="/vital-events" element={<VitalEvent />} />
          </Routes>
        </Router>

        <IconButton
          sx={{
            margin: 0,
            top: "auto",
            right: 10,
            bottom: 20,
            left: "auto",
            position: "fixed",
            "&:hover": {
              transition: "0.9s",
              transform: "rotate(90deg)",
            },
          }}
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Settings />
        </IconButton>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
