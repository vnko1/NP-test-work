import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetDelivertStatusMutation } from "/src/redux/api/deliveryServiceApi";
import {
  setCurrentTrackCode,
  setCurrentCity,
  addTrackCodesData,
} from "/src/redux/slices/deliveryService/deliveryServiceSlice";

import Form from "/src/components/Form/Form";
import DeliveryStatus from "/src/components/DeliveryStatus/DeliveryStatus";
import TrackCodes from "/src/components/TrackCodes/TrackCodes";
import { formTrackCodeSchema } from "/src/utils/schema/schemaValidation";

const TrackingPage = () => {
  // isLoading,
  const [getTrackData, { isSuccess, data }] = useGetDelivertStatusMutation();
  const dispatch = useDispatch();

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

  const renderItem = isSuccess && data.data[0].StatusCode !== "3";

  return (
    <>
      <Form
        name="trackCode"
        plaaceHolder="Номер накладної"
        label="Відстежити"
        schema={formTrackCodeSchema}
        getData={getTrackData}
        resetForm={true}
      />
      {renderItem && <DeliveryStatus documents={data.data} />}
      <TrackCodes />
    </>
  );
};

export default TrackingPage;
