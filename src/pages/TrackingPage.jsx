import TrackingModule from "/src/components/TrackingModule/TrackingModule";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Google } from "./Google";
const TrackingPage = () => {
  return (
    <>
      <GoogleOAuthProvider
        clientId={
          "557632704618-i3f3uv95cg279ru25c33sgohpcgu53k8.apps.googleusercontent.com"
        }>
        <TrackingModule />
        <Google />
      </GoogleOAuthProvider>
    </>
  );
};

export default TrackingPage;
