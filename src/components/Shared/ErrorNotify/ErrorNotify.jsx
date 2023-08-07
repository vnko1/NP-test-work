import { Toaster } from "react-hot-toast";

const ErrorNotify = () => {
  return (
    <>
      <Toaster
        position="top-left"
        reverseOrder={true}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </>
  );
};

export default ErrorNotify;
