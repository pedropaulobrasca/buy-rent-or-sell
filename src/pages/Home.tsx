import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button<ButtonProps>`
  /* Adapt the colors based on primary prop */
  background: ${(props: any) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props: any) => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

export function Home() {
  return (
    <div>
      <Title>Hello World!</Title>
      <Button>Styled Components</Button>
      <Button primary>Styled Components</Button>
    </div>
  );
}
