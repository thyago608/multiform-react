import styled from "styled-components";
import { transparentize } from "polished";

type Props = {
  active: boolean;
};

export const Container = styled.nav`
  height: 100%;
`;

export const Icon = styled.span`
  font-size: 1.5rem;
  display: inline-block;
  margin-right: 2rem;
`;

export const Option = styled.div<Props>`
  padding: 1rem;
  position: relative;

  a {
    width: 100%;
    font-size: 1rem;
    color: var(--gray-100);
    font-weight: 100;

    display: flex;
    justify-content: space-between;

    color: ${({ active }) =>
      active ? transparentize(0.3, "#2ecc71") : "#696969"};
  }

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;

    border: 2px solid ${({ active }) => (active ? "#2ecc71" : "#FFFFFF")};
    position: absolute;
    right: -6px;
    top: 30px;
    background: ${({ active }) => (active ? "#2ecc71" : "transparent")};
  }
`;
