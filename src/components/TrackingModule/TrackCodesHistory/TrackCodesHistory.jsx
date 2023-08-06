import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

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
      <h2>Історя</h2>
      <ul>
        {trackCodes.map((item) => {
          return (
            <li key={nanoid()}>
              <p>{item.trackCode}</p>
              <button
                type="button"
                onClick={() => {
                  getData([item.trackCode]);
                  setValue(item.trackCode);
                }}
              >
                search
              </button>
              <button
                type="button"
                onClick={() => dispatch(deleteTrackCodesData(item.trackCode))}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={() => dispatch(clearTrackCodesData())}>
        Clear
      </button>
    </>
  );
  return <>{renderItem}</>;
};

TrackCodesHistory.propTypes = {
  getData: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default TrackCodesHistory;
