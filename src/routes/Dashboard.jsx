import { Group } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Container } from "../components/Container";
import { useTranslation } from "react-i18next";

const PageContent = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <h1>{t("dashboard")}</h1>
    </Box>
  );
};

export const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <Container
      content={<PageContent />}
      icon={<Group />}
      pageName={t("dashboard")}
    />
  );
};
