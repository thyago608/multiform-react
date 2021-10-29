import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { PageStructure } from "../../components/PageStructure";
import { ProgrammerLevel } from "../../components/ProgrammerLevel";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "../../hooks/useForm";
import { FormActions } from "../../context/FormContext";
import "react-toastify/dist/ReactToastify.css";
import { Container, ContainerButtons } from "./styles";

export function FormStepTwo() {
  const { state, dispatch } = useForm();
  const [clicked, setClicked] = useState(false);
  const history = useHistory();

  function handleSetLevel(value: number) {
    dispatch({
      type: FormActions.setLevel,
      payload: value,
    });

    setClicked(true);
  }

  function handleNextSlep() {
    if (clicked) {
      history.push("/stepthree");
    } else {
      toast.error("Por favor, selecione um nível de programador");
    }
  }

  useEffect(() => {
    if (state.name === "") {
      history.push("/");
    }

    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    });
  }, [dispatch]);

  return (
    <PageStructure>
      <ToastContainer />
      <Container>
        <header>
          <span>Passo 2/3</span>
          <h1>{state.name}, qual é o seu nível de conhecimento ?</h1>
        </header>
        <p>Selecione uma opção abaixo:</p>
        <ContainerButtons>
          <ProgrammerLevel
            level="Sou iniciante"
            time="Comecei a programar há menos de 2 anos"
            icon="&#9924;"
            active={state.level === 0}
            onClick={() => handleSetLevel(0)}
          />
          <ProgrammerLevel
            level="Sou programador"
            time="Já programo há 2 anos ou mais"
            icon="&#9760;"
            active={state.level === 1}
            onClick={() => handleSetLevel(1)}
          />
        </ContainerButtons>

        <nav>
          <Link to="/">Voltar</Link>
          <button type="button" onClick={handleNextSlep}>
            Próximo
          </button>
        </nav>
      </Container>
    </PageStructure>
  );
}
