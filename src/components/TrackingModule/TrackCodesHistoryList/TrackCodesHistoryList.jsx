import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import {
  Typography,
  List,
  ListItem,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ClearAllIcon from "@mui/icons-material/ClearAll";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { selectTrackCodesData } from "/src/redux/slices/deliveryService/selectors";
import { clearTrackCodesData } from "/src/redux/slices/deliveryService/deliveryServiceSlice";
import TrackCodesHistoryCard from "/src/components/TrackingModule/TrackCodesHistoryCard/TrackCodesHistoryCard";

const TrackCodesHistoryList = ({ getData, setValue }) => {
  const trackCodes = useSelector(selectTrackCodesData);

  const dispatch = useDispatch();

  const renderItem = trackCodes.length > 0 && (
    <>
      <List>
        {trackCodes.map((item) => {
          return (
            <ListItem key={nanoid()}>
              <TrackCodesHistoryCard
                item={item}
                getData={getData}
                setValue={setValue}
              />
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

TrackCodesHistoryList.propTypes = {
  getData: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

const TrackCodesHistoryListMemo = memo(TrackCodesHistoryList);
export default TrackCodesHistoryListMemo;
