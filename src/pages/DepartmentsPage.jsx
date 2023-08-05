import { useSelector } from "react-redux";

import Form from "/src/components/Form/Form";
import WareHouses from "/src/components/WareHouses/WareHouses";

import { useGetWareHousesMutation } from "/src/redux/api/deliveryServiceApi";
import { selectCurrentCity } from "/src/redux/slices/deliveryService/selectors";
import { formCitySchema } from "utils/schema/schemaValidation";
import { useEffect, useState } from "react";

const DepartmentsPage = () => {
  const [page, setPage] = useState(1);
  const [getWarhouses, { isSuccess, isLoading, data }] =
    useGetWareHousesMutation();

  const currentCity = useSelector(selectCurrentCity);

  useEffect(() => {
    page > 1 && getWarhouses({ city: currentCity, page });
  }, [currentCity, getWarhouses, page]);

  const renderItem = isSuccess && data.total > 0 && (
    <WareHouses
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
        value={currentCity}
        name="city"
        plaaceHolder="Місто"
        label="Знайти відділення"
        schema={formCitySchema}
        getData={getWarhouses}
        resetForm={false}
        isLoading={isLoading}
      />
      {renderItem}
      {renderNotFoundNotify}
    </>
  );
};

export default DepartmentsPage;
