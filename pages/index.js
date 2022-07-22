import { Fragment } from "react";
import FeaturedPost from "../component/homepage/featured-post";
import Hero from "../component/homepage/hero";
import { getFeaturedPost } from "../lib/post-util";
import Head from "next/head";

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Bayu Blog</title>
        <meta name='description' content="haloo home"/>
      </Head>
      <Hero />
      <FeaturedPost posts={props.post}/>
    </Fragment>
  )
}

export function getStaticProps() {
  const featuredPost = getFeaturedPost()

  return {
    props: {
      post: featuredPost
    },
    revalidate: 60
  }
}
