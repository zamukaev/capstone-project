import Post from "../Post";
import { StyledListItem, StyledSection, StyledUl } from "./Posts.styles";

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <StyledSection key={post._id}>
          <Post
            image={post.image}
            alt={post.alt}
            title={post.title}
            desc={post.desc}
          />
        </StyledSection>
      ))}
    </>
  );
};

export default Posts;
