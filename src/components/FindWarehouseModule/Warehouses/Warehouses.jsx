import PropTypes from "prop-types";

import { Pagination } from "@mui/material";

const Warehouses = ({ documents, total, setPage, page }) => {
  const handleChange = async (_, value) => {
    setPage(value);
  };

  const renderDocuments = documents.map((item) => {
    return (
      <li key={item.Ref}>
        <p>
          {item.SettlementTypeDescription} {item.CityDescription}
        </p>
        <p>{item.Description}</p>
        <p>{item.Phone}</p>
        <p>
          Графік роботи:
          <span>ПН: {item.Schedule.Monday}</span>
          <span>ВТ: {item.Schedule.Tuesday}</span>
          <span>СР: {item.Schedule.Wednesday}</span>
          <span>ЧТ: {item.Schedule.Thursday}</span>
          <span>ПТ: {item.Schedule.Friday}</span>
          <span>СБ: {item.Schedule.Saturday}</span>
          <span>НД: {item.Schedule.Sunday}</span>
        </p>
        <p>{item.Latitude}</p>
        <p>{item.Longitude}</p>
      </li>
    );
  });

  const renderPagination = Math.ceil(total / 10) > 1 && (
    <Pagination
      count={Math.ceil(total / 10)}
      page={page}
      onChange={handleChange}
    />
  );
  return (
    <div>
      <ul>{renderDocuments}</ul>
      {renderPagination}
    </div>
  );
};

Warehouses.propTypes = {
  documents: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default Warehouses;
