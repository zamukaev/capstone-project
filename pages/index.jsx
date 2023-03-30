import styled from "styled-components";
import Posts from "../components/Posts";
import axios from "axios";

export default function Home({ posts }) {
  return <Posts posts={posts} />;
}

// ssr
export const getServerSideProps = async (context) => {
  // fetch data with axios from backend
  const { data: posts } = await axios.get(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/posts"
  );
  return {
    props: {
      posts,
    },
  };
};
