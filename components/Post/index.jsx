import { Headline } from "../Headline/Headline";
import { Paragraph } from "../Paragraph/Paragraph";
import { StyledContent, StyledImage } from "./Post.styles";

const Post = ({ image, alt, title, desc, fulldesc }) => {
  return (
    <>
      <StyledImage
        src={image ? image : "/no_image.png"}
        alt={alt ? alt : "photo of image"}
        width={370}
        height={150}
      />
      <StyledContent padding="0px 15px">
        <Headline>{title}</Headline>
        <Paragraph>{desc}</Paragraph>
      </StyledContent>
    </>
  );
};

export default Post;
