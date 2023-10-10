import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Container maxWidth={false}>
      <Navbar />
      <Dashboard />
    </Container>
  );
}
