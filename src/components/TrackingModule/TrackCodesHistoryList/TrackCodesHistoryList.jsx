import { memo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import PropTypes from "prop-types";

import {
  Typography,
  List,
  ListItem,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Zoom,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClearIcon from "@mui/icons-material/Clear";

import { selectTrackCodesData } from "/src/redux/slices/deliveryService/selectors";
import { clearTrackCodesData } from "/src/redux/slices/deliveryService/deliveryServiceSlice";
import TrackCodesHistoryCard from "/src/components/TrackingModule/TrackCodesHistoryCard/TrackCodesHistoryCard";

const TrackCodesHistoryList = ({ getData, setValue, isRendering }) => {
  const [expanded, setExpanded] = useState(false);
  const trackCodes = useSelector(selectTrackCodesData);
  const dispatch = useDispatch();

  const handleChange = () => setExpanded((state) => !state);

  const renderItem = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <List>
        {trackCodes.map((item, index) => {
          return (
            <ListItem key={index}>
              <TrackCodesHistoryCard
                item={item}
                getData={getData}
                setValue={setValue}
                handleChange={handleChange}
              />
            </ListItem>
          );
        })}
      </List>
      <IconButton onClick={() => dispatch(clearTrackCodesData())}>
        <ClearIcon />
      </IconButton>
    </Box>
  );

  return (
    <Zoom in={isRendering} timeout={500}>
      <Box
        sx={{
          mt: 1,
          maxWidth: [1, 1, 1 / 5],
          width: "100%",
          position: "absolute",
          right: 0,
        }}
      >
        <Accordion expanded={expanded} onChange={() => handleChange()}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                ml: 2,
              }}
            >
              Історя пошуку
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ minHeight: 175 }}>
            {renderItem}
          </AccordionDetails>
        </Accordion>
      </Box>
    </Zoom>
  );
};

TrackCodesHistoryList.propTypes = {
  getData: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  isRendering: PropTypes.bool.isRequired,
};

const TrackCodesHistoryListMemo = memo(TrackCodesHistoryList);
export default TrackCodesHistoryListMemo;
