import { ArrowRightAlt, Settings, Update } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { BlueActive, cardGradient } from "../utils/colors";
import crtn from "../assets/crtn.png";

const DashCard = (props) => {
  return (
    <Card
      sx={{ m: 1, borderRadius: "20px", border: `1px solid ${BlueActive}` }}
    >
      <CardContent sx={{ display: "flex", alignItems: "center" }}>
        <Box>{props.icon}</Box>
        <Box>
          <Typography color="gray" variant="h6">
            {props.title}
          </Typography>
          <Typography variant={props.fontSize} fontWeight={"bold"}>
            {props.value}
          </Typography>
        </Box>
      </CardContent>
      <Divider sx={{ borderColor: BlueActive }} />
      {props.footerText ? (
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "right",
          }}
        >
          <Button
            size="small"
            startIcon={props.startIcon}
            endIcon={props.endIcon}
            sx={{ textTransform: "none", color: BlueActive }}
          >
            {props.footerText}
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
};

const CartonCard = () => {
  return (
    <Card
      sx={{
        m: 1,
        display: "flex",
        borderRadius: "15px",
        background: cardGradient,
        alignItems: "center",
        color: "white",
        px: 3,
        py: 2,
      }}
    >
      <IconButton sx={{ display: { md: "none" } }}>
        <Update />
      </IconButton>
      <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
        <img src={crtn} width="120px" alt="logo" />
      </Box>

      <Box>
        <Typography variant="caption" color="gray">
          NEW V6 UPDATE
        </Typography>
        <Typography variant="h6" my={1} fontWeight={"bold"}>
          New update available!
        </Typography>
        <Typography variant="subtitle1">
          Your favorite template has a new trendy look, more customization
          options, screens & more.
        </Typography>
        <Button
          startIcon={<Settings />}
          variant="contained"
          sx={{
            textTransform: "none",
            mt: 3,
            borderRadius: "7px",
            display: { xs: "none", md: "flex" },
          }}
        >
          Open App Settings
        </Button>
      </Box>
    </Card>
  );
};

export { DashCard, CartonCard };
