import { Typography, Stack } from "@mui/material";
import * as React from "react";

export default function Footer() {
  return (
    <Stack direction="row" justifyContent="space-around" padding="1rem">
      <Typography variant="body1">SMTK LOGO</Typography>
      <Typography variant="body1">share_meals_toolkit@email.com</Typography>
      <Typography variant="body1">Copyright</Typography>
    </Stack>
  );
}