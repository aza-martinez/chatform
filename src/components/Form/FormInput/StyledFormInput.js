import styled from "styled-components";

const StyledFormInput = styled.input`
  padding: 1rem;
  width: 100%;
  outline: none;
  border: 0.15rem solid ${({ theme }) => theme.colors.graySecondary};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.gray};
  margin: 0.45rem 0;
`;

export default StyledFormInput;
