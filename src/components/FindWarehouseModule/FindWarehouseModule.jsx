import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Form from "/src/components/Shared/Form/Form";
import Warehouses from "/src/components/FindwareHouseModule/Warehouses/Warehouses";

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
    <Warehouses
      documents={data.data}
      total={data.total}
      getData={getWarhouses}
      setPage={setPage}
      page={page}
    />
  );

  const renderNotFoundNotify = isSuccess && data.total < 1 && (
    <p>Нічого не знайдено</p>
  );

  return (
    <>
      <Form
        value={value}
        name="city"
        plaaceHolder="Місто"
        label="Знайти відділення"
        schema={сitySchema}
        getData={getWarhouses}
        setValue={setValue}
        isLoading={isLoading}
        setPage={setPage}
      />
      {renderItem}
      {renderNotFoundNotify}
    </>
  );
};

export default FindWarehouseModule;
