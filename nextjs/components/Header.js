import header_pages from '../lib/header_pages.json';
import Box from '@mui/material/Box';

export default function Header({current_page}){
    return (
	<>
	    {header_pages.map((page) => <Box sx={{borderBottom: page.slug === current_page ? '4px solid red' : 'none'}}>
		{page.title}
	    </Box>)}
	    <h1>This is header</h1>
	</>
    );
}
