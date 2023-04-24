import { useState } from "react";
import { useRouter } from "next/router";

import { Button } from "../../components/ui/Button";
import { authApi } from "../../axios/api";

import { useForm } from "react-hook-form";

import { StyledFormSection } from "../../components/CreateNewPost/CreateNewPost.styled";
import { StyledForm, StyledInput } from "../../components/Form/Form.styled";

const Login = () => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (user) => {
    try {
      setIsloading(true);
      await authApi.register(user);
      setIsloading(false);
      if (!error) {
        router.push("/login");
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <StyledFormSection margin="40px 0px 0px 0px">
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          {...register("firstname", {
            required: true,
            maxLength: 100,
          })}
          type="text"
          placeholder="Vorname"
        />

        <StyledInput
          type="text"
          placeholder="Nachname"
          {...register("lastname", {
            required: true,
            maxLength: 100,
          })}
        />

        <StyledInput
          {...register("email", {
            required: true,
            maxLength: 100,
          })}
          type="text"
          placeholder="Email"
        />

        <StyledInput
          {...register("password", {
            required: true,
            maxLength: 100,
          })}
          type="password"
          placeholder="Password"
        />

        <Button
          type="submit"
          bgcolor={({ theme }) => theme.bg_colors.btn_secondary_color}
          padding="10px 15px"
          radius="5px"
          self="end"
          disabled={isLoading}
        >
          Registrieren
        </Button>
      </StyledForm>
    </StyledFormSection>
  );
};
export default Login;
