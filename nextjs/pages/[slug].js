import {
    getPageBySlug,
    getAllPageSlugs
} from '../lib/pages';
import {useRouter} from 'next/router';

export default function Page({
    body,
    title
}){    
    return(
	<div>
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

export async function getStaticProps({params}){
    return {
	props: await getPageBySlug(params.slug)
    }
}
