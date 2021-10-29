import styled from "styled-components";

export const Container = styled.div`
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
