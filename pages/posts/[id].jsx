import axios from "axios";
import styled from "styled-components";
import Post from "../../components/Post";
import { StyledListItem, StyledUl } from "../../components/Posts/Posts.styles";
const StyledSection = styled.section`
  margin: ${(props) => props.margin || "0px"};
`;

const Detais = ({ post }) => {
  console.log(post);
  return (
    <StyledUl>
      <StyledListItem padding="0px 15px 15px">
        <Post
          image={post.image}
          title={post.title}
          alt={post.alt}
          desc={post.desc}
        />
      </StyledListItem>
    </StyledUl>
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
