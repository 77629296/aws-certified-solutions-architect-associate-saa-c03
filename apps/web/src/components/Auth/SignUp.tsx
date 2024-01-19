import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import * as React from "react";

import EmailField from "./Fields/EmailField";
import NameField from "./Fields/NameField";
import PasswordField from "./Fields/PasswordField";

export interface SignUpProps {
  handleSignUp?: (signUpVars: {
    name: string;
    email: string;
    password: string;
  }) => any;
  textFieldVariant?: "outlined" | "filled" | "standard";
}

const INITIAL = { text: "", error: "" };

const SignUp: React.FC<SignUpProps> = ({
  handleSignUp,
  textFieldVariant = "filled",
}) => {
  const [name, setName] = React.useState(INITIAL);
  const [email, setEmail] = React.useState(INITIAL);
  const [loading, setLoading] = React.useState(false);
  const [password, setPassword] = React.useState(INITIAL);

  const handleSubmit = React.useCallback(async () => {
    if (typeof handleSignUp !== "function") {handleSignUp = () => { };}

    setLoading(true);

    return handleSignUp({
      name: name.text,
      email: email.text,
      password: password.text,
    });
  }, []);

  return (
    <Box p={2}>
      <NameField {...{ name, setName, textFieldVariant, loading }} />
      <EmailField {...{ email, setEmail, textFieldVariant, loading }} />

      <PasswordField
        {...{ password, setPassword, textFieldVariant, loading }}
      />

      <FormControl margin="normal" fullWidth>
        <Button
          fullWidth
          size="large"
          variant="contained"
          onClick={handleSubmit}
        >
          Register
        </Button>
      </FormControl>
    </Box>
  );
};
export default SignUp;
