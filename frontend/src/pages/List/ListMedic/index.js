import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeMedic } from '../../../store/modules/register/registerMedic/actions';

import Header from '../../../components/Barside';
import DefaultLayout from '../../_layouts/default/index';
import {
  Container, List, Wrapper, Infor, MoreInfor, Part, Grid, Badge, Visible,
} from './styles';

import Edit from '../../../assets/editar.svg';
import Remove from '../../../assets/excluir.svg';

import api from '../../../services/api';

export function ListMedic() {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [doctors, setDoctor] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    async function loadMedic() {
      const response = await api.get('doctors');

      setDoctor(response.data);
    }

    loadMedic();
  }, []);

  const handleToggleVisible = () => {
    setVisible(!visible);
  };

  const handleRemove = (doctor) => {
    dispatch(removeMedic(doctor));
  };

  return (
    <DefaultLayout>
      <Header />
      <Container>
        <h2>Listagem</h2>
        <span>Médico</span>
        <Wrapper>
          <Link to="/register/doctor"><button type="button">Cadastrar</button></Link>
          {doctors.map((doctor) => (
            <List>
              <Badge onClick={handleToggleVisible}>
                <Infor>
                  <li>🚀</li>
                  <li>{doctor.name}</li>
                  <li>31/08/2002</li>
                  <li>
                    <Link to="/update/doctor"><img src={Edit} alt="Edit" /></Link>
                    <button onClick={() => handleRemove(doctor.id)} type="button"><img src={Remove} alt="Remove" /></button>
                  </li>
                </Infor>
              </Badge>
              <Visible visible={visible}>
                <MoreInfor>
                  <Grid>
                    <Part size="double">
                      <h3>Dados pessoais</h3>
                    </Part>
                    <Part>
                      <strong>Nome</strong>
                      <span>{doctor.name}</span>
                    </Part>
                    <Part>
                      <strong>CPF</strong>
                      <span>{doctor.cpf}</span>
                    </Part>
                    <Part>
                      <strong>Nascimento</strong>
                      <span>Nome</span>
                    </Part>
                    <Part>
                      <strong>Endereço</strong>
                      <span>{doctor.adress}</span>
                    </Part>
                    <Part>
                      <strong>Gender</strong>
                      <span>{doctor.gender}</span>
                    </Part>
                  </Grid>
                  <Grid>
                    <Part size="double">
                      <h3>Especialização</h3>
                    </Part>
                    <Part>
                      <strong>CRM</strong>
                      <span>{doctor.crm}</span>
                    </Part>
                    <Part>
                      <strong>Especialidade</strong>
                      <span>{doctor.speciality}</span>
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
