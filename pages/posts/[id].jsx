import Link from "next/link";
import Head from "next/head";

import { useRouter } from "next/router";
import { useState } from "react";

import Post from "../../components/Post";
import CreateNewPost from "../../components/CreateNewPost";
import Popup from "../../components/Popup";
import { Button } from "../../components/ui/Button";
import { StyledSection } from "../../components/ui/Section/Section.styled";

import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

import { usePostDeletePopup } from "../../zustand/store";

import postsApi from "../../api/index";

import styled from "styled-components";

const StyledEditAndDeletMode = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
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
  const { isPopupOpening, setIsPopupOpening, isPostDeleting } =
    usePostDeletePopup((state) => state);

  const handleIsEditing = () => {
    setIsEditing(!isEditing);
  };
  const handleDeletePost = async () => {
    try {
      postsApi.deletePost(postId);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
    console.log("delete");
  };
  const handleDeletePostPopupOpen = () => {
    setIsPopupOpening(true);
  };

  return isEditing ? (
    <CreateNewPost
      post={post}
      isEditing={isEditing}
      onHandleIsEditing={handleIsEditing}
    />
  ) : (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Popup onDeletePost={handleDeletePost} />
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
          <StyledDeleteIcon onClick={handleDeletePostPopupOpen} size="25px" />
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

  const { data: post } = await postsApi.getPostById(params.id);

  return {
    props: {
      post,
    },
  };
};
