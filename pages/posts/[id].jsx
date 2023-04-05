import axios from "axios";
import Link from "next/link";
import { Button } from "../../components/ui/Button";
import Post from "../../components/Post";
import { StyledSection } from "../../components/ui/Section/Section.styled";

const Detais = ({ post }) => {
  return (
    <>
      <Button
        as={Link}
        href="/"
        padding="9px 15px"
        radius="5px"
        justifySelf="start"
      >
        Zurück
      </Button>
      <StyledSection rows="auto auto 1fr">
        {post && (
          <Post
            image={post.image}
            title={post.title}
            alt={post.alt}
            description={post.description}
            full_description={post.full_description}
          />
        )}
      </StyledSection>
    </>
  );
};

export default Detais;

export const getServerSideProps = async ({ params }) => {

  if (!params) {
    return {
      notFound: true,
    };
  }
  const { data: post } = await axios.get(
    process.env.NEXT_PUBLIC_DOMAIN + `/api/posts/${params.id}`
  );
  return {
    props: {
      post,
    },
  };
};
