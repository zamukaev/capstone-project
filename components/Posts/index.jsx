import Post from "../Post";
import { StyledUl, StyledListItem } from "./Posts.styled";

const Posts = ({ posts }) => {
  return (
    <StyledUl role="list">
      {posts?.map((post) => (
        <StyledListItem role="listitem" key={post?._id}>
          <Post
            id={post._id}
            image={post.image}
            alt={post.alt}
            title={post.title}
            description={post.description}
          />
        </StyledListItem>
      ))}
    </StyledUl>
  );
};

export default Posts;
