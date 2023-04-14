import axios from "axios";
import Link from "next/link";
import { Button } from "../../components/ui/Button";
import Post from "../../components/Post";
import { StyledSection } from "../../components/ui/Section/Section.styled";

import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

import { useRouter } from "next/router";

import styled from "styled-components";
import { useState } from "react";
import CreateNewPost from "../../components/CreateNewPost";

const StyledEditAndDeletMode = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  opacity: 0;
  transition: all 0.3s ease-out;
  &:hover {
    transition: all 0.3s ease-out;
    opacity: 1;
  }
`;

const StyledDeleteIcon = styled(MdDeleteForever)`
  cursor: pointer;
  color: red;
  margin-right: 5px;
`;
const StyledEditIcon = styled(FaRegEdit)`
  cursor: pointer;
  color: #8338ec;
`;

const Detais = ({ post }) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  const handleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const deletePostHandler = async (postId) => {
    try {
      await axios.delete(
        process.env.NEXT_PUBLIC_DOMAIN + `/api/posts/${postId}`
      );
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return isEditing ? (
    <CreateNewPost
      post={post}
      isEditing={isEditing}
      onHandleIsEditing={handleIsEditing}
    />
  ) : (
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
      <StyledSection
        width="1200px"
        rows="auto auto 1fr"
        colums="minmax(1fr, 500px)"
      >
        <StyledEditAndDeletMode>
          <StyledDeleteIcon
            onClick={() => deletePostHandler(post._id)}
            size="25px"
          />
          <StyledEditIcon onClick={handleIsEditing} size="25px" />
        </StyledEditAndDeletMode>
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
