import Link from "next/link";
import Post from "../Post";
import { StyledListItem, StyledUl } from "./Posts.styles";

const Posts = ({ posts }) => {
  return (
    <StyledUl>
      {posts.map((post) => (
        <StyledListItem key={post._id} padding="0px 15px 15px 15px">
          <Link href={`/posts/${post._id}`}>Link</Link>
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
