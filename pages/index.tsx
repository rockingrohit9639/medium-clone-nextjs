import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import PostsList from "../Components/PostsList";
import { sanityClient } from "../sanity";
import { Post } from "../typings";

type Props = {
  posts: Post[];
};

const Home: NextPage<Props> = ({ posts }: Props) => {
  console.log(posts);

  return (
    <div className="">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <PostsList posts={posts} />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    author -> {
    name, image
  },
  description,
  mainImage,
  }`;
  const posts = await sanityClient.fetch(query);
  console.log(posts);

  return {
    props: { posts },
  };
};
