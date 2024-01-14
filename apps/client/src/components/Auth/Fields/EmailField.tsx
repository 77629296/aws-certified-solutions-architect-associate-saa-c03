import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/EmailOutlined";

export interface EmailFieldProps {
  email: { text: string; error: string };
  setEmail: (props: { text: string; error: string }) => void;
  textFieldVariant?: "outlined" | "filled" | "standard";
  loading: boolean;
}

const EmailField: React.FC<EmailFieldProps> = ({
  email,
  setEmail,
  textFieldVariant = "filled",
  loading,
}) => {
  return (
    <FormControl margin="none" fullWidth error={Boolean(email.error)}>
      <TextField
        placeholder={textFieldVariant === "outlined" ? "Email" : ""}
        label={textFieldVariant !== "outlined" && "Email"}
        error={Boolean(email.error)}
        variant={textFieldVariant}
        value={email.text}
        disabled={loading}
        onChange={(e) => {
          setEmail({ text: e.target.value, error: "" });
        }}
        type={"email"}
        InputProps={{
          startAdornment: textFieldVariant === "outlined" && (
            <InputAdornment position="start">
              <EmailIcon color={email.error ? "error" : "action"} />
            </InputAdornment>
          ),
        }}
      />
      <FormHelperText>{email.error || " "}</FormHelperText>
    </FormControl>
  );
};
export default React.memo(EmailField);
