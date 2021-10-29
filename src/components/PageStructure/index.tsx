import { ReactNode } from 'react';
import { Header } from "../Header";
import { Container, Content, Main, SideBar, ContainerPages } from "./styles";

type Props = {
  children: ReactNode;
};

export function PageStructure({children}:Props) {
  return (
    <Container>
      <Content>
        <Header />
        <Main>
          <SideBar></SideBar>
          <ContainerPages>{children}</ContainerPages>
        </Main>
      </Content>
    </Container>
  );
}
