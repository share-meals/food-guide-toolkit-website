import {gql} from "@apollo/client";
import apollo from './apollo-client';

export async function getPageBySlug({
    slug,
    preview = false
}){
    const {data: {pages: {data}}} = await apollo.query({
	query: gql`
            query Pages {
		pages (
		    publicationState: ${preview ? 'PREVIEW' : 'LIVE'}
		    filters: {slug: {eq: "${slug}"}}
		)
		{
		    data{
			id
			attributes{
			    body
			    slug
			    title
			}
		    }
		}
	    }
	`
    });
    return data[0]?.attributes;
}

export async function getAllPageSlugs(){
    const response = await apollo.query({
	query: gql`
            query Pages {
		pages
		{
		    data{
			id
			attributes{
			    slug
			    }
			}
		}
		
	    }
	`
    });
    return response.data.pages.data.map(page => page.attributes.slug);
}
