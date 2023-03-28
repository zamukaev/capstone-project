import Heading from "../components/Heading";
import styled from "styled-components";
import Posts from "../components/Posts";
import axios from "axios";
import { IPosts } from "../components/Posts/PostsType";
import { GetServerSideProps } from "next/types";

// types for Styled main component
interface WrapperProps {
  color?: string;
}

const StyledWrapper = styled.section<WrapperProps>`
  max-width: 1200px;
  margin: 0px auto;
  min-height: 100vh;
  color: ${(props) => props.color};
  display: grid;
  grid-template-areas:
    "head head"
    "main main"
    "main main";
  grid-template-rows: 50px 1fr 1fr;
  grid-template-columns: 1fr 1fr;
`;

const StyledMain = styled.main`
  grid-area: main;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  padding: 0px 20px;
`;

export default function Home({ posts }: IHomeProps): JSX.Element {
  return (
    <StyledWrapper color="#D2D2D2">
      <StyledMain>
        <Posts posts={posts} />
      </StyledMain>
    </StyledWrapper>
  );
}

// ssr

export const getServerSideProps: GetServerSideProps<IHomeProps> = async (
  context
) => {
  // fetch data with axios from backend
  const { data: posts } = await axios.get<IPosts[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/posts"
  );
  return {
    props: {
      posts,
    },
  };
};
// types for the home page props
export interface IHomeProps extends Record<string, unknown> {
  posts: IPosts[];
}
