import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

import CreateNewPost from "../../components/CreateNewPost";
import { useAuthorizationMe } from "../../zustand/store";

const CreatePost = () => {
  const router = useRouter();
  const { isAuthorized } = useAuthorizationMe((state) => state);

  useEffect(() => {
    if (!isAuthorized) {
      router.push("/login");
    }
  }, []);

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
