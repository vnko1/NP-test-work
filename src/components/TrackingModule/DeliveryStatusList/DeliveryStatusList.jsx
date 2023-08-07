import PropTypes from "prop-types";
import { Box } from "@mui/material";

import DeliveryStatusCard from "/src/components/TrackingModule/DeliveryStatusCard/DeliveryStatusCard";

const DeliveryStatusList = ({ documents, isSuccess }) => {
  const renderItem = documents.map((item) => (
    <Box key={item.Number} sx={{ maxWidth: [1, 1, 4 / 5] }}>
      <DeliveryStatusCard item={item} isSuccess={isSuccess} />
    </Box>
  ));
  return <>{renderItem}</>;
};

DeliveryStatusList.propTypes = {
  documents: PropTypes.array.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};

export default DeliveryStatusList;
