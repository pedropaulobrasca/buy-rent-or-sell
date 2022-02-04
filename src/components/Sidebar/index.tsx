import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaSearch } from 'react-icons/fa';
import axios from 'axios';

import { ImovelCard } from '../ImovelCard';
import {
  Button,
  Container,
  ImovelCards,
  Input,
  Label,
  SearchGroup,
  Wrapper,
} from './styles';

export function Sidebar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  // Buscando os imóveis na API
  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    async function loadImoveis() {
      const response = await axios.get(`${import.meta.env.VITE_API_URI}/imovel`);
      setImoveis(response.data.data);
    }

    loadImoveis();
  }, []);

  return (
    <Container>
      {isOpenMenu && (
        <>
          <Wrapper>
            <SearchGroup>
              <Label htmlFor="">Endereço</Label>
              <Input>
                <input type="text" placeholder="Digite o endereço" />
                <FaSearch size={20} />
              </Input>
              <p>Imóveis encontrados: 8</p>
            </SearchGroup>
            <ImovelCards>
              {imoveis.map((imovel: any) => (
                <ImovelCard key={imovel.id} imovel={imovel} />
              ))}
            </ImovelCards>
          </Wrapper>
          <Button open={false} onClick={handleMenu}>
            <FaChevronLeft />
          </Button>
        </>
      )}
      {!isOpenMenu && (
        <Button open={true} onClick={handleMenu}>
          <FaChevronRight />
        </Button>
      )}
    </Container>
  );
}
