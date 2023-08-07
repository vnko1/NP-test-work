import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const NotFoundComponent = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">404</Typography>
        <Typography variant="h4">
          The page you’re looking for doesn’t exist.
        </Typography>
        <Button
          sx={{ mt: 5 }}
          variant="contained"
          onClick={() => navigate("/")}
          color="error"
        >
          Back Home
        </Button>
      </Container>
    </Box>
  );
};

export default NotFoundComponent;
