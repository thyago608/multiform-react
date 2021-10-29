import { InputHTMLAttributes } from "react";
import { Container } from './styles';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

export function Input({ name, label, ...rest }: Props) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest} />
    </Container>
  );
}

//Seu nome completo
