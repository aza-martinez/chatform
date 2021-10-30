import React, { useContext, useEffect } from "react";
import Message from "../Message";
import FormInput from "../Form/FormInput";
import useFullName from "../../hooks/useFullName";
import MessageContext from "../../context/MessageContext";

const MessageFormName = () => {
  const { fullName } = useFullName();
  const { setStep } = useContext(MessageContext);

  useEffect(() => {
    if (fullName()) {
      setStep(2);
    }
  }, []);

  const handleOnBlur = (event) => {
    sessionStorage.setItem(event.target.name, event.target.value);
    if (fullName()) {
      setStep(2);
    }
  };

  return (
    <Message title="¿Cuál es tu nombre?" messageType="form">
      <FormInput placeholder="Nombre" name="name" onBlur={handleOnBlur} />
      <FormInput
        placeholder="Segundo nombre"
        name="middleName"
        onBlur={handleOnBlur}
      />
      <FormInput
        placeholder="Apellido paterno"
        name="paternalSurname"
        onBlur={handleOnBlur}
      />
      <FormInput
        placeholder="ApellidoMaterno"
        name="maternalSurname"
        onBlur={handleOnBlur}
      />
    </Message>
  );
};

export default MessageFormName;
