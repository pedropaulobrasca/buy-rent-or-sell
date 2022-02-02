import { FaHeart } from 'react-icons/fa';
import { Container, DescGroup, ImageGroup } from './styles';

export function ImovelCard() {
  return (
    <Container>
      <ImageGroup>
        <FaHeart />
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt="Imovel"
        />
      </ImageGroup>
      <DescGroup>
        <h3>Rua Professor Adalberto Lopes Filho Bla bla bla</h3>
        <div>
          <p>Taubaté, SP</p>
          <p>R$ 1.000,00</p>
        </div>
      </DescGroup>
    </Container>
  );
}
