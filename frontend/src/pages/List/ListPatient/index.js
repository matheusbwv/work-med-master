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

export function ListPatient() {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [patients, setPatient] = useState([]);
  // const [date, setDate] = useState(new Date());

  // const dateFormatted = useMemo(
  //   () => format(date, "d 'de' MMMM", { locale: pt }),
  //   [date],
  // );

  useEffect(() => {
    async function loadMedic() {
      const response = await api.get('patients');

      setPatient(response.data);
    }

    loadMedic();
  }, []);

  const handleToggleVisible = () => {
    setVisible(!visible);
  };

  const handleRemove = (patient) => {
    dispatch(removeMedic(patient));
  };

  return (
    <DefaultLayout>
      <Header />
      <Container>
        <h2>Listagem</h2>
        <span>Paciente</span>
        <Wrapper>
          <Link to="/register/patient"><button type="button">Cadastrar</button></Link>
          {patients.map((patient) => (
            <List>
              <Badge onClick={handleToggleVisible}>
                <Infor>
                  <li>🚀</li>
                  <li>{patient.name}</li>
                  <li>31/08/2002</li>
                  <li>
                    <Link to="/update/patient"><img src={Edit} alt="Edit" /></Link>
                    <button onClick={() => handleRemove(patient.id)} type="button"><img src={Remove} alt="Remove" /></button>
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
                      <span>{patient.name}</span>
                    </Part>
                    <Part>
                      <strong>CPF</strong>
                      <span>{patient.cpf}</span>
                    </Part>
                    <Part>
                      <strong>Nascimento</strong>
                      <span>Nome</span>
                    </Part>
                    <Part>
                      <strong>Endereço</strong>
                      <span>{patient.adress}</span>
                    </Part>
                    <Part>
                      <strong>Gender</strong>
                      <span>{patient.gender}</span>
                    </Part>
                  </Grid>
                  <Grid>
                    <Part size="double">
                      <h3>Especialização</h3>
                    </Part>
                    <Part>
                      <strong>CRM</strong>
                      <span>{patient.crm}</span>
                    </Part>
                    <Part>
                      <strong>Especialidade</strong>
                      <span>{patient.speciality}</span>
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
