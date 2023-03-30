import axios from "axios";
import Post from "../../components/Post";
import { StyledSection } from "../../components/Posts/Posts.styled";

const Detais = ({ post }) => {
  return (
    <StyledSection>
      <Post
        image={post.image}
        title={post.title}
        alt={post.alt}
        full_desc={post.full_desc}
      />
    </StyledSection>
  );
};

export default Detais;

export async function getStaticPaths() {
  const { data: posts } = await axios.get(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/posts"
  );
  return {
    paths: posts.map((post) => ({
      params: {
        id: post._id,
      },
    })),
    fallback: true, // can also be true or 'blocking'
  };
}

export const getStaticProps = async ({ params }) => {
  console.log(params);
  const { id } = params;
  const { data: post } = await axios.get(
    process.env.NEXT_PUBLIC_DOMAIN + `/api/posts/${id}`
  );
  return {
    props: {
      post,
    },
  };
};
