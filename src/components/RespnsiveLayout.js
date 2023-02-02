import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  AdminPanelSettings,
  Assessment,
  BugReport,
  Dashboard,
  DirectionsWalk,
  Event,
  HistoryToggleOff,
  Houseboat,
  Logout,
  PaymentRounded,
  Person,
  RecentActors,
  RestorePage,
  Settings,
} from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Avatar, Menu, MenuItem, SwipeableDrawer } from "@mui/material";
import logo from "../assets/logit.png";
import { useTranslation } from "react-i18next";
import { activeLink, gradient2, hoverColor } from "../utils/colors";

const drawerWidth = 280;
const DFooter = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        margin: "auto",
        position: "relative",
        bottom: 0,
        background: gradient2,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        pt: 1,
      }}
    >
      <Typography color={"white"} variant="caption">
        {t("poweredBy")}
      </Typography>
      <Typography color={"white"} variant="caption">
        {t("cp-right")} &copy; 2023
      </Typography>
    </Box>
  );
};

const Link = ({ to, icon, label }) => (
  <ListItem
    component={NavLink}
    to={to}
    sx={{
      "&:hover": {
        background: hoverColor,
      },
      pr: 1,
    }}
    style={({ isActive }) =>
      isActive
        ? {
            color: "white",
            background: activeLink,
            fontWeight: "bold",
            borderRadius: "0 10px 10px 0",
          }
        : {
            color: "white",
            fontWeight: "bold",
            borderRadius: "0 10px 10px 0",
          }
    }
  >
    <ListItemIcon sx={{ color: "inherit" }}>{icon}</ListItemIcon>
    <ListItemText sx={{ color: "inherit" }} primary={label} />
  </ListItem>
);

const ResponsiveDrawer = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [dmode, setDmode] = React.useState(
    localStorage.getItem("mode") || "light"
  );
  React.useEffect(() => {
    localStorage.setItem("mode", dmode);
  }, [dmode, setDmode]);
  const { t } = useTranslation();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box
      sx={{
        background: gradient2,
        height: "100%",
        backdropFilter: "blur(50px)",
        overflowY: "auto",
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          width: "0.6em",
        },
        "&::-webkit-scrollbar-track": {
          background: "tranparent",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "transparent",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "transparent",
        },
      }}
    >
      <Box>
        <Box
          sx={{
            color: "white",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            alignContent: "center",
            p: 3,
          }}
        >
          <Box sx={{ mr: 1, p: 1 }}>
            <Avatar />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <Typography color={"inherit"}>Bereket Zergaw</Typography>
            <Typography color="gray">{t("viewProfile")}</Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <List sx={{ pr: 1 }}>
          <Divider sx={{ width: "100%" }} />
          <Link
            to="/dashboard"
            icon={<Dashboard color="inherit" />}
            label={t("dashboard")}
          />
          <Link
            to="/"
            icon={<Person color="inherit" />}
            label={t("registration")}
          />
          <Link
            to="/"
            icon={<Houseboat color="inherit" />}
            label={t("house_owners")}
          />
          <Link
            to="/"
            icon={<PaymentRounded color="inherit" />}
            label={t("payments")}
          />
          <Link
            to="/"
            icon={<AdminPanelSettings color="inherit" />}
            label={t("Approval")}
          />
          <Link
            to="/"
            icon={<RecentActors color="inherit" />}
            label={t("Residents")}
          />
          <Link
            to="/"
            icon={<BugReport color="inherit" />}
            label={t("issues")}
          />
          <Link
            to="/"
            icon={<DirectionsWalk color="inherit" />}
            label={t("leave_req")}
          />
          <Link
            to="/"
            icon={<RestorePage color="inherit" />}
            label={t("id_amdnt")}
          />
          <Link
            to="/"
            icon={<Event color="inherit" />}
            label={t("vital_events")}
          />
          <Link
            to="/"
            icon={<Assessment color="inherit" />}
            label={t("report")}
          />
          {/* Add other links for routing */}
        </List>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
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
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
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
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> Mr. Bereket Zergaw
        </MenuItem>

        <Divider />
        <MenuItem>
          <ListItemIcon>
            <HistoryToggleOff fontSize="small" />
          </ListItemIcon>
          {t("activity")}
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          {t("setting")}
        </MenuItem>
        <MenuItem component={NavLink} to={"/"}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          {t("logout")}
        </MenuItem>
      </Menu>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(105% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "transparent",
          backdropFilter: "blur(7px)",
        }}
      >
        <Toolbar
          sx={{
            ml: { sm: 7, xl: 15 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "90%",
              alignItems: "center",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon color="primary" />
            </IconButton>
            <img src={logo} width="60px" alt="logo" />
            <Typography
              variant="subtitle1"
              color="primary"
              noWrap
              component="div"
              sx={{ ml: 2 }}
            >
              {t("app_title")}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              width: "10%",
              justifyContent: "right",
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        <SwipeableDrawer
          container={container}
          allowSwipeInChildren={true}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              borderRadius: "0 25px 25px 0 ",
            },
            // borderRadius: "0 40px 40px 0 ",
          }}
        >
          {drawer}
          <Divider />
          <DFooter />
        </SwipeableDrawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRadius: "0 25px 25px 0 ",
            },
          }}
          open
        >
          {drawer}
          <Divider />
          <DFooter />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default ResponsiveDrawer;
