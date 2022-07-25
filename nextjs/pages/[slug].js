import {
    getPageBySlug,
    getAllPageSlugs
} from '../lib/pages';
import {useRouter} from 'next/router';

export default function Page({
    body,
    preview,
    title
}){    
    return(
	<div>
	    {preview && <h1>
		this is a preview
	    </h1>}
	    <h1>{title}</h1>
	    <div>{body}</div>
	</div>
    )
}

export async function getStaticPaths() {
    const slugs = await getAllPageSlugs();
    return {
	paths: slugs.map((slug) => {return {params: {slug}}}),
	fallback: false
    }
}

export async function getStaticProps({params: {slug}, preview}){
    const data = await getPageBySlug({slug, preview});
    if(!data){
	// todo: 404 page? redirect with alert?
    }
    // implied else
    return {
	props: {
	    preview,
	    ...data
	}
    }
}
