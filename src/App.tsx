import { useState } from "react";
import Map from "./Components/Map/Map";
import { Grid, CssBaseline } from "@mui/material";
import List from "./Components/List/List";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}></Grid>
    </>
  );
}

export default App;
