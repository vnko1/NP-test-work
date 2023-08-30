import { useGoogleLogin } from "@react-oauth/google";

export const Google = () => {
  const googleOAuthLogin = useGoogleLogin({
    flow: "auth-code",
    ux_mode: "popup",
    state: "chapter",

    onSuccess: async (codeResponse) => {
      if (codeResponse.state === "chapter") {
        console.log(codeResponse);
      }
    },
    onError: (onError) => {
      console.log("Google Login Failed!", onError);
    },
  });
  return <button onClick={() => googleOAuthLogin()}>GOOGLE</button>;
};
