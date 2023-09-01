import React from 'react';
import { Link } from 'react-router-dom';

import DefaultLayout from '../_layouts/default';

import Barside from '../../components/Barside';
import {
  Container, Title, Ficture, Item,
} from './styles';

import Image from '../../assets/img.svg';

function List() {
  return (
    <DefaultLayout>
      <Barside />
      <Container>
        <Title>
          <h2>Listar</h2>
          <span>Escolha qual item deseja listar</span>
        </Title>
        <Ficture>
          <img src={Image} alt="" />
        </Ficture>
        <Item>
          <form>
            <span>Listar</span>
            <strong>Medico</strong>
            <img src={Image} alt="" />

            <Link to="/list/doctor"><button type="submit">Começar</button></Link>
          </form>
          <form>
            <span>Listar</span>
            <strong>Paciente</strong>
            <img src={Image} alt="" />

            <Link to="/list/patient"><button type="submit">Começar</button></Link>
          </form>
          <form>
            <span>Listar</span>
            <strong>Sala</strong>
            <img src={Image} alt="" />

            <Link to="/list/room"><button type="submit">Começar</button></Link>
          </form>
          <form>
            <span>Listar</span>
            <strong>Cirurgia</strong>
            <img src={Image} alt="" />

            <Link to="/list/surgery"><button type="submit">Começar</button></Link>
          </form>
        </Item>
      </Container>
    </DefaultLayout>
  );
}

export default List;
