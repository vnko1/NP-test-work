import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box } from "@mui/material";
import toast from "react-hot-toast";

import Form from "/src/components/Shared/Form/Form";
import DeliveryStatusList from "/src/components/TrackingModule/DeliveryStatusList/DeliveryStatusList";
import TrackCodesHistoryListMemo from "/src/components/TrackingModule/TrackCodesHistoryList/TrackCodesHistoryList";
import Loader from "/src/components/Shared/Loader/Loader";
import NotFoundData from "/src/components/Shared/NotFoundData/NotFoundData";
import ErrorNotify from "/src/components/Shared/ErrorNotify/ErrorNotify";

import { useGetDelivertStatusMutation } from "/src/redux/api/deliveryServiceApi";
import { selectTrackCodesData } from "/src/redux/slices/deliveryService/selectors";
import {
  setCurrentCity,
  addTrackCodesData,
} from "/src/redux/slices/deliveryService/deliveryServiceSlice";
import { trackCodeSchema } from "/src/utils/schema/schemaValidation";
import { customErrorMsg } from "/src/constants/constants";

const TrackingModule = () => {
  const [getTrackData, { isSuccess, isLoading, data, isError }] =
    useGetDelivertStatusMutation();
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const trackCodes = useSelector(selectTrackCodesData);

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

  useEffect(() => {
    if (data && !data.success) toast.error(data.errors[0]);
    isError && toast.error(customErrorMsg);
  }, [data, isError]);

  const renderItem = isSuccess && data?.data[0]?.StatusCode !== "3" && (
    <DeliveryStatusList documents={data.data} isSuccess={isSuccess} />
  );

  const renderHistory = trackCodes.length > 0 && (
    <TrackCodesHistoryListMemo
      getData={getTrackData}
      setValue={setValue}
      isRendering={trackCodes.length > 0}
    />
  );

  const renderNotFoundNotify = isSuccess &&
    data?.data[0]?.StatusCode === "3" && <NotFoundData />;

  return (
    <Box sx={{ position: "relative" }}>
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
      {renderHistory}
      {renderItem}
      {renderNotFoundNotify}
      <Loader isLoading={isLoading} />
      <ErrorNotify />
    </Box>
  );
};

export default TrackingModule;
