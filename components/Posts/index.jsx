import Post from "../Post";
import { StyledListItem, StyledUl } from "./Posts.styled";

const Posts = ({ posts }) => {
  return (
    <StyledUl>
      {posts.map((post) => (
        <StyledListItem key={post._id} padding="0px 15px 15px 15px">
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
