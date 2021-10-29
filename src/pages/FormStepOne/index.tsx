import { useHistory } from "react-router-dom";
import { PageStructure } from "../../components/PageStructure";

import { Container, InputBlock } from "./styles";

export function FormStepOne() {
  const history = useHistory();

  function handleNextSlep() {
    history.push("/FormSlepTwo");
  }

  return (
    <PageStructure>
      <Container>
        <header>
          <span>Passo 1/3</span>
          <h1>Vamos começar com seu nome</h1>
        </header>
        <p>Preencha o campo abaixo com seu nome completo:</p>

        <InputBlock>
          <label htmlFor="name">Seu nome completo</label>
          <input id="name" type="text" autoFocus />
        </InputBlock>

        <button type="button" onClick={handleNextSlep}>
          Próximo
        </button>
      </Container>
    </PageStructure>
  );
}
