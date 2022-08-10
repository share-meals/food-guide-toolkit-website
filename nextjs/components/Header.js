import header_pages from "../lib/header_pages.json";
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import {useTheme} from '@mui/styles';
import * as React from "react";

// todo: replace hardcoded headersData with header_pages
// note: header_pages is in the form of [ { __typename: 'Page', title: 'published', slug: 'published' } ]


export default function Header() {
  const theme = useTheme();
  const primary_color = theme.palette.primary.main;
  const DisplayDesktop = () => {
    return (
      <Toolbar>
        <Stack direction='row' spacing={1.5}>
        {ShareMealsLogo}
        <MenuButtons />
        
        </Stack>
        <Stack direction='row' spacing={1} sx={{marginLeft: 'auto'}}>
        <Button variant="outlined" color="inherit">
          Log In
        </Button>
        <Button variant="contained" color="inherit" sx={{color: primary_color}} disableElevation >
          Sign Up
        </Button>
        </Stack>
      </Toolbar>
    );
  };
  const ShareMealsLogo = (
    <Typography variant="h6" component="h1">
      SMTK
    </Typography>
  );

  const MenuButtons = () => {
    return header_pages.map(({ title, href, slug }) => {
      return (
        <Button
          {...{
            key: slug,
            color: "inherit",
            to: href,
          }}
        >
          {title}
        </Button>
      );
    });
  };
  return (
    <header>
      <AppBar position="sticky" elevation={0}>
        <DisplayDesktop />
      </AppBar>
    </header>
  );
}
