import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { selectCurrentTrackCode } from "/src/redux/slices/deliveryService/selectors";

const DeliveryStatus = ({ documents }) => {
  const currentTrackCode = useSelector(selectCurrentTrackCode);
  return (
    <>
      <p>{currentTrackCode}</p>
      <ul>
        {documents.map((item) => {
          return (
            <li key={item.Number}>
              <p>Статус доставки: {item.Status}</p>
              <p>Dідправлено: {item.WarehouseSender}</p>
              <p>Отримано: {item.WarehouseRecipient}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

DeliveryStatus.propTypes = { documents: PropTypes.array.isRequired };

export default DeliveryStatus;
