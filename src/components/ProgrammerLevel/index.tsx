import { ButtonHTMLAttributes } from 'react';
import { Container, Icon } from "./styles";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  level: string;
  time: string;
  icon: string;
  active: boolean;
};

export function ProgrammerLevel({
  active,
  level,
  time,
  icon,
  ...rest
}: Props) {
  return (
    <Container active={active} {...rest}>
      <Icon>{icon}</Icon>

      <section>
        <header>
          <h1>{level}</h1>
        </header>
        <p>{time}</p>
      </section>
    </Container>
  );
}
/*

   <BeginnerIcon>&</BeginnerIcon>
      <Advanced>;</Advanced>
*/
