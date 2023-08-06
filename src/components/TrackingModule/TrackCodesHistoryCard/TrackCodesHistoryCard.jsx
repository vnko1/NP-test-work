import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { Typography, Button, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

import { deleteTrackCodesData } from "/src/redux/slices/deliveryService/deliveryServiceSlice";

const TrackCodesHistoryCard = ({ item, getData, setValue }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Button
        onClick={() => {
          getData([item.trackCode]);
          setValue(item.trackCode);
        }}
        variant="text"
      >
        <Typography>{item.trackCode}</Typography>
      </Button>
      <IconButton
        onClick={() => dispatch(deleteTrackCodesData(item.trackCode))}
      >
        <RemoveIcon />
      </IconButton>
    </>
  );
};

TrackCodesHistoryCard.propTypes = {
  getData: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default TrackCodesHistoryCard;
