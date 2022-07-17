import React from "react";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export default function InputAdornments() {
  const [values, setValues] = React.useState(false);

  return (
    <OutlinedInput
      type={values ? "text" : "password"}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => {
              setValues(!values);
            }}
            edge="end"
          >
            {values ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      }
      labelWidth={40}
    />
  );
}
