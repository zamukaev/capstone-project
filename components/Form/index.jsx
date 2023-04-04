import { StyledForm, StyledInput, StyledTextArea } from "./Form.styled";
import { Paragraph } from "../ui/Paragraph/Paragraph";
import { Button } from "../ui/Button";

const Form = ({ register, handleSubmit, errors, onSubmit }) => {
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        {...register("alt", {
          required: true,
          maxLength: 20,
        })}
        placeholder="alt"
      />
      {errors?.alt?.type === "required" && (
        <Paragraph color="red">This field is required</Paragraph>
      )}
      {errors?.alt?.type === "maxLength" && (
        <Paragraph color="red">Alt cannot exceed 20 characters</Paragraph>
      )}

      <StyledInput
        {...register("title", {
          required: true,
          maxLength: 50,
        })}
        placeholder="Überschrift"
      />
      {errors?.title?.type === "required" && (
        <Paragraph color="red">This field is required</Paragraph>
      )}
      {errors?.title?.type === "maxLength" && (
        <Paragraph color="red">Alt cannot exceed 50 characters</Paragraph>
      )}

      <StyledTextArea
        {...register("description", {
          required: true,
          maxLength: 50,
        })}
        placeholder="Kurze Beitragstext"
      />
      {errors?.description?.type === "required" && (
        <Paragraph color="red">This field is required</Paragraph>
      )}
      <StyledTextArea
        {...register("full_description", {
          required: true,
        })}
        placeholder="Beitragstext"
      />
      {errors?.full_description?.type === "required" && (
        <Paragraph color="red">This field is required</Paragraph>
      )}

      <Button
        type="submit"
        padding="10px"
        margin="30px 0px 0px 0px"
        radius="5px"
        self="end"
      >
        Beitrag beginnen
      </Button>
    </StyledForm>
  );
};

export default Form;
