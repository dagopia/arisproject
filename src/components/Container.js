import { Box, Divider, Typography } from "@mui/material";
import { theme } from "../utils/theme";
import ResponsiveDrawer from "../components/RespnsiveLayout";

const Container = (props) => {
  return (
    <Box>
      <ResponsiveDrawer />
      <Box
        sx={{
          [theme.breakpoints.not("xs")]: {
            ml: "295px",
            mr: 1,
            mt: 4,
          },
          m: 2,
          ml: 2,
        }}
      >
        <Box sx={{ display: { sm: "none" } }}>
          <Box sx={{ p: 1, display: "flex", justifyContent: "right" }}>
            {props.icon}

            <Typography sx={{ pl: 1 }}> {props.pageName}</Typography>
          </Box>
          <Divider />
        </Box>
        {props.content}
      </Box>
    </Box>
  );
};
export { Container };
