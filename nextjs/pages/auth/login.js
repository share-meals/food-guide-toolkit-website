import Button from '@mui/material/Button';
import {
    getProviders,
    signIn
} from 'next-auth/react';
import GoogleIcon from '@mui/icons-material/Google';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {useRouter} from 'next/router';

const icon_lookup = {
    google: <GoogleIcon />,
    linkedin: <LinkedInIcon />
}

// todo: test redirect after login from pages that are not splash

export default function Login({providers}){
    const {query} = useRouter();
    return <>
	<Typography
	    variant='h1'
	    component='div'
	    sx={{textAlign: 'center'}}
	    gutterBottom>
	    Log In to SMTK
	</Typography>
	<Stack sx={{width: '14rem', ml: 'auto', mr: 'auto'}}
	    spacing={2}>
	{Object.values(providers).map((provider) =>
	    <React.Fragment key={provider.name}>
		<Button
		    onClick={() => signIn(provider.id, {callbackUrl: query.callbackUrl})}
		    startIcon={icon_lookup[provider.id]}
		    variant='contained'
		    color={provider.id}
		    sx={{justifyContent: 'start'}}
		>
		    Log in with {provider.name}
		</Button>
	    </React.Fragment>
	)}
	</Stack>
	<Typography
	    variant='body1'
	    component='div'
	    sx={{textAlign: 'center', marginTop: '1rem'}}>
	    Don't have an account yet? <Link href='/sign-up'>Sign Up</Link>.
	</Typography>
    </>;
}

export async function getServerSideProps(){
    return {
	props: {
	    providers: await getProviders()
	}
    }
}
