import { Headline } from "../Headline/Headline";
import { Paragraph } from "../Paragraph/Paragraph";
import { StyledContent, StyledImage } from "./Post.styled";
import { StyledLink } from "./Post.styled";

const Post = ({ id, image, alt, title, description, full_description }) => {
  return (
    <>
      <StyledImage
        src={image ? image : "/no_image.png"}
        alt={alt ? alt : "photo of image"}
        width={370}
        height={150}
      />
      <StyledContent padding="0px 10px">
        <Headline>{title}</Headline>
        <Paragraph>
          {full_description ? full_description : description}
          {description && (
            <StyledLink margin="0px 0px 0px 5px" href={`/posts/${id}`}>
              read more...
            </StyledLink>
          )}
        </Paragraph>
      </StyledContent>
    </>
  );
};

export default Post;
