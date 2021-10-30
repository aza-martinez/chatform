import React from "react";
import StyledHeader from "./StyledHeader";
import ClipBoard from "../../assets/images/clipboard.png";
import StopWatch from "../../assets/images/stopwatch.png";

const ChatHeader = () => {
  return (
    <StyledHeader>
      <h1>Titulo de formulario</h1>
      <img src={ClipBoard} alt="Clipboard" />
      <p>
        <img src={StopWatch} alt="StopWatch" />
        En menos de 5 minutos
      </p>
    </StyledHeader>
  );
};

export default ChatHeader;
