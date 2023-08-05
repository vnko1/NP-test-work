import { useGetDelivertStatusMutation } from "/src/redux/api/deliveryServiceApi";
// import { useDispatch } from "react-redux";
// import {
//   setCurrentTrackCode,
//   setCurrentCity,
//   addTrackCodesData,
//   deleteTweetId,
// } from "/src/redux/slices/deliveryService/deliveryServiceSlice";

import Form from "/src/components/Form/Form";
import { formTrackCodeSchema } from "/src/utils/schema/schemaValidation";

const TrackingPage = () => {
  const [getTrackData, response] = useGetDelivertStatusMutation();
  // console.log(response.data);
  // const dispatch = useDispatch();

  // // dispatch(setCurrentCity("Kiev"));
  // // dispatch(setCurrentTrackCode("1203981093810938s"));
  // // dispatch(addTrackCodesData({ trackCode: "asdakdjahkdhakd", city: "Kiev" }));

  console.log("response => ", response);
  return (
    <Form
      name="trackCode"
      plaaceHolder="Номер накладної"
      label="Відстежити"
      schema={formTrackCodeSchema}
      getData={getTrackData}
    ></Form>
  );
};

export default TrackingPage;
