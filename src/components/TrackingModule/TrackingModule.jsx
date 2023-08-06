import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Form from "/src/components/Shared/Form/Form";
import DeliveryStatusList from "/src/components/TrackingModule/DeliveryStatusList/DeliveryStatusList";
import TrackCodesHistoryListMemo from "/src/components/TrackingModule/TrackCodesHistoryList/TrackCodesHistoryList";
import Loader from "/src/components/Shared/Loader/Loader";
import NotFoundData from "/src/components/Shared/NotFoundData/NotFoundData";

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
    <DeliveryStatusList documents={data.data} isSuccess={isSuccess} />
  );

  const renderNotFoundNotify = isSuccess &&
    data?.data[0]?.StatusCode === "3" && <NotFoundData />;

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
        setStateValue={setValue}
        text="Відстежити відправлення"
      />
      <TrackCodesHistoryListMemo getData={getTrackData} setValue={setValue} />
      {renderItem}
      {renderNotFoundNotify}
      <Loader isLoading={isLoading} />
    </>
  );
};

export default TrackingModule;
