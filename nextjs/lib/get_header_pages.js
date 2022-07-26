const path = require('path');
require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
});
const ApolloClient = require('@apollo/client').ApolloClient;
const fetch = require('cross-fetch/polyfill').fetch;
const fs = require('fs');
const gql = require('@apollo/client').gql;
const InMemoryCache = require('@apollo/client').InMemoryCache;

const client = new ApolloClient({
    cache: new InMemoryCache(),
    fetch,
    uri: process.env.GRAPHQL_URL
});

async function get_header_links(){
    // todo: modify GraphQL query to only take pages we want in our header
    const response = await client.query({
	query: gql`
            query Pages {
		pages
		{
		    data{
			attributes{
			    title
			    slug
			    }
			}
		}
		
	    }
	`
    });
    const header_pages = response ? response.data.pages.data.map(page => page.attributes) : [];
    fs.writeFileSync(
	path.resolve(__dirname, 'header_pages.json'),
	JSON.stringify(header_pages)
    );
}

get_header_links();
