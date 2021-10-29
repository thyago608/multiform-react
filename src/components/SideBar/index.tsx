import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { Container, Icon, Option } from "./styles";

export default function SideBar() {
  const { state } = useForm();

  console.log(state);

  return (
    <Container>
      <Option active={state.currentStep === 1}>
        <Link to="/">
          <div>
            <h1>Pessoal</h1>
            <span>Se identifique</span>
          </div>
          <Icon>&#9786;</Icon>
        </Link>
      </Option>

      <Option active={state.currentStep === 2}>
        <Link to="/steptwo">
          <div>
            <h1>Profissional</h1>
            <span>Seu nível</span>
          </div>
          <Icon>&#9749;</Icon>
        </Link>
      </Option>
      <Option active={state.currentStep === 3}>
        <Link to="/stepthree">
          <div>
            <h1>Contatos</h1>
            <span>Como te achar</span>
          </div>
          <Icon>&#9993;</Icon>
        </Link>
      </Option>
    </Container>
  );
}
