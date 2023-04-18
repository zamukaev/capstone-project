import { StyledContent, StyledImage } from "./Post.styled";
import { StyledLink } from "./Post.styled";
import { Headline } from "../ui/Headline/Headline.styled";
import { Paragraph } from "../ui/Paragraph/Paragraph.styled";

const Post = ({
  id,
  image,
  alt,
  viewCount,
  title,
  description,
  full_description,
}) => {
  return (
    <>
      <StyledImage
        src={image ? image : "/no_image.png"}
        alt={alt ? alt : "photo of image"}
        width={770}
        height={350}
        radius="5px 5px 0px 0px"
      />
      <StyledContent padding="0px 10px">
        <Headline>{title}</Headline>
        <Paragraph>
          {full_description ? full_description : description}

          {!full_description && (
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
