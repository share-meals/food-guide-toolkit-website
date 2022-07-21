// import "../styles/slug.css";
import apollo from "../lib/apollo-client";
import { getAllPageSlugs } from "../lib/pages";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Page({
    body,
    description,
    hero_image: hero_image_raw,
    title,
    updatedAt,
}) {
    const router = useRouter();
    const hero_image = hero_image_raw.data.attributes;
  return (
    <div className="App">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          property="og:url"
          content={`http://http://localhost:3000/${router.asPath}`}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SMTK" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <h1 className="title">{title}</h1>
	  <img src={`${process.env.STRAPI_URL}${hero_image.url}`} width="100%" height="375"/>
	  <div className="updated-at">{updatedAt}</div>
      <div>{body}</div>
    </div>
  );
}

export async function getStaticPaths() {
    const slugs = await getAllPageSlugs();
  return {
    paths: slugs.map((slug) => {
      return { params: { slug } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // todo: replace with findOne logic
  const { data } = await apollo.query({
    query: gql`
            query Pages {
		pages (filters: {slug: {eq: "${params.slug}"}})
		{
		    data {
				attributes {
				  title
				  hero_image {
					data {
						attributes {
							url
							caption
						}
					}
				  }
				  updatedAt
				  body
				  seo {
					title
					description
				  }
				}
			  }
		}
	    }
	`,
  });
  return {
    props: data.pages.data[0].attributes,
  };
}
