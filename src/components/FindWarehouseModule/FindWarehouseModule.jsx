import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Form from "/src/components/Shared/Form/Form";
import WarehousesList from "/src/components/FindWarehouseModule/WarehousesList/WarehousesList";
import Loader from "/src/components/Shared/Loader/Loader";
import NotFoundData from "/src/components/Shared/NotFoundData/NotFoundData";

import { useGetWareHousesMutation } from "/src/redux/api/deliveryServiceApi";
import { selectCurrentCity } from "/src/redux/slices/deliveryService/selectors";
import { сitySchema } from "/src/utils/schema/schemaValidation";

const FindWarehouseModule = () => {
  const currentCity = useSelector(selectCurrentCity);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState(currentCity);

  const [getWarhouses, { isSuccess, isLoading, data }] =
    useGetWareHousesMutation();

  useEffect(() => {
    page > 1 && getWarhouses({ city: currentCity, page });
  }, [currentCity, getWarhouses, page]);

  const renderItem = isSuccess && data.total > 0 && (
    <WarehousesList
      documents={data.data}
      total={data.total}
      getData={getWarhouses}
      setPage={setPage}
      page={page}
      isSuccess={isSuccess}
    />
  );

  const renderNotFoundNotify = isSuccess && data.total < 1 && <NotFoundData />;

  return (
    <>
      <Form
        value={value}
        name="city"
        plaaceHolder="Місто"
        label="Знайти відділення"
        schema={сitySchema}
        getData={getWarhouses}
        setStateValue={setValue}
        isLoading={isLoading}
        setPage={setPage}
        text="Знайти відділення"
      />
      {renderItem}
      {renderNotFoundNotify}
      <Loader isLoading={isLoading} />
    </>
  );
};

export default FindWarehouseModule;
