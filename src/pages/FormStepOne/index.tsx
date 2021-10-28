import { ReactNode } from "react";
import {
  Container,
  Content,
  Header,
  Main,
  Aside,
  ContainerPages,
} from "./styles";

type Props = {
  children: ReactNode;
};

export function FormStepOne({ children }: Props) {
  return (
    <Container>
      <Content>
        <Header />
        <Main>
          <Aside></Aside>
          <ContainerPages>{children}</ContainerPages>
        </Main>
      </Content>
    </Container>
  );
}
