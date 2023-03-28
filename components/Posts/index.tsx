import { IHomeProps } from "../../pages";
import { Headline } from "../Headline/Headline";
import { PTag } from "../PTag/PTag";
import { StyledContent, StyledImage, StyledSection } from "./Posts.styles";
import { IPosts } from "./PostsType";

const Posts = ({ posts }: IHomeProps): JSX.Element => {
  return (
    <>
      {posts.map((post: IPosts) => (
        <StyledSection margin="15px 0px" key={post._id}>
          <StyledImage
            src={post.image ? post.image : "/no_image.png"}
            alt={post.alt ? post.alt : "photo of image"}
            width={370}
            height={150}
          />
          <StyledContent>
            <Headline margin="0px 0px 15px 0px">{post.title}</Headline>
            <PTag>{post.content}</PTag>
          </StyledContent>
        </StyledSection>
      ))}
    </>
  );
};

export default Posts;
