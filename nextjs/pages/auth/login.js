import Button from '@mui/material/Button';
import {
    getProviders,
    signIn
} from 'next-auth/react';
import GoogleIcon from '@mui/icons-material/Google';
import React from 'react';
import {useRouter} from 'next/router';

const icon_lookup = {
    google: <GoogleIcon />
}

// todo: test redirect after login from pages that are not splash

export default function Login({providers}){
    const {query} = useRouter();
    return <>
	{Object.values(providers).map((provider) =>
	    <React.Fragment key={provider.name}>
		<Button
		    onClick={() => signIn(provider.id, {callbackUrl: query.callbackUrl})}
		    startIcon={icon_lookup[provider.id]}
		    variant='contained'>
		    Sign in with {provider.name}
		</Button>
	    </React.Fragment>
	)}
    </>;
}

export async function getServerSideProps(){
    return {
	props: {
	    providers: await getProviders()
	}
    }
}
