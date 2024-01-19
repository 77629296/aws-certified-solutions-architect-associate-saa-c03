import PersonIcon from "@mui/icons-material/AccountBoxOutlined";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import * as React from "react";

export interface NameFieldProps {
  name: { text: string; error: string };
  setName: (props: { text: string; error: string }) => void;
  textFieldVariant?: "outlined" | "filled" | "standard";
  loading: boolean;
}

const NameField: React.FC<NameFieldProps> = ({
  name,
  setName,
  textFieldVariant = "filled",
  loading,
}) => {
  return (
    <FormControl margin="none" fullWidth error={Boolean(name.error)}>
      <TextField
        placeholder={textFieldVariant === "outlined" ? "Name" : ""}
        label={textFieldVariant !== "outlined" && "Name"}
        error={Boolean(name.error)}
        variant={textFieldVariant}
        value={name.text}
        disabled={loading}
        onChange={(e) => {
          setName({ text: e.target.value, error: "" });
        }}
        type={"name"}
        InputProps={{
          startAdornment: textFieldVariant === "outlined" && (
            <InputAdornment position="start">
              <PersonIcon color={name.error ? "error" : "action"} />
            </InputAdornment>
          ),
        }}
      />
      <FormHelperText>{name.error || " "}</FormHelperText>
    </FormControl>
  );
};
export default React.memo(NameField);
