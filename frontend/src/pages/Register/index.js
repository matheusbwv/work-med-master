import React from 'react';
import { Link } from 'react-router-dom';

import DefaultLayout from '../_layouts/default';

import Barside from '../../components/Barside';
import {
  Container, Title, Ficture, Item,
} from './styles';

import Image from '../../assets/img.svg';

export default function Register() {
  return (
    <DefaultLayout>
      <Barside />
      <Container>
        <Title>
          <h2>Cadastrar</h2>
          <span>Escolha qual item deseja cadastrar</span>
        </Title>
        <Ficture>
          <img src={Image} alt="" />
        </Ficture>
        <Item>
          <form>
            <span>Cadastrar</span>
            <strong>Medico</strong>
            <img src={Image} alt="" />

            <Link to="/register/doctor"><button type="submit">Começar</button></Link>
          </form>
          <form>
            <span>Cadastrar</span>
            <strong>Paciente</strong>
            <img src={Image} alt="" />

            <Link to="/register/patient"><button type="submit">Começar</button></Link>
          </form>
          <form>
            <span>Cadastrar</span>
            <strong>Sala</strong>
            <img src={Image} alt="" />

            <Link to="/register/room"><button type="submit">Começar</button></Link>
          </form>
          <form>
            <span>Cadastrar</span>
            <strong>Cirurgia</strong>
            <img src={Image} alt="" />

            <Link to="/register/surgery"><button type="submit">Começar</button></Link>
          </form>
        </Item>
      </Container>
    </DefaultLayout>
  );
}
