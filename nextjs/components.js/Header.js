import React from "react";

const Header = ({ pages }) => {
  console.log("this is the header");
  console.log(pages);
  return (
    <>
      <h1>Header</h1>
    </>
  );
};

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

export default Header;
