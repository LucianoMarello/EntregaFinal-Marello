import React from "react";
import Login from "./Login";

const LoginContainer = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Login
        open={open}
        handleClick={handleClick}
        handleClose={handleClose}
        anchorEl={anchorEl}
      />
    </div>
  );
};

export default LoginContainer;
