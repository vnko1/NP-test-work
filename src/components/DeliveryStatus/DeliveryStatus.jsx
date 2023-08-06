import PropTypes from "prop-types";

const DeliveryStatus = ({ documents }) => {
  const renderItem = (
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
  );
  return <>{renderItem}</>;
};

DeliveryStatus.propTypes = { documents: PropTypes.array.isRequired };

export default DeliveryStatus;
