import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
const LoginComponent = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Typography color="white" variant="h5" fontWeight={"bold"} pb={1}>
        {t("welcome_header")}
      </Typography>
      <Typography color="gray" fontWeight={"light"} variant={"subtitle1"}>
        {t("welcome_descr")}
      </Typography>
    </Box>
  );
};

export { LoginComponent };
