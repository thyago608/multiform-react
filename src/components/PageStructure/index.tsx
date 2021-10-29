import { ReactNode } from "react";
import { Header } from "../Header";
import LeftSidebar from "../SideBar";
import { Container, Content, Main, SideBar, ContainerPages } from "./styles";

type Props = {
  children: ReactNode;
};

export function PageStructure({ children }: Props) {
  return (
    <Container>
      <Content>
        <Header />
        <Main>
          <SideBar>
            <LeftSidebar/>
          </SideBar>
          <ContainerPages>{children}</ContainerPages>
        </Main>
      </Content>
    </Container>
  );
}
