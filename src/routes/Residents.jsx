import { RecentActors } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Container } from "../components/Container";
import { useTranslation } from "react-i18next";

const PageContent = (props) => {
  return (
    <Box>
      <h1>{props.pageName} fc</h1>
    </Box>
  );
};

export const Residents = () => {
  const { t } = useTranslation();

  return (
    <Container
      content={<PageContent pageName={t("Residents")} />}
      icon={<RecentActors />}
      pageName={t("Residents")}
    />
  );
};
