import { getPageBySlug, getAllPageSlugs } from "../lib/pages";
import apollo from "../lib/apollo-client";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import Head from "next/head";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import PreviewAlert from "@components/PreviewAlert";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Page({
  body,
  description,
  hero_image: hero_image_raw,
  title,
  updatedAt,
  preview,
}) {
  const router = useRouter();
  const hero_image = hero_image_raw?.data?.attributes;

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

      {preview && <PreviewAlert />}
      {/* todo: what do we do if no hero image? */}
      <Container>
        <img
          className="hero-img"
          src={`${process.env.STRAPI_URL}${hero_image?.url}`}
          width="100%"
          height="375"
          style={{ objectFit: "cover" }}
        />

        <Typography
          variant="caption"
          component="div"
          className="updated-at"
          style={{ color: "#686868", textAlign: "right" }}
        >
          Last updated:
          <Moment format="dddd, MMMM DD YYYY">{updatedAt}</Moment>
        </Typography>

        <Typography variant="h1">{title}</Typography>
        
        <Typography variant="body1" component="div">
          <ReactMarkdown>{body}</ReactMarkdown>
        </Typography>
      </Container>
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

export async function getStaticProps({ params: { slug }, preview }) {
  const data = await getPageBySlug({ slug, preview });
  if (!data) {
    // todo: 404 page? redirect with alert?
  }
  // implied else
  return {
    props: {
      preview: preview || false,
      ...data,
    },
  };
}
