import {
  Add,
  Group,
  Groups,
  Hail,
  HouseRounded,
  PersonAdd,
} from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { Container } from "../components/Container";
import { useTranslation } from "react-i18next";
import { DashCard } from "../components/Cards";
import { BlueActive } from "../utils/colors";

const PageContent = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={0.5}>
        <Grid xs={12} md={6} lg={3} sm={12}>
          <DashCard
            icon={
              <Groups
                sx={{
                  width: "80px",
                  fontSize: "50px",
                  pr: 3,
                  color: BlueActive,
                }}
              />
            }
            title={t("total_residents")}
            value={"4,451,525"}
            footerText={`400 ${t("today")}`}
            startIcon={<Add />}
            fontSize={"h6"}
          />
        </Grid>
        <Grid xs={12} md={6} lg={3} sm={12}>
          <DashCard
            icon={
              <HouseRounded
                sx={{
                  width: "80px",
                  fontSize: "50px",
                  pr: 3,
                  color: BlueActive,
                }}
              />
            }
            title={t("total_house_owners")}
            value={"4,451,525"}
            footerText={`400 ${t("today")}`}
            startIcon={<Add />}
            fontSize={"h6"}
          />
        </Grid>
        <Grid xs={12} md={6} lg={3} sm={12}>
          <DashCard
            icon={
              <Hail
                sx={{
                  width: "80px",
                  fontSize: "50px",
                  pr: 3,
                  color: BlueActive,
                }}
              />
            }
            title={t("new_comers_reg")}
            value={"4,448"}
            footerText={`400 ${t("today")}`}
            startIcon={<Add />}
            fontSize={"h6"}
          />
        </Grid>
        <Grid xs={12} md={6} lg={3} sm={12}>
          <DashCard
            icon={
              <PersonAdd
                sx={{
                  width: "80px",
                  fontSize: "50px",
                  pr: 3,
                  color: BlueActive,
                }}
              />
            }
            title={t("total_today_reg")}
            value={"4,451,525"}
            startIcon={<Add />}
            fontSize={"h6"}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <Container
      content={<PageContent pageName={t("dashboard")} />}
      icon={<Group />}
      pageName={t("dashboard")}
    />
  );
};
