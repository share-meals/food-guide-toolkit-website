const {request, gql} = require('graphql-request');

const query = gql`
    {
	pages{
	    data{
		attributes{
		    title
		    body
		}
	    }
	}
    }
`

request('http://localhost:1337/graphql', query).then((data) =>
    console.log(JSON.stringify(data))
)
