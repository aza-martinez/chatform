import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.orchid};
  width: 100%;
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr auto;
  font-size: 1.6rem;

  h1 {
    font-size: 1.8rem;
  }

  p img {
    margin-right: 0.8rem;
  }
`;

export default StyledHeader;
