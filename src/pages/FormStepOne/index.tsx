import { ChangeEvent, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { PageStructure } from "../../components/PageStructure";
import { Input } from "../../components/Input";
import { FormActions } from "../../context/FormContext";
import { useForm } from "../../hooks/useForm";

import { Container } from "./styles";
import "react-toastify/dist/ReactToastify.css";

export function FormStepOne() {
  const { state, dispatch } = useForm();
  const history = useHistory();

  function handleNextSlep() {
    if (state.name !== "") {
      history.push("/steptwo");
    } else {
      toast.error("Por favor, insira seu nome");
    }
  }

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  }

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, [dispatch]);

  return (
    <PageStructure>
      <ToastContainer />
      <Container>
        <header>
          <span>Passo 1/3</span>
          <h1>Vamos começar com seu nome</h1>
        </header>
        <p>Preencha o campo abaixo com seu nome completo:</p>

        <Input
          name="name"
          label="Seu nome completo"
          type="text"
          autoFocus
          onChange={handleOnChange}
          value={state.name}
        />

        <button type="button" onClick={handleNextSlep}>
          Próximo
        </button>
      </Container>
    </PageStructure>
  );
}
