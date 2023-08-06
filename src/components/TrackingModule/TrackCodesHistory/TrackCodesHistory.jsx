import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import {
  Typography,
  List,
  ListItem,
  Button,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { selectTrackCodesData } from "/src/redux/slices/deliveryService/selectors";
import {
  deleteTrackCodesData,
  clearTrackCodesData,
} from "/src/redux/slices/deliveryService/deliveryServiceSlice";

const TrackCodesHistory = ({ getData, setValue }) => {
  const trackCodes = useSelector(selectTrackCodesData);

  const dispatch = useDispatch();

  const renderItem = trackCodes.length > 0 && (
    <>
      <List>
        {trackCodes.map((item) => {
          return (
            <ListItem key={nanoid()}>
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
            </ListItem>
          );
        })}
      </List>
      <IconButton
        sx={{ mx: "auto" }}
        onClick={() => dispatch(clearTrackCodesData())}
      >
        <ClearAllIcon />
      </IconButton>
    </>
  );

  return (
    <Accordion sx={{ mt: 1 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Історя пошуку</Typography>
      </AccordionSummary>
      <AccordionDetails>{renderItem}</AccordionDetails>
    </Accordion>
  );
};

TrackCodesHistory.propTypes = {
  getData: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

const TrackCodesHistoryMemo = memo(TrackCodesHistory);
export default TrackCodesHistoryMemo;
