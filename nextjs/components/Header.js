import header_pages from '../lib/header_pages.json';
import { AppBar, Toolbar, Typography, button } from '@mui/material';
import { useRouter } from 'next/router';
import * as React from 'react';

const headersData = [
  {
    label: "Home",
    heref: "/Home",
  },
  {
    label: "Toolkit",
    heref: "/Toolkit",
  },
  {
    label: "About",
    heref: "/About",
  },
  {
    label: "Donate",
    heref: "/Donate",
  },
];
export default function Header() {
  const DisplayDesktop = () => {
  return (
    <Toolbar>{ShareMealsLogo} {getMenuButtons}</Toolbar>
  )
  };
  const ShareMealsLogo =(
    <Typography variant="h6" component="h1">SMTK
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: useRouter,
          }}
        >
          {label}
        </Button>
      );
    });
  };
    return (
      <header>
        <AppBar><DisplayDesktop/></AppBar>
      </header>
    );
    
}
