import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from '@mui/icons-material/Google';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import * as React from "react";

import EmailField from "./Fields/EmailField";
import PasswordField from "./Fields/PasswordField";

type InitialType = { text: string; error: string };

export interface SignInProps {
  handleSignIn?: (signInVars: { email: string; password: string }) => any;
  textFieldVariant?: "outlined" | "filled" | "standard";
}
interface NaviProps {
  goToForget: () => any;
}

const INITIAL: InitialType = { text: "", error: "" };

const SignIn: React.FC<SignInProps & NaviProps> = ({
  goToForget,
  handleSignIn,
  textFieldVariant = "filled",
}) => {
  const [email, setEmail] = React.useState<InitialType>(INITIAL);
  const [password, setPassword] = React.useState(INITIAL);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = React.useCallback(async () => {
    setLoading(true);
    if (typeof handleSignIn !== "function") {handleSignIn = () => { };}
    await handleSignIn({ email: email.text, password: password.text });
    setLoading(false);
  }, [email, password]);

  return (
    <Box p={2}>
      <EmailField {...{ email, setEmail, textFieldVariant, loading }} />
      <PasswordField
        {...{ password, setPassword, textFieldVariant, loading }}
      />
      <Typography
        variant="body2"
        color="textSecondary"
        align="right"
        style={{ cursor: "pointer" }}
        onClick={goToForget}
      >
        Forget Password?
      </Typography>

      <FormControl margin="normal" fullWidth>
        <Button
          fullWidth
          size="large"
          variant="contained"
          disabled={loading}
          onClick={handleSubmit}
        >
          Sign In
        </Button>
      </FormControl>

      <Typography variant="subtitle2" color="textSecondary" align="center">
        or continue with
      </Typography>
      <Box display="flex" justifyContent="center">
        <IconButton>
          <GitHubIcon />
        </IconButton>
        <IconButton>
          <GoogleIcon />
        </IconButton>
      </Box>
    </Box >
  );
};
export default SignIn;
