import { useGetDelivertStatusMutation } from "/src/redux/api/deliveryServiceApi";
import { useDispatch } from "react-redux";
import {
  setCurrentTrackCode,
  setCurrentCity,
  addTrackCodesData,
  deleteTrackCodesData,
} from "/src/redux/slices/deliveryService/deliveryServiceSlice";

import Form from "/src/components/Form/Form";
import { formTrackCodeSchema } from "/src/utils/schema/schemaValidation";
import { useEffect } from "react";

const TrackingPage = () => {
  const [getTrackData, { isSuccess, isLoading, data }] =
    useGetDelivertStatusMutation();

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

  return (
    <Form
      name="trackCode"
      plaaceHolder="Номер накладної"
      label="Відстежити"
      schema={formTrackCodeSchema}
      getData={getTrackData}
      resetForm={true}
    ></Form>
  );
};

export default TrackingPage;
