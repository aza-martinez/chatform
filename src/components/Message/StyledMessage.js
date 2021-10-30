import styled from "styled-components";

const StyledMessage = styled.div`
  display: ${(props) => (props.messageType === "form" ? "flex" : "block")};
  column-gap: 2rem;
  row-gap: 2rem;
  width: 100%;
`;

export default StyledMessage;
