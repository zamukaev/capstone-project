import Head from "next/head";
import CreateNewPost from "../../components/CreateNewPost";

const CreatePost = () => {
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
