import styled from "styled-components";

export const Container = styled.div`
  > header {
    margin-bottom: 1rem;
  }

  > button {
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
`;

export const InputBlock = styled.div`
  margin: 1rem 0 4rem;

  display: flex;
  padding: 1rem 0;
  align-items: center;

  > label {
    margin-right: 0.5rem;
  }

  > input {
    flex: 1;
    font-size: 1rem;
    height: 2.5rem;
    padding: 1rem;
    font-weight: 100;
    border: 2px solid transparent;
    border-radius: 1rem;
    outline: transparent;
    color: #ffffff;
    background: #4f4f4f;

    &:focus {
      border-color: #3cb371;
    }
  }
`;
