import {useRouter} from 'next/router';
import {getAllPageSlugs} from '../lib/pages';
import apollo from '../lib/apollo-client';
import {gql} from "@apollo/client";

export default function Page({
    body,
    title
}){
    
//    const router = useRouter();
    return(
	<div>
	    <h1>{title}</h1>
	    <div>{body}</div>
	</div>
    )
}

export async function getStaticPaths() {
    //const slugs = getAllPageSlugs();
    return {
	paths: [
	    {
		params: {
		    slug: 'contact-us'
		}
	    }
	],
	fallback: false
    }
}

export async function getStaticProps({params}){
    // todo: replace with findOne logic
    const {data} = await apollo.query({
	query: gql`
            query Pages {
		pages (filters: {slug: {eq: "${params.slug}"}})
		{
		    data{
			id
			attributes{
			    title
			    body
			}
		    }
		}
	    }
	`,
    });
//    return {
//	props: data.pages.data[0].attributes
//    }
    return {
	props: {}
    }
}
