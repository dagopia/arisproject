import { Assessment } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Container } from "../components/Container";
import { useTranslation } from "react-i18next";

const PageContent = (props) => {
  return (
    <Box>
      <h1>{props.pageName}</h1>
    </Box>
  );
};

export const Report = () => {
  const { t } = useTranslation();

  return (
    <Container
      content={<PageContent pageName={t("report")} />}
      icon={<Assessment />}
      pageName={t("report")}
    />
  );
};
