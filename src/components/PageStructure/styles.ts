import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.div`
  min-height: 100vh;
`;
export const Content = styled.div`
  max-width: 980px;
  min-height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;

  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const SideBar = styled.aside`
  width: 250px;
  border-right: 1px solid ${transparentize(0.5, "#3D3C42")};

  @media (max-width: 800px) {
    width: 90%;
    margin: 0 auto;
    border-left: 1px solid ${transparentize(0.5, "#3D3C42")};
    border-bottom: 1px solid ${transparentize(0.5, "#3D3C42")};
  }
`;

export const ContainerPages = styled.section`
  flex: 1;

  padding: 2rem;
`;
