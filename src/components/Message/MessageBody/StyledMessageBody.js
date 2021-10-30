import styled from "styled-components";

const StyledMessageBody = styled.div`
  background-color: transparent;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 100%;
  &.message {
    background-color: ${({ theme }) => theme.colors.gray};
  }
  &.form {
    background-color: ${({ theme }) => theme.colors.gray};
  }
  &.information {
    width: 85%;
    float: right;
    background-color: ${({ theme }) => theme.colors.orchid};
  }
`;

export default StyledMessageBody;
