import PropTypes from "prop-types";

import { Pagination, Grow, Grid, Box } from "@mui/material";

import WarehouseCard from "/src/components/FindWarehouseModule/WarehouseCard/WarehouseCard";

import { LIMIT } from "/src/constants/constants";

const WarehousesList = ({ documents, total, setPage, page, isSuccess }) => {
  const handleChange = async (_, value) => {
    setPage(value);
  };

  const renderItem = documents.map((item) => (
    <Grid item xs={3} sm={4} md={4} key={item.Ref}>
      <WarehouseCard item={item} />
    </Grid>
  ));

  const pagination = Math.ceil(total / LIMIT) > 1 && (
    <Pagination
      count={Math.ceil(total / LIMIT)}
      page={page}
      onChange={handleChange}
    />
  );
  return (
    <Box sx={{ pt: 1 }}>
      <Grow in={isSuccess} appear={true} timeout={1000}>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {renderItem}
        </Grid>
      </Grow>
      {pagination}
    </Box>
  );
};

WarehousesList.propTypes = {
  documents: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};

export default WarehousesList;
