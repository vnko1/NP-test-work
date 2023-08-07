import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import PropTypes from "prop-types";

const Form = ({
  value,
  setStateValue,
  name,
  plaaceHolder,
  label,
  schema,
  getData,
  isLoading,
  setPage,
  text,
}) => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    isLoading && clearErrors();
  }, [clearErrors, isLoading]);

  const onSubmit = async (data) => {
    if (name === "trackCode") getData([value]);

    if (name === "city") {
      getData({ city: data[name], page: 1 });
      setPage(1);
    }
  };

  const isDisabled = isLoading || !!errors[name]?.message || !value.length;

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
          onChange: (e) => setStateValue(e.target.value),
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
      <Button
        disabled={isDisabled}
        variant="contained"
        fullWidth
        type="submit"
        disableRipple
      >
        {text}
      </Button>
    </form>
  );
};

Form.propTypes = {
  value: PropTypes.string,
  setStateValue: PropTypes.func.isRequired,
  setPage: PropTypes.func,
  name: PropTypes.string.isRequired,
  plaaceHolder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  schema: PropTypes.object.isRequired,
  getData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Form;
