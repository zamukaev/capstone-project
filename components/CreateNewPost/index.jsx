import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Headline } from "../ui/Headline/Headline.styled";

import Form from "../Form";
import { StyledFormSection } from "./CreateNewPost.styled";

const CreateNewPost = ({ post, isEdit, setIsEdit }) => {
  const router = useRouter();
  const [image, setImage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: isEdit ? post.title : "",
      description: isEdit ? post.description : "",
      full_description: isEdit ? post.full_description : "",
    },
  });

  const onSubmit = async (fromData) => {
    const newObject = {
      image: "",
      ...fromData,
    };
    try {
      const { data } = isEdit
        ? await axios.put(
            process.env.NEXT_PUBLIC_DOMAIN + `/api/posts/${post._id}`,
            newObject
          )
        : await axios.post(
            process.env.NEXT_PUBLIC_DOMAIN + "/api/posts",
            newObject
          );
      setIsEdit && setIsEdit(!isEdit);

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
      />
    </StyledFormSection>
  );
};
export default CreateNewPost;
