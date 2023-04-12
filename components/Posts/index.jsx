import Post from "../Post";
import { StyledUl, StyledListItem } from "./Posts.styled";
import { useSearchValue } from "../../zustand/store";
const Posts = ({ posts }) => {
  const { searchValue, setSearchValue } = useSearchValue((state) => state);
  return (
    <StyledUl role="list">
      {(searchValue
        ? posts?.filter((post) =>
            post.title.toLowerCase().includes(searchValue.toLowerCase())
          )
        : posts
      ).map((post) => (
        <StyledListItem gap="15px" radius="5px" role="listitem" key={post._id}>
          <Post
            id={post._id}
            image={post.image}
            alt={post.alt}
            title={post.title}
            description={post.description}
          />
        </StyledListItem>
      ))}
    </StyledUl>
  );
};

export default Posts;
