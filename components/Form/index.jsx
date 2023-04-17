import { StyledForm, StyledInput, StyledTextArea } from "./Form.styled";
import { Paragraph } from "../ui/Paragraph/Paragraph.styled";
import { Button } from "../ui/Button";

export const Form = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
  isEditing,
}) => {
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
        placeholder="Kurze Beschreibung"
      />
      {errors?.description?.type === "required" && (
        <Paragraph color="red">This field is required</Paragraph>
      )}
      <StyledTextArea
        {...register("full_description", {
          required: true,
        })}
        placeholder="Vollständige Beschreibung"
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
        {isEditing ? "speichern" : "posten"}
      </Button>
    </StyledForm>
  );
};
