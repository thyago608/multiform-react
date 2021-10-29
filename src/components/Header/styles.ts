import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.header`
  padding: 2rem;
  border-bottom: 1px solid ${transparentize(0.1, "#483D8B")};

  > h1 {
    font-size: 1.8rem;
  }

  > p {
    font-size: 0.9rem;
    color: #d5d5d5;
  }
`;
