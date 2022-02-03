import { FaHeart } from 'react-icons/fa';
import { Container, DescGroup, ImageGroup } from './styles';

interface Props {
  imovel: any;
}

export function ImovelCard(props: Props) {
  return (
    <Container>
      <ImageGroup>
        <FaHeart />
        <img
          src={`http://api.investmall.b2ml.com.br/${props.imovel.foto}`}
          alt="Foto do imóvel"
        />
      </ImageGroup>
      <DescGroup>
        <h3>{props.imovel.endereco.rua}</h3>
        <div>
          <p>
            {props.imovel.endereco.cidade}, {props.imovel.endereco.estado}
          </p>
          <p>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(
              props.imovel.valor +
                props.imovel.valor_condominio +
                props.imovel.valor_fundo_promo +
                props.imovel.valor_aluguel +
                props.imovel.iptu
            )}
          </p>
        </div>
      </DescGroup>
    </Container>
  );
}
