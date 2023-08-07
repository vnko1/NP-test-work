import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";
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
    getValues,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({});

  useEffect(() => {
    setValue(name, value);
    if (value.length === 14) trigger();
  }, [name, setValue, trigger, value]);

  const onChange = (e) => {
    setStateValue(e.target.value);
    setValue(name, e.target.value);
  };

  const onClick = async () => {
    const res = await trigger();

    if (res && name === "trackCode") getData([getValues(name)]);

    if (res && name === "city") {
      getData({ city: getValues(name), page: 1 });
      setPage(1);
    }
  };

  return (
    <Box>
      <TextField
        id="outlined"
        label={label}
        value={value}
        error={!!errors[name]?.message}
        fullWidth
        {...register(name, {
          ...schema,
          onChange,
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
        disabled={isLoading}
        variant="contained"
        fullWidth
        type="button"
        disableRipple
        onClick={onClick}
      >
        {text}
      </Button>
    </Box>
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
