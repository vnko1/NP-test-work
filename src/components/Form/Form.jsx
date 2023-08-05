import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import PropTypes from "prop-types";

import { setCurrentCity } from "/src/redux/slices/deliveryService/deliveryServiceSlice";

const Form = ({
  value = "",
  name,
  plaaceHolder,
  label,
  schema,
  getData,
  resetForm,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    if (name === "trackCode") {
      const keys = Object.keys(data);
      const trackCodes = keys.map((item) => data[item]);
      await getData(trackCodes);
    }

    if (name === "city") {
      dispatch(setCurrentCity(data[name]));
      await getData({ city: data[name] });
    }

    resetForm && reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="outlined"
        label={label}
        defaultValue={value}
        error={!!errors[name]?.message}
        {...register(name)}
        fullWidth
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
  name: PropTypes.string.isRequired,
  plaaceHolder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  schema: PropTypes.object.isRequired,
  getData: PropTypes.func.isRequired,
  resetForm: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Form;
