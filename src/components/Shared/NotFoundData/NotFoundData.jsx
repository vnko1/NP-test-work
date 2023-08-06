import { Typography, Box } from "@mui/material";

const NotFoundData = () => (
  <Box sx={{ width: 1, textAlign: "center", pt: 10 }}>
    <Typography sx={{ fontWeight: 900, fontSize: 24 }}>
      За Вашим запитом нічого не знайдено! Спробуйте інші пошукові параметри.
    </Typography>
  </Box>
);

export default NotFoundData;
