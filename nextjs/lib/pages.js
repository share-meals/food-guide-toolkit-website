// https://strapi.io/blog/handling-previews-in-a-headless-architecture

import {gql} from "@apollo/client";
import apollo from './apollo-client';

export async function getPagePreview(slug){
    const requestUrl = `${process.env.STRAPI_URL}/pages?slug=${slug}`;
    console.log(requestUrl);
    const response = await fetch(requestUrl);
    return (await response.json())[0];
}

export async function getPageBySlug(slug){
    const {data} = await apollo.query({
	query: gql`
            query Pages {
		pages (filters: {slug: {eq: "${slug}"}})
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
    return data.pages.data[0].attributes;
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
