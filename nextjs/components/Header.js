
export default function Header({pages}){
    console.log('this is the header');
    console.log(pages);
    return(
	<>
	    <h1>
		this is the header
	    </h1>
	</>
    );
}

export async function getStaticProps() {
    const {data} = await client.query({
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
	`,
    });

    return {
	props: {
            pages: data.pages.data
	},
    };
}
