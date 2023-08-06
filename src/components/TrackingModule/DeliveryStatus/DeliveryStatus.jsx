import PropTypes from "prop-types";
import { Typography, CardContent, Card, Zoom } from "@mui/material";

const DeliveryStatus = ({ documents, isSuccess }) => {
  const renderItem = documents.map((item) => (
    <Zoom in={isSuccess} key={item.Number} timeout={500}>
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
            {item.WarehouseSender}
          </Typography>
          <Typography sx={{ fontSize: 20, fontWeight: 900 }}>
            ОТРИМАНО:
          </Typography>
          <Typography sx={{ fontSize: 20 }} gutterBottom>
            {item.WarehouseRecipient}
          </Typography>
        </CardContent>
      </Card>
    </Zoom>
  ));
  return <>{renderItem}</>;
};

DeliveryStatus.propTypes = {
  documents: PropTypes.array.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};

export default DeliveryStatus;
