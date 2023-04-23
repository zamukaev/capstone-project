import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

import CreateNewPost from "../../components/CreateNewPost";
import { useAuthMe } from "../../zustand/store";

const CreatePost = () => {
  const router = useRouter();
  const { user, isAuth } = useAuthMe((state) => state);

  useEffect(() => {
    if (user.roles !== "ADMIN") {
      router.push("/");
    }
  }, [isAuth, user.roles]);

  return (
    <>
      <Head>
        <title>create-post</title>
      </Head>
      <CreateNewPost />
    </>
  );
};
export default CreatePost;
