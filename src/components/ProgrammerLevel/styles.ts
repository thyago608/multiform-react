import styled from "styled-components";

type Props = {
  active: boolean;
};

export const Container = styled.button<Props>`
  padding: 1rem;
  border: 0;
  border-radius: 5px;
  background: ${({ active }) => (active ? "#27ae60" : "#3D3C42")};
  color: #ffffff;
  display: flex;

  > section {
    margin-left: 1.5rem;

    text-align: left;
    h1 {
      font-size: 1.45rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

export const Icon = styled.span`
  display: block;
  font-size: 2.2rem;

  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: #dcdcdc;
  color: var(--gray-700);
`;
