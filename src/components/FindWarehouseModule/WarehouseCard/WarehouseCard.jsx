import PropTypes from "prop-types";

import { Typography, CardContent, Card } from "@mui/material";

const WarehouseCard = ({ item }) => {
  return (
    <Card sx={{ minHeight: 350 }}>
      <CardContent>
        <Typography>
          {item.SettlementTypeDescription} {item.CityDescription}
        </Typography>
        <Typography>{item.Description}</Typography>
        <Typography>{item.Phone}</Typography>
        <Typography>
          Графік роботи:
          <span>ПН: {item.Schedule.Monday}</span>
          <span>ВТ: {item.Schedule.Tuesday}</span>
          <span>СР: {item.Schedule.Wednesday}</span>
          <span>ЧТ: {item.Schedule.Thursday}</span>
          <span>ПТ: {item.Schedule.Friday}</span>
          <span>СБ: {item.Schedule.Saturday}</span>
          <span>НД: {item.Schedule.Sunday}</span>
        </Typography>
        <Typography>{item.Latitude}</Typography>
        <Typography>{item.Longitude}</Typography>
      </CardContent>
    </Card>
  );
};

WarehouseCard.propTypes = {
  item: PropTypes.object.isRequired,
};
export default WarehouseCard;
