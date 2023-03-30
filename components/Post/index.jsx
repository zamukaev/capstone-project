import { Headline } from "../Headline/Headline";
import { Paragraph } from "../Paragraph/Paragraph";

import { StyledImage } from "./Post.styled";
const Post = ({ image, alt, title, desc, fulldesc }) => {
  return (
    <>
      <StyledImage
        src={image ? image : "/no_image.png"}
        alt={alt ? alt : "photo of image"}
        width={370}
        height={150}
      />
      <Headline>{title}</Headline>
      <Paragraph>{desc}</Paragraph>
    </>
  );
};

export default Post;
