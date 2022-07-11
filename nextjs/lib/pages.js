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
			    title
			    }
			}
		}
		
	    }
	`
    });

    console.log(response);
    
    /*
    return {
	props: {
            pages: data.pages.data
	},
    };
    */
    const pages = [
	"home",
	"about-us",
	"contact-us"
    ];
    return pages.map((page) => {
	return {
	    params: {
		slug: page
	    }
	};
    });
}
