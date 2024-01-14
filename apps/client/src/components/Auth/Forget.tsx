import * as React from "react";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import BackIcon from "@mui/icons-material/ArrowBackOutlined";
import EmailField from "./Fields/EmailField";

export interface ForgetProps {
  handleForget?: (forgetVars: { email: string }) => any;
  textFieldVariant?: "outlined" | "filled" | "standard";
}
interface NaviProps {
  gobackToSignIn: () => any;
}

const INITIAL = { text: "", error: "" };

const Forget: React.FC<ForgetProps & NaviProps> = ({
  gobackToSignIn,
  handleForget,
  textFieldVariant = "filled",
}) => {
  const [email, setEmail] = React.useState(INITIAL);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = React.useCallback(async () => {
    if (typeof handleForget !== "function") handleForget = () => {};
    setLoading(true);
    return handleForget({ email: email.text });
  }, []);
  return (
    <>
      <IconButton aria-label="go back" onClick={gobackToSignIn}>
        <BackIcon color="action" />
      </IconButton>
      <Box p={2} pb={6}>
        <Typography variant="h6" color="textSecondary" align="center">
          <b>Forget Your Password</b>
        </Typography>
        <br />
        <EmailField {...{ email, setEmail, textFieldVariant, loading }} />

        <FormControl margin="none" fullWidth>
          <Button
            onClick={handleSubmit}
            style={{ textTransform: "none" }}
            size="large"
            variant="contained"
            color="primary"
            fullWidth
          >
            Reset my Password
          </Button>
        </FormControl>
      </Box>
    </>
  );
};
export default Forget;
