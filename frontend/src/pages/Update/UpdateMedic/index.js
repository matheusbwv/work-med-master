import React from 'react';

import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { Form, Input, Select } from '@rocketseat/unform';

import * as Yup from 'yup';
// import { useParams } from 'react-router-dom';
import { updateMedicRequest } from '../../../store/modules/register/registerMedic/actions';

import {
  Container, Forms, InputWrapper,
} from './styles';

import DefaultLayout from '../../_layouts/default';
import Header from '../../../components/Barside';

export default function UpdateMedic() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Insira um nome'),
    speciality: Yup.string().required('Insira uma especialidade'),
    crm: Yup.string().required('Insira CRM'),
    cpf: Yup.string().required('Insira CPF'),
    adress: Yup.string().required('Insira um endereço'),
    gender: Yup.string().required('Insira seu gênero'),
  });

  const dispatch = useDispatch();
  // const { id } = useParams();
  // const navigate = useNavigate();
  // const doctor = useSelector((state) => state.Medic);

  const handleSubmit = (
    data,
  ) => {
    dispatch(updateMedicRequest(data));
  };

  return (
    <DefaultLayout>
      <Header />
      <Container schema={schema}>
        <h2>Atualizar</h2>
        <span>Médico</span>
        <Forms>
          <Form onSubmit={handleSubmit}>
            <InputWrapper size="double">
              <strong>Nome</strong>
              <Input name="name" placeholder="Digite seu nome..." />
            </InputWrapper>
            <InputWrapper>
              <strong>Especialidade Médica</strong>
              <Input name="speciality" placeholder="Ex: Neurucirurgião..." />
            </InputWrapper>
            <InputWrapper>
              <strong>Gênero</strong>
              <Select
                name="gender"
                placeholder="Escolha"
                options={[{ title: 'Masculino', value: 'Masculino' },
                  { title: 'Feminino', value: 'Feminino' }]}
              />
            </InputWrapper>
            <InputWrapper>
              <strong>CRM</strong>
              <Input name="crm" placeholder="Digite seu CRM..." />
            </InputWrapper>
            <InputWrapper>
              <strong>CPF</strong>
              <Input name="cpf" placeholder="Digite seu CPF" />
            </InputWrapper>
            <InputWrapper size="double">
              <strong>Endereço</strong>
              <Input name="adress" placeholder="Digite seu endereço..." />
            </InputWrapper>
            <InputWrapper>
              <button type="submit">Submit</button>
            </InputWrapper>
          </Form>
        </Forms>
      </Container>
    </DefaultLayout>
  );
}
