import "./Navbar.css";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import settings from "../settings.json";

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
