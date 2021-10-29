import { PageStructure } from "../../components/PageStructure";
import { ProgrammerLevel } from "../../components/ProgrammerLevel";
import { Container, ContainerButtons } from "./styles";

export function FormStepTwo() {
  return (
    <PageStructure>
      <Container>
        <header>
          <span>Passo 2/3</span>
          <h1>Qual é o seu nível de conhecimento ?</h1>
        </header>
        <p>Selecione uma opção abaixo:</p>
        <ContainerButtons>
          <ProgrammerLevel
            level="Sou iniciante"
            time="Comecei a programar há menos de 2 anos"
            icon="&#9924;"
            active={true}
          />
          <ProgrammerLevel
            level="Sou programador"
            time="Já programo há 2 anos ou mais"
            icon="&#9760;"
            active={false}
          />
        </ContainerButtons>
      </Container>
    </PageStructure>
  );
}
