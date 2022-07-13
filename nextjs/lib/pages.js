import {gql} from "@apollo/client";
import apollo from './apollo-client';

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
