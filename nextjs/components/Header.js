import header_pages from '../lib/header_pages.json';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';
import * as React from 'react';

// todo: replace hardcoded headersData with header_pages
// note: header_pages is in the form of [ { __typename: 'Page', title: 'published', slug: 'published' } ]

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
    <Toolbar>{ShareMealsLogo} <MenuButtons /></Toolbar>
  )
  };
  const ShareMealsLogo =(
    <Typography variant="h6" component="h1">SMTK
    </Typography>
  );

    const MenuButtons = () => {
	// todo: maybe we don't even need component / useRouter? I think the href by itself will work
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            //component: useRouter,
          }}
        >
          {label}
        </Button>
      );
    });
  };
    return (
      <header>
          <AppBar position='sticky'>
	      <DisplayDesktop/>
	  </AppBar>
      </header>
    );
    
}
