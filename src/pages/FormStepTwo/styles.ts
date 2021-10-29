import styled from "styled-components";

export const Container = styled.div`
  > header {
    margin-bottom: 1rem;
  }
`;

export const ContainerButtons = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  > button {
    flex: 1;

    & + button {
      margin-top: 1.5rem;
    }
  }
`;
