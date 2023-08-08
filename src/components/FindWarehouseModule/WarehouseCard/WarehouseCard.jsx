import PropTypes from "prop-types";

import { Typography, CardContent, Card, Box, Paper, Link } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MapIcon from "@mui/icons-material/Map";
import ScheduleIcon from "@mui/icons-material/Schedule";

import PopperEl from "/src/components/Shared/PopperEl/PopperEl";

const WarehouseCard = ({ item }) => {
  return (
    <Card
      sx={{
        minHeight: [200, 210, 250],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            pl: 3,
          }}
        >
          <Box>
            <Link
              href={`https://maps.google.com?saddr=Current+Location&daddr=${item.Latitude},${item.Longitude}`}
              target="_blank"
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <MapIcon />
              <Box>
                <Typography>
                  {item.SettlementTypeDescription} {item.CityDescription},
                </Typography>
                <Typography>{item.Description}</Typography>
              </Box>
            </Link>
          </Box>
          {item.Phone ? (
            <Link
              href={`tel:+${item.Phone}`}
              sx={{
                textDecoration: "none",
                cursor: "pointer",
                display: "flex",
                gap: 3,
                alignItems: "center",
              }}
            >
              <LocalPhoneIcon />+{item.Phone}
            </Link>
          ) : null}
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              gap: 3,
              alignItems: "center",
            }}
          >
            <PopperEl
              content="Графік роботи:"
              icon={<ScheduleIcon sx={{ mr: 3 }} />}
            >
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
                  <Typography sx={{ p: 1 }}>
                    {item.Schedule.Wednesday}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={{ p: 1 }}>чи:</Typography>
                  <Typography sx={{ p: 1 }}>
                    {item.Schedule.Thursday}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={{ p: 1 }}>пт:</Typography>
                  <Typography sx={{ p: 1 }}>{item.Schedule.Friday}</Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={{ p: 1 }}>сб:</Typography>
                  <Typography sx={{ p: 1 }}>
                    {item.Schedule.Saturday}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={{ p: 1 }}>нд:</Typography>
                  <Typography sx={{ p: 1 }}>{item.Schedule.Sunday}</Typography>
                </Box>
              </Paper>
            </PopperEl>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

WarehouseCard.propTypes = {
  item: PropTypes.object.isRequired,
};
export default WarehouseCard;
