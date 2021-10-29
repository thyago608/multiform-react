import { Container, Icon } from "./styles";

type Props = {
  level: string;
  time: string;
  icon: string;
  active: boolean;
};

export function ProgrammerLevel({ active, level, time, icon }: Props) {
  return (
    <Container active={active}>
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
