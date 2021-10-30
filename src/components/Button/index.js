import React from "react";
import PropTypes from "prop-types";
import StyledButton from "./StyledButton";

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

Button.propTypes = {};

export default Button;
