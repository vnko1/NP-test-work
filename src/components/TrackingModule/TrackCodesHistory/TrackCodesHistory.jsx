import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import { TransitionGroup } from "react-transition-group";
import {
  Typography,
  Zoom,
  List,
  ListItem,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearAllIcon from "@mui/icons-material/ClearAll";

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
      <List
        sx={{
          maxWidth: 1,
          mx: "auto",
        }}
      >
        <TransitionGroup>
          {trackCodes.map((item) => {
            return (
              <Zoom timeout={700} key={nanoid()}>
                <ListItem
                  sx={{
                    mx: "auto",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
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
                    onClick={() =>
                      dispatch(deleteTrackCodesData(item.trackCode))
                    }
                  >
                    <RemoveIcon />
                  </IconButton>
                </ListItem>
              </Zoom>
            );
          })}
        </TransitionGroup>
      </List>
      <IconButton onClick={() => dispatch(clearTrackCodesData())}>
        <ClearAllIcon />
      </IconButton>
    </>
  );
  return (
    <Box
      sx={{
        maxHeight: 190,
        minHeight: 190,
        textAlign: "center",
        pt: 2,
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <Typography variant="h1">Історя пошуку</Typography>
      {renderItem}
    </Box>
  );
};

TrackCodesHistory.propTypes = {
  getData: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

const TrackCodesHistoryMemo = memo(TrackCodesHistory);
export default TrackCodesHistoryMemo;
