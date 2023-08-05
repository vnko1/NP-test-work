import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "/src/components/Form/Form";
import DeliveryStatus from "/src/components/DeliveryStatus/DeliveryStatus";
import TrackCodesHistory from "/src/components/TrackCodesHistory/TrackCodesHistory";
import { useGetDelivertStatusMutation } from "/src/redux/api/deliveryServiceApi";
import {
  setCurrentTrackCode,
  setCurrentCity,
  addTrackCodesData,
} from "/src/redux/slices/deliveryService/deliveryServiceSlice";
import { selectCurrentTrackCode } from "redux/slices/deliveryService/selectors";
import { formTrackCodeSchema } from "/src/utils/schema/schemaValidation";

const TrackingPage = () => {
  const [getTrackData, { isSuccess, isLoading, data }] =
    useGetDelivertStatusMutation();

  const dispatch = useDispatch();

  const currentTrackCode = useSelector(selectCurrentTrackCode);

  useEffect(() => {
    if (isSuccess) {
      data.data.forEach((item) => {
        if (item.StatusCode !== "3") {
          dispatch(setCurrentCity(item.CityRecipient));
          dispatch(setCurrentTrackCode(item.Number));
          dispatch(
            addTrackCodesData({
              trackCode: item.Number,
              city: item.CityRecipient,
            })
          );
        }
      });
    }
  }, [data, dispatch, isSuccess]);

  const renderItem =
    isSuccess && data.data[0].StatusCode !== "3" ? (
      <DeliveryStatus documents={data.data} />
    ) : (
      <div>{data?.data[0].Status}</div>
    );

  return (
    <>
      <Form
        value={currentTrackCode}
        name="trackCode"
        plaaceHolder="Номер накладної"
        label="Відстежити"
        schema={formTrackCodeSchema}
        getData={getTrackData}
        resetForm={true}
        isLoading={isLoading}
      />
      {renderItem}
      <TrackCodesHistory getData={getTrackData} />
    </>
  );
};

export default TrackingPage;
