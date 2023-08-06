import PropTypes from "prop-types";

import DeliveryStatusCard from "/src/components/TrackingModule/DeliveryStatusCard/DeliveryStatusCard";

const DeliveryStatusList = ({ documents, isSuccess }) => {
  const renderItem = documents.map((item) => (
    <div key={item.Number}>
      <DeliveryStatusCard item={item} isSuccess={isSuccess} />
    </div>
  ));
  return <>{renderItem}</>;
};

DeliveryStatusList.propTypes = {
  documents: PropTypes.array.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};

export default DeliveryStatusList;
