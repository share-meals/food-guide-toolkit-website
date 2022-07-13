import apollo from '../lib/apollo-client';
import {getAllPageSlugs} from '../lib/pages';
import {gql} from "@apollo/client";
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
    return {
	props: data.pages.data[0].attributes
    }
}
