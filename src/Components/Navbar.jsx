import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Button variant="text" sx={{ color: "#fff" }}>
              Home
            </Button>
          </Link>
          <Link to="/admin">
            <Button variant="text" sx={{ color: "#fff" }}>
              Admin
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
