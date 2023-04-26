import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { useAuthorizationMe } from "../../zustand/store";
import Login from "../../components/Login";

const LoginPage = () => {
  const [error, setError] = useState(false);
  const router = useRouter();
  const { isAuthorized, setIsAuthorized } = useAuthorizationMe(
    (state) => state
  );

  useEffect(() => {
    if (localStorage.getItem("token") && isAuthorized) {
      router.push("/");
    }
  });

  return <Login />;
};
export default LoginPage;
