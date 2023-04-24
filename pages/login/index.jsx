import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Button } from "../../components/ui/Button";
import { authApi } from "../../axios/api";
import { useAuthorizationMe } from "../../zustand/store";

import { useForm } from "react-hook-form";

import { StyledFormSection } from "../../components/CreateNewPost/CreateNewPost.styled";
import { Paragraph } from "../../components/ui/Paragraph/Paragraph.styled";
import { StyledForm, StyledInput } from "../../components/Form/Form.styled";

import { StyledButtonsContainer } from "../../components/Sidebare/Sidebare.styled";

const Login = () => {
  const [error, setError] = useState(false);
  const router = useRouter();
  const { isAuthorized, setIsAuthorized } = useAuthorizationMe(
    (state) => state
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (user) => {
    try {
      setError(false);
      const { data } = await authApi.login(user);

      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      if (!error) {
        setIsAuthorized(true);
        router.push("/");
      }
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token") && isAuthorized) {
      router.push("/");
    }
  });

  return (
    <StyledFormSection rows="1fr " margin="40px 0px 0px 0px">
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          {...register("email", {
            required: true,
            maxLength: 100,
          })}
          type="text"
          placeholder="Email"
          margin="15px"
        />

        <StyledInput
          {...register("password", {
            required: true,
            maxLength: 100,
          })}
          margin="5px"
          type="password"
          placeholder="Password"
        />
        {error && (
          <Paragraph color="red">Password oder Email ist falsch!</Paragraph>
        )}
        <StyledButtonsContainer margin="25px 0px 0px 0px">
          <Button
            type="submit"
            bgcolor="#498C0E"
            justifySelf="end"
            padding="10px 15px"
            radius="5px"
            margin="0px 10px 0px 0px"
            hover="#58B507"
          >
            Anmelden
          </Button>
          <Button
            as={Link}
            href="/register"
            bgcolor={({ theme }) => theme.bg_colors.btn_secondary_color}
            justifySelf="end"
            padding="10px 15px"
            radius="5px"
            hover="#FF1100"
          >
            Regestrieren
          </Button>
        </StyledButtonsContainer>
      </StyledForm>
    </StyledFormSection>
  );
};
export default Login;
