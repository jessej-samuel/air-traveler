import "./Navbar.css";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Icon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import settings from "../settings.json";
import AirplanemodeActiveOutlinedIcon from "@mui/icons-material/AirplanemodeActiveOutlined";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <AirplanemodeActiveOutlinedIcon fontSize="large" className="nav-logo" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AirTraveler
        </Typography>

        {settings.routes.map((route) => (
          <Button color="inherit" component={Link} to={route.path}>
            {route.name}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
