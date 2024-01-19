import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

import Forget from "./Forget";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const App: React.FC = (props) => {
  const [authIndex, setAuthIndex] = React.useState(0);

  const tabChange = (event: React.SyntheticEvent, tabValue: number): void => {
    event.preventDefault();
    setAuthIndex(tabValue);
  };
  const goToForget = () => {
    setAuthIndex(2);
  };
  const goToSignUp = () => {
    setAuthIndex(1);
  };
  const gobackToSignIn = () => {
    setAuthIndex(0);
  };
  if (authIndex === 2) {return <Forget {...{ ...props, gobackToSignIn }} />;}

  return (
    <>
      <Tabs
        variant="fullWidth"
        value={authIndex}
        onChange={tabChange}
        centered
        aria-label="auth tabs"
      >
        <Tab label="Login" tabIndex={0} />
        <Tab label="Register" tabIndex={1} />
      </Tabs>
      { authIndex === 0 ? <SignIn {...{ ...props, goToForget, goToSignUp }} /> : null}
      { authIndex === 1 ? <SignUp {...{ ...props }} /> : null}
    </>
  );
};
export default App;
