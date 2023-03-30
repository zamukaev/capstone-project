import Post from "../Post";
import { StyledUl, StyledListItem } from "./Posts.styled";

const Posts = ({ posts }) => {
  return (
    <StyledUl>
      {posts.map((post) => (
        <StyledListItem key={post._id}>
          <Post
            image={post.image}
            alt={post.alt}
            title={post.title}
            desc={post.desc}
          />
        </StyledListItem>
      ))}
    </StyledUl>
  );
};

export default Posts;
