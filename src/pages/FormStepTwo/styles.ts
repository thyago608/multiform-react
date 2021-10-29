import styled from "styled-components";

export const Container = styled.div`
  > header {
    margin-bottom: 1rem;
  }

  > nav {
    display: flex;
    justify-content: space-between;

    button {
      border: 0;
      border-radius: 5px;
      height: 2rem;
      padding: 0 1rem;
      font-size: 0.9rem;
      color: var(--gray-100);
      background: var(--violet-300);
      transition: filter 0.2s ease;

      &:hover {
        filter: brightness(0.7);
      }
    }

    a {
      color: var(--gray-100);
    }
  }
`;

export const ContainerButtons = styled.div`
  margin: 4rem 0;
  display: flex;
  flex-direction: column;

  > button {
    flex: 1;

    & + button {
      margin-top: 1.5rem;
    }
  }
`;
