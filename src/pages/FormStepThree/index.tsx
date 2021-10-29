import { ChangeEvent, useEffect, useState } from "react";
import { PageStructure } from "../../components/PageStructure";
import { ToastContainer, toast } from "react-toastify";
import { FormActions } from "../../context/FormContext";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { Input } from "../../components/Input";
import "react-toastify/dist/ReactToastify.css";
import { Container, ContainerInput } from "./styles";

export function FormStepThree() {
  const { state, dispatch } = useForm();
  const history = useHistory();

  function handleChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  }

  function handleChangeGithub(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  }

  function handleNextSlep() {
    if (state.email && state.github) {
      const toastRef = toast.loading(
        "Cadastrando as informações no sistema..",
        {
          isLoading: true,
          type: "default",
        }
      );

      setTimeout(() => {
        toast.update(toastRef, {
          isLoading: false,
          type: "success",
          render: "Informação cadastrada com sucesso",
        });
      }, 3000);
    }
  }

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3,
    });
  }, [dispatch]);

  if (state.name === "") {
    history.push("/");
  }

  return (
    <PageStructure>
      <ToastContainer theme="colored" />
      <Container>
        <header>
          <span>Passo 3/3</span>
          <h1>Legal {state.name}, onde te achamos ?</h1>
        </header>
        <p>
          Preencha com seus dados para conseguirmos entrar em contato com você
        </p>

        <ContainerInput>
          <Input
            name="email"
            type="email"
            label="Qual é o seu email ?"
            onChange={handleChangeEmail}
            value={state.email}
          />
          <Input
            name="url"
            type="github"
            label="Qual é o seu github ?"
            onChange={handleChangeGithub}
            value={state.github}
          />
        </ContainerInput>

        <nav>
          <Link to="/steptwo">Voltar</Link>
          <button type="button" onClick={handleNextSlep}>
            Finalizar Cadastro
          </button>
        </nav>
      </Container>
    </PageStructure>
  );
}
