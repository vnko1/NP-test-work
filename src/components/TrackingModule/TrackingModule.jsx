import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Form from "/src/components/Shared/Form/Form";
import DeliveryStatus from "/src/components/TrackingModule/DeliveryStatus/DeliveryStatus";
import TrackCodesHistory from "/src/components/TrackingModule/TrackCodesHistory/TrackCodesHistory";

import { useGetDelivertStatusMutation } from "/src/redux/api/deliveryServiceApi";
import {
  setCurrentCity,
  addTrackCodesData,
} from "/src/redux/slices/deliveryService/deliveryServiceSlice";
import { trackCodeSchema } from "/src/utils/schema/schemaValidation";

const TrackingModule = () => {
  const [getTrackData, { isSuccess, isLoading, data }] =
    useGetDelivertStatusMutation();
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      data.data.forEach((item) => {
        if (item?.StatusCode !== "3") {
          dispatch(setCurrentCity(item.CityRecipient));
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

  const renderItem = isSuccess && data?.data[0]?.StatusCode !== "3" && (
    <DeliveryStatus documents={data.data} />
  );

  const renderNotFoundNotify = isSuccess &&
    data?.data[0]?.StatusCode === "3" && <div>Нічого не знайдено!</div>;

  return (
    <>
      <Form
        value={value}
        name="trackCode"
        plaaceHolder="Номер накладної"
        label="Відстежити"
        schema={trackCodeSchema}
        getData={getTrackData}
        isLoading={isLoading}
        setValue={setValue}
      />
      {renderItem}
      {renderNotFoundNotify}
      <TrackCodesHistory getData={getTrackData} setValue={setValue} />
    </>
  );
};

export default TrackingModule;
