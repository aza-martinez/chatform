import styled from "styled-components";

const StyledMessageList = styled.div`
  width: 100%;
  height: 100%;
  max-height: 450px;
  padding: 4rem 1.3rem 1.3rem 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 2.5rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray};
    border-radius: 1.6rem;
    margin-right: 0.1rem;
  }
`;

export default StyledMessageList;
