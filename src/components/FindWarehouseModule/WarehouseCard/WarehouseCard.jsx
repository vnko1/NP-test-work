import PropTypes from "prop-types";

import { Typography, CardContent, Card, Box, Paper, Link } from "@mui/material";
import PopperEl from "/src/components/Shared/PopperEl/PopperEl";

const WarehouseCard = ({ item }) => {
  return (
    <Card sx={{ minHeight: 220 }}>
      <CardContent
        sx={{
          p: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography>Адреса:</Typography>
          <Typography>
            {item.SettlementTypeDescription} {item.CityDescription}{" "}
            {item.Description}
          </Typography>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Typography></Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Typography>Телефон:</Typography>
            <Link href=`tel:+${item.Phone}` sx={{ textDecoration: "none", cursor: "pointer" }}>
              {item.Phone}
            </Link>
          </Box>
        </Box>
        <PopperEl>
          <Paper>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ p: 1 }}>пн:</Typography>
              <Typography sx={{ p: 1 }}>{item.Schedule.Monday}</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ p: 1 }}>вт:</Typography>
              <Typography sx={{ p: 1 }}>{item.Schedule.Tuesday}</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ p: 1 }}>ср:</Typography>
              <Typography sx={{ p: 1 }}>{item.Schedule.Wednesday}</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ p: 1 }}>чи:</Typography>
              <Typography sx={{ p: 1 }}>{item.Schedule.Thursday}</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ p: 1 }}>пт:</Typography>
              <Typography sx={{ p: 1 }}>{item.Schedule.Friday}</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ p: 1 }}>сб:</Typography>
              <Typography sx={{ p: 1 }}>{item.Schedule.Saturday}</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ p: 1 }}>нд:</Typography>
              <Typography sx={{ p: 1 }}>{item.Schedule.Sunday}</Typography>
            </Box>
          </Paper>
        </PopperEl>
      </CardContent>
    </Card>
  );
};

WarehouseCard.propTypes = {
  item: PropTypes.object.isRequired,
};
export default WarehouseCard;
