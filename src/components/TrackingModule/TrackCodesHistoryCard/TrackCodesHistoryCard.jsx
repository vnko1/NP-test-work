import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { Typography, Button, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import { deleteTrackCodesData } from "/src/redux/slices/deliveryService/deliveryServiceSlice";

const TrackCodesHistoryCard = ({ item, getData, setValue, handleChange }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Button
        onClick={() => {
          getData([item.trackCode]);
          setValue(item.trackCode);
          handleChange();
        }}
        variant="text"
      >
        <Typography>{item.trackCode}</Typography>
      </Button>
      <IconButton
        onClick={() => dispatch(deleteTrackCodesData(item.trackCode))}
      >
        <ClearIcon />
      </IconButton>
    </>
  );
};

TrackCodesHistoryCard.propTypes = {
  getData: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TrackCodesHistoryCard;
