import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaSearch } from 'react-icons/fa';
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
              <ImovelCard />
              <ImovelCard />
              <ImovelCard />
              <ImovelCard />
              <ImovelCard />
              <ImovelCard />
              <ImovelCard />
              <ImovelCard />
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
