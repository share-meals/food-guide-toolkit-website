export default function Header({ pages }) {
  console.log("this is header");
  console.log();
  return (
    <>
      <h1>This is header</h1>
    </>
  );

  
}
export async function getStaticProps() {
    const { data } = await client.query({
      query: gql`
        query Pages {
          pages {
            data {
              id
              attributes {
                title
              }
            }
          }
        }
      `,
    });

    return {
      props: {
        pages: data.pages.data,
      },
    };
  }