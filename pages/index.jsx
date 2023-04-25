import { postsApi } from "../axios/api";
import Posts from "../components/Posts";

export default function Home({ posts }) {
  return (
    <>
      <Posts posts={posts} />
    </>
  );
}
// ssr

export const getServerSideProps = async (context) => {
  // fetch data with axios from backend
  try {
    const { data: posts } = await postsApi.getPosts();
    if (!posts) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        posts: posts.reverse(),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
