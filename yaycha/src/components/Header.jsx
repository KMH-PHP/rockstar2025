import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
}
from "@mui/material";

import {
    Menu as MenuIcon,
    Add as AddIcon,
    LightMode as LightModeIcon,
    DarkMode as DarkModeIcon,
    ArrowBack as BackIcon,
} from "@mui/icons-material";
import { useApp } from "../ThemedApp";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
    const {showForm, setShowForm, mode, setMode, setShowDrawer} = useApp();
    const navigate = useNavigate();
    const {pathname} = useLocation();
    //console.log(showForm, "showform")
  return (
    <AppBar position="static">
      <Toolbar>
        {pathname === "/" ? (
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setShowDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => navigate("/")}
          >
            <BackIcon />
          </IconButton>
        )}

        <Typography sx={{ flexGrow: 1, ml: 2 }}>Yaycha</Typography>

        <Box>
          <IconButton color="inherit" onClick={() => setShowForm(!showForm)}>
            <AddIcon />
          </IconButton>
          {mode === "dark" ? (
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setMode("light")}
            >
              <LightModeIcon />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setMode("dark")}
            >
              <DarkModeIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header