import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: `${process.env.STRAPI_URL}/graphql`,
    cache: new InMemoryCache(),
});

export default client;
