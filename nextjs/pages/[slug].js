// import "../styles/slug.css";
import {
  getPageBySlug,
  getAllPageSlugs
} from '../lib/pages';
import apollo from "../lib/apollo-client";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import Head from "next/head";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

export default function Page({
  body,
  description,
  hero_image: hero_image_raw,
  title,
  updatedAt,
  preview
}) {
  const router = useRouter();
  const hero_image = hero_image_raw?.data.attributes;

  // render()
  return (
    <div className="App">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          property="og:url"
          content={`http://localhost:3000/${router.asPath}`}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SMTK" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      {preview && <h1>
		this is a preview
	    </h1>}

      <h1 className="title">{title}</h1>
      <img
        className="hero-img"
        src={`${process.env.STRAPI_URL}${hero_image?.url}`}
        width="100%"
        height="375"
      />
      <div className="updated-at">
        <Moment format="dddd, MMMM DD YYYY">{updatedAt}</Moment>
      </div>
      <div>
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
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

export async function getStaticProps({params: {slug}, preview}){
    const data = await getPageBySlug({slug, preview});
    if(!data){
	// todo: 404 page? redirect with alert?
    }
    // implied else
    return {
	props: {
	    preview,
	    ...data
	}
    }
}
