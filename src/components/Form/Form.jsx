import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import PropTypes from "prop-types";

const Form = ({ value = "", name, plaaceHolder, label, schema, getData }) => {
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    await getData([data["trackCode"]]);
    reset();
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
        // loading
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
};

export default Form;
