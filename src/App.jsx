import "./App.css";
import ProfileList from "./Components/ProfileList";
import "leaflet/dist/leaflet.css";

import { Container, Typography, CssBaseline } from "@mui/material";

function App() {
  return (
    <Container maxWidth="lg">
      <CssBaseline />

      <ProfileList />
    </Container>
  );
}

export default App;
