import { Login as LoginICON } from "@mui/icons-material";
import { Box, Button, CssBaseline, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { LoginComponent } from "../components/LoginComponent";
import { gradient1 } from "../utils/colors";
import logo from "../assets/logit.png";

const Login = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          height: "100%",
          width: "71%",
          background: gradient1,
          display: { xs: "none", sm: "flex" },
          pt: "20%",
          pl: "10%",
          pr: "11%",
        }}
      >
        <LoginComponent />
      </Box>
      <Box sx={{ background: gradient1, display: { sm: "none" }, p: "2%" }}>
        <LoginComponent />
      </Box>
      <Box
        sx={{
          height: "100%",
          width: { sm: "29%", xs: "100%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pl: "3%",
          pr: "3%",
        }}
      >
        <img src={logo} alt="Logo" width={"40%"} />

        <Typography
          variant="h5"
          fontWeight={"bold"}
          sx={{ borderRadius: "7px", mb: 2, mt: 3 }}
        >
          {t("login")}
        </Typography>
        <Box sx={{ display: "flex" }}>
          {/* <Typography color="gray">{t("not_have_accoount")} </Typography> */}
          {/* <Typography color="green" pl={1} component={NavLink}>
            Register
          </Typography> */}
        </Box>

        <TextField
          sx={{ borderRadius: "7px", mb: 2, mt: 3 }}
          variant="outlined"
          label={t("username")}
          fullWidth
        />
        <TextField
          sx={{ borderRadius: "7px" }}
          variant="outlined"
          label={t("password")}
          fullWidth
        />

        <Button
          component={NavLink}
          variant="contained"
          to="/dashboard"
          size="large"
          startIcon={<LoginICON />}
          sx={{ mt: 2, borderRadius: "10px" }}
        >
          {t("login")}
        </Button>
      </Box>
    </Box>
  );
};

export { Login };
