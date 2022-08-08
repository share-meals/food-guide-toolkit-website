

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { ThemeProvider } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'right',
	color: theme.palette.text.secondary,
  }));

export default function Home() {
    return (
	<Box sx={{ display: 'flex-end', 
			   backgroundColor: '#126435' }}>
		<Grid container spacing={11}>
		<Grid item xs={12}>

		</Grid>
		<Grid item xs={12}>

		</Grid>
		<Grid item xs={6}>
			some text in here.
		</Grid>
			<Grid item xs={6}>
				
          		<Item style={{
				display: 'flex-end',
				
        		borderBottomLeftRadius: '1rem',
				borderTopLeftRadius: '1rem',
				paddingLeft: '1rem'
				
      			}}>
					<a href="https://sharemeals.org/"><img src='https://img.freepik.com/free-vector/tiny-people-standing-near-box-donation-food-delivery-volunteers-giving-healthy-grocery-goods-charity-flat-vector-illustration-social-support-humanitarian-help-community-sharing-concept_74855-21023.jpg' alt='jpg' class='responsive'
					/></a>
				</Item>
        	</Grid>
				<div className={styles.container} 
				style={{
        		backgroundColor: '#126435',
      			}}>
		    
	    
	    			<main className={styles.main}>
					{ <h1 className={styles.title}>
			
		    			{/* <a href="https://sharemeals.org/"><img src='https://img.freepik.com/free-vector/tiny-people-standing-near-box-donation-food-delivery-volunteers-giving-healthy-grocery-goods-charity-flat-vector-illustration-social-support-humanitarian-help-community-sharing-concept_74855-21023.jpg' alt='jpg' /></a> */}
					</h1> }
		
		            
						{}
	    			</main>

	    				<footer className={styles.footer}>
						{}
	    				</footer>
		
				</div>
		</Grid>
	</Box>
    )
}

