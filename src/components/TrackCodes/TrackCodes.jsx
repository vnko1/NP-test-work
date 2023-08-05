import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";

import { selectTrackCodesData } from "/src/redux/slices/deliveryService/selectors";
import { deleteTrackCodesData } from "/src/redux/slices/deliveryService/deliveryServiceSlice";

const TrackCodes = () => {
  const trackCodes = useSelector(selectTrackCodesData);
  const dispatch = useDispatch();

  const handleClickDeleteTrackCode = (trackCode) => {
    dispatch(deleteTrackCodesData(trackCode));
  };

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
                <button
                  type="button"
                  onClick={() => handleClickDeleteTrackCode(item.trackCode)}
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

export default TrackCodes;
