import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import { Form } from "../Form";
import { Headline } from "../ui/Headline/Headline.styled";
import { StyledFormSection } from "./CreateNewPost.styled";

import { useForm } from "react-hook-form";

import axios from "axios";

const CreateNewPost = ({ post, isEditing, onHandleIsEditing }) => {
  const router = useRouter();
  const [image, setImage] = useState("");

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

  const onSubmit = async (fromData) => {
    const newObject = {
      image: "",
      ...fromData,
    };
    try {
      const { data } = isEditing
        ? await axios.put(
            process.env.NEXT_PUBLIC_DOMAIN + `/api/posts/${post._id}`,
            newObject
          )
        : await axios.post(
            process.env.NEXT_PUBLIC_DOMAIN + "/api/posts",
            newObject
          );

      onHandleIsEditing && onHandleIsEditing();

      router.push(`/posts/${data._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledFormSection>
      <Headline margin="0px 0px 25px 0px">Neuer Beitrag erstellen</Headline>
      {image && <Image src={image} alt={alt} width={80} height={60} />}
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
