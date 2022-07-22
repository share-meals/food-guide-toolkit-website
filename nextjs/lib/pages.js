import {gql} from "@apollo/client";
import apollo from './apollo-client';

export async function getPageBySlug({
    slug,
    publication_state = 'live'
}){
    const {data: {pages: {data}}} = await apollo.query({
	query: gql`
            query Pages {
		pages (
		    publicationState: ${publication_state.toUpperCase()}
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
    console.log(data);
    return data[0].attributes;
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
