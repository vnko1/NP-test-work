import PropTypes from "prop-types";
import { Typography, CardContent, Card, Zoom } from "@mui/material";

const DeliveryStatusCard = ({ isSuccess, item }) => {
  return (
    <Zoom in={isSuccess} timeout={500} sx={{ mt: 2 }}>
      <Card sx={{ boxShadow: 5 }}>
        <CardContent sx={{ textAlign: "center", p: 2 }}>
          <Typography sx={{ fontSize: 20, fontWeight: 900 }}>
            СТАТУС ДОСТАВКИ:
          </Typography>
          <Typography sx={{ fontSize: 20 }} gutterBottom>
            {item.Status}
          </Typography>
          <Typography sx={{ fontSize: 20, fontWeight: 900 }}>
            ВІДПРАВЛЕНО:
          </Typography>
          <Typography sx={{ fontSize: 20 }} gutterBottom>
            {item.CitySender}, {item.WarehouseSender}
          </Typography>
          <Typography sx={{ fontSize: 20, fontWeight: 900 }}>
            ОТРИМАНО:
          </Typography>
          <Typography sx={{ fontSize: 20 }} gutterBottom>
            {item.CityRecipient}, {item.WarehouseRecipient}
          </Typography>
        </CardContent>
      </Card>
    </Zoom>
  );
};

DeliveryStatusCard.propTypes = {
  item: PropTypes.object.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};
export default DeliveryStatusCard;
