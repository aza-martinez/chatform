import React, { useState } from "react";
import StyledFormInput from "./StyledFormInput";

const FormInput = (props) => {
  const [inputValue, setInputValue] = useState(
    sessionStorage.getItem(props.name)
  );

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <StyledFormInput
      type="text"
      value={inputValue}
      {...props}
      onChange={handleOnChange}
    />
  );
};

export default FormInput;
