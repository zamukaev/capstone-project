import { useRouter } from "next/router";
import { useState, useRef } from "react";

import { Form } from "../Form";
import { Button } from "../ui/Button";

import { useForm } from "react-hook-form";

import { Headline } from "../ui/Headline/Headline.styled";
import {
  StyledFormSection,
  StyledImage,
  StyledImageContainer,
} from "./CreateNewPost.styled";

import axios from "axios";
import { postsApi } from "../../axios/api";

const CreateNewPost = ({ post, isEditing, onHandleIsEditing }) => {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState(isEditing ? post.image : "");
  const inputFileRef = useRef();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: isEditing ? post.title : "",
      description: isEditing ? post.description : "",
      full_description: isEditing ? post.full_description : "",
    },
  });
  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("file", file);
      const { data } = await axios.post(
        process.env.NEXT_PUBLIC_DOMAIN + "/api/upload",
        formData
      );

      setImageUrl(data.url);
    } catch (err) {
      console.warn(err);
      alert(err);
    }
  };

  const onSubmit = async (fromData) => {
    const newObject = {
      image: imageUrl,
      ...fromData,
    };

    try {
      const { data } = isEditing
        ? await postsApi.updatePost(post._id, newObject)
        : await postsApi.createPost(newObject);

      onHandleIsEditing && onHandleIsEditing();

      router.push(`/posts/${data._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledFormSection width="100%">
      <Headline margin="0px 0px 25px 0px">Neuer Beitrag erstellen</Headline>
      <StyledImageContainer>
        {imageUrl && (
          <StyledImage src={imageUrl} alt={"sdsd"} width={350} height={250} />
        )}
        <input
          ref={inputFileRef}
          onChange={handleChangeFile}
          type="file"
          hidden
        />
        {!imageUrl && (
          <Button
            onClick={() => inputFileRef.current.click()}
            padding="10px 15px"
            radius="5px"
            justifySelf="start"
          >
            Hochladen
          </Button>
        )}
        {imageUrl && (
          <Button
            onClick={() => setImageUrl("")}
            padding="10px 15px"
            radius="5px"
            margin="0px 0px 0px 10px"
            justifySelf="start"
            bgcolor={({ theme }) => theme.bg_colors.btn_secondary_color}
          >
            Löschen
          </Button>
        )}
      </StyledImageContainer>

      <Form
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
        isEditing={isEditing}
      />
    </StyledFormSection>
  );
};
export default CreateNewPost;
