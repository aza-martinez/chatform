import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.pink};
  border: 1px solid ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  text-align: center;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export default StyledButton;
