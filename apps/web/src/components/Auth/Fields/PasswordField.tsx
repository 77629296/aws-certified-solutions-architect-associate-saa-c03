import LockIcon from "@mui/icons-material/LockOpen";
import ShownPasswordIcon from "@mui/icons-material/VisibilityOffOutlined";
import HiddenPasswordIcon from "@mui/icons-material/VisibilityOutlined";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import * as React from "react";

export interface PasswordFieldProps {
  password: { text: string; error: string };
  setPassword: (props: { text: string; error: string }) => void;
  textFieldVariant?: "outlined" | "filled" | "standard";
  loading: boolean;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  password,
  setPassword,
  textFieldVariant = "filled",
  loading,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const tooglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl margin="none" fullWidth error={Boolean(password.error)}>
      <TextField
        placeholder={textFieldVariant === "outlined" ? "Password" : ""}
        label={textFieldVariant !== "outlined" && "Password"}
        error={Boolean(password.error)}
        variant={textFieldVariant}
        value={password.text}
        disabled={loading}
        onChange={(e) => {
          setPassword({ text: e.target.value, error: "" });
        }}
        type={!showPassword ? "password" : "text"}
        InputProps={{
          startAdornment: textFieldVariant === "outlined" && (
            <InputAdornment position="start">
              <LockIcon color={password.error ? "error" : "action"} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password" onClick={tooglePassword}>
                {React.createElement(
                  !showPassword ? ShownPasswordIcon : HiddenPasswordIcon,
                  {
                    color: password.error ? "error" : "action",
                  }
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <FormHelperText>{password.error || " "}</FormHelperText>
    </FormControl>
  );
};
export default React.memo(PasswordField);
