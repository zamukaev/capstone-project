import axios from "axios";
import Posts from "../components/Posts";
import { Sidebare } from "../components/Sidebare";

export default function Home({ posts }) {
  return <>{false ? <Posts posts={posts} /> : <Sidebare />}</>;
}

// ssr
export const getServerSideProps = async (context) => {
  // fetch data with axios from backend
  const { data: posts } = await axios.get(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/posts"
  );
  return {
    props: {
      posts: posts.reverse(),
    },
  };
};
