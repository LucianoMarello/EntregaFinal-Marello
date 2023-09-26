import React, { useContext } from "react";
import Login from "./Login";
import Logged from "./Logged";
import { AuthContext } from "../../../context/AuthContext";

const LoginContainer = () => {
  const { logOut, isLogged, userName } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logOff = () => {
    handleClose();
    logOut();
  };
  return (
    <>
      {isLogged ? (
        <Logged
          open={open}
          handleClick={handleClick}
          handleClose={handleClose}
          anchorEl={anchorEl}
          logOff={logOff}
          userName={userName}
        />
      ) : (
        <Login
          open={open}
          handleClick={handleClick}
          handleClose={handleClose}
          anchorEl={anchorEl}
        />
      )}
    </>
  );
};

export default LoginContainer;
