import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import PropTypes from "prop-types";

import { setCurrentCity } from "/src/redux/slices/deliveryService/deliveryServiceSlice";

const Form = ({
  value,
  setValue,
  name,
  plaaceHolder,
  label,
  schema,
  getData,
  isLoading,
  setPage,
}) => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    isLoading && clearErrors();
  }, [clearErrors, isLoading]);

  const onSubmit = async (data) => {
    if (name === "trackCode") {
      const keys = Object.keys(data);
      const trackCodes = keys.map((item) => data[item]);
      getData(trackCodes);
    }

    if (name === "city") {
      dispatch(setCurrentCity(data[name]));
      getData({ city: data[name], page: 1 });
      setPage(1);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="outlined"
        label={label}
        value={value}
        error={!!errors[name]?.message}
        fullWidth
        {...register(name, {
          ...schema,
          onChange: (e) => {
            setValue(e.target.value);
          },
        })}
        helperText={errors[name]?.message}
        placeholder={plaaceHolder}
        sx={{
          input: {
            color: "black",
            backgroundColor: "white",
          },
        }}
      />
      <LoadingButton
        loading={isLoading}
        variant="contained"
        fullWidth
        type="submit"
        disableRipple
      >
        Пошук
      </LoadingButton>
    </form>
  );
};

Form.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  setPage: PropTypes.func,
  name: PropTypes.string.isRequired,
  plaaceHolder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  schema: PropTypes.object.isRequired,
  getData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Form;
