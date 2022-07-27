import header_pages from '../lib/header_pages.json';
import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';

import * as React from 'react';

// todo: replace hardcoded headersData with header_pages
// note: header_pages is in the form of [ { __typename: 'Page', title: 'published', slug: 'published' } ]

// const headersData = [
//   {
//     label: "Home",
//     heref: "/Home",
//   },
//   {
//     label: "Toolkit",
//     heref: "/Toolkit",
//   },
//   {
//     label: "About",
//     heref: "/About",
//   },
//   {
//     label: "Donate",
//     heref: "/Donate",
//   },
// ];
export default function Header() {
  const DisplayDesktop = () => {
  return (
    
    <Toolbar>{ShareMealsLogo} 
    <MenuButtons />
      <Button variant="contained" style={{
        		backgroundColor: '#fffa',
      			}}>Login</Button>
            
    </Toolbar>
  )
  };
  const ShareMealsLogo =(
    <Typography variant="h6" component="h1">SMTK
    </Typography>
    
  );

    const MenuButtons = () => {
	
    return header_pages.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            
          }}
        >
          {label}
        </Button>
      );
    });
  };
    return (
      <header>
        <AppBar position='sticky' elevation={0}>
          <DisplayDesktop/>
        </AppBar>
      </header>
    );
    
}
