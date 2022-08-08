import { Typography } from "@mui/material";
import * as React from "react";

export default function Footer() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", padding: "1rem", position: "relative", width: "100%", bottom: "0"}}>
      <Typography variant="body1">SMTK LOGO</Typography>
      <Typography variant="body1">share_meals_toolkit@email.com</Typography>
      <Typography variant="body1">Copyright</Typography>
    </div>
  );
}
