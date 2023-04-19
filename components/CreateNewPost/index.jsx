import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useRef } from "react";

import { Form } from "../Form";
import { Headline } from "../ui/Headline/Headline.styled";
import { StyledFormSection } from "./CreateNewPost.styled";

import { useForm } from "react-hook-form";

import { Button } from "../ui/Button";
import axios from "axios";

const CreateNewPost = ({ post, isEditing, onHandleIsEditing }) => {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");
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
      console.log(imageUrl);
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
      {imageUrl && (
        <Image src={imageUrl} alt={"sdsd"} width={350} height={250} />
      )}
      <input
        ref={inputFileRef}
        onChange={handleChangeFile}
        type="file"
        hidden
      />
      <Button
        onClick={() => inputFileRef.current.click()}
        padding="10px 15px"
        radius="5px"
      >
        Upload
      </Button>
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
