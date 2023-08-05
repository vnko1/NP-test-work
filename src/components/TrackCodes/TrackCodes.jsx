import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import { selectTrackCodesData } from "/src/redux/slices/deliveryService/selectors";
import { deleteTrackCodesData } from "/src/redux/slices/deliveryService/deliveryServiceSlice";

const TrackCodes = ({ getData }) => {
  const trackCodes = useSelector(selectTrackCodesData);

  const dispatch = useDispatch();

  const renderItem = trackCodes.length > 0;
  return (
    <>
      <h2>Історя</h2>
      {renderItem && (
        <ul>
          {trackCodes.map((item) => {
            return (
              <li key={nanoid()}>
                <p>{item.trackCode}</p>
                <button type="button" onClick={() => getData([item.trackCode])}>
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
      )}
    </>
  );
};

TrackCodes.propTypes = { getData: PropTypes.func.isRequired };

export default TrackCodes;
