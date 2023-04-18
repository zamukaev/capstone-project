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
export const post = [
  {
    _id: "643d60af6a3bd835e2073538",
    title: "Lorem ipsum dolor sit amet,",
    description: "kjbkj",
    full_description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    image: "/images/Bildschirmfoto 2023-04-14 um 16.26.36.png",
    date: "2023-04-17T15:07:27.303Z",
    view: 5,
    __v: 0,
  },
];
const Detais = () => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const { setIsPopupOpening, isPostDeleting } = usePostDeletePopup(
    (state) => state
  );

  const handleIsEditing = () => {
    setIsEditing(!isEditing);
  };
  const handleDeletePost = async () => {
    try {
      await postsApi.deletePost(post._id);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
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
