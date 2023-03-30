import Post from "../Post";
import { StyledSection } from "./Posts.styles";
import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <StyledSection key={post._id}>
          <Link href={`/posts/${post._id}`}>Link</Link>
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
