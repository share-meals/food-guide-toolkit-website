import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

const DisablePreviewButton = () => {
    return <>
	<Button
	    color='inherit'
	    href='/api/exit-preview'>
	    Exit
	</Button>
    </>
}

export default function PreviewAlert(){
    return <>
	<Alert
	    action={<DisablePreviewButton />}
	    severity='warning'>
	    You are currently in Preview Mode
	</Alert>
    </>
}
