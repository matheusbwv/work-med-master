import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { removeRoom } from '../../../store/modules/register/registerRoom/actions';

import Header from '../../../components/Barside';
import DefaultLayout from '../../_layouts/default/index';
import {
  Container, List, Wrapper, Infor, MoreInfor, Part, Grid, Badge, Visible,
} from './styles';

import Edit from '../../../assets/editar.svg';
import Remove from '../../../assets/excluir.svg';

import api from '../../../services/api';

export function ListRoom() {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [rooms, setRoom] = useState([]);
  // const [date, setDate] = useState(new Date());

  // const dateFormatted = useMemo(
  //   () => format(date, "d 'de' MMMM", { locale: pt }),
  //   [date],
  // );

  useEffect(() => {
    async function loadRoom() {
      const response = await api.get('rooms');

      setRoom(response.data);
    }

    loadRoom();
  }, []);

  const handleToggleVisible = () => {
    setVisible(!visible);
  };

  const handleRemove = (room) => {
    dispatch(removeRoom(room));
  };

  return (
    <DefaultLayout>
      <Header />
      <Container>
        <h2>Listagem</h2>
        <span>Sala</span>
        <Wrapper>
          <Link to="/register/room"><button type="button">Cadastrar</button></Link>
          {rooms.map((room) => (
            <List>
              <Badge onClick={handleToggleVisible}>
                <Infor>
                  <li>🚀</li>
                  <li>{`SALA - ${room.number}`}</li>
                  <li>31/08/2002</li>
                  <li>
                    <Link to="/update/room"><img src={Edit} alt="Edit" /></Link>
                    <button onClick={() => handleRemove(room.id)} type="button"><img src={Remove} alt="Remove" /></button>
                  </li>
                </Infor>
              </Badge>
              <Visible visible={visible}>
                <MoreInfor>
                  <Grid>
                    <Part>
                      <h3>Informações</h3>
                    </Part>
                    <Part>
                      <strong>Número</strong>
                      <span>{room.number}</span>
                    </Part>
                    <Part>
                      <strong>Localização</strong>
                      <span>{`Sala ${room.number} no ${room.floor}`}</span>
                    </Part>
                  </Grid>
                  <Grid>
                    <Part>
                      <h3>Especificações</h3>
                    </Part>
                    <Part>
                      <strong>Descrição</strong>
                      <span>{room.name}</span>
                    </Part>
                  </Grid>
                </MoreInfor>
              </Visible>
            </List>
          ))}
        </Wrapper>
      </Container>
    </DefaultLayout>
  );
}
