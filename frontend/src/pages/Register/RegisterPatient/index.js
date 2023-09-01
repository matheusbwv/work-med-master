import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Select } from '@rocketseat/unform';

import * as Yup from 'yup';

import { registerPatientInRequest } from '../../../store/modules/register/registerPatient/actions';
// import { Link } from 'react-router-dom';
import {
  Container, Forms, InputWrapper,
} from './styles';

import DefaultLayout from '../../_layouts/default';
import Header from '../../../components/Barside';

export default function RegisterPatient() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Insira um nome'),
    medic_history: Yup.string(),
    gender: Yup.string().required('Insira seu gênero'),
    cpf: Yup.string().required('Insira CPF'),
    adress: Yup.string().required('Insira um endereço'),
    contact: Yup.string().required('Insira seu contato'),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = ({
    name, medic_history, gender, contact, cpf, adress,
  }) => {
    dispatch(registerPatientInRequest(
      name,
      medic_history,
      gender,
      contact,
      cpf,
      adress,
      navigate,
    ));
  };

  return (
    <DefaultLayout>
      <Header />
      <Container>
        <h2>Cadastro</h2>
        <span>Paciente</span>
        <Forms>
          <Form schema={schema} onSubmit={handleSubmit}>
            <InputWrapper size="double">
              <strong>Nome</strong>
              <Input name="name" placeholder="Digite seu nome..." />
            </InputWrapper>
            <InputWrapper>
              <strong>Contato</strong>
              <Input name="contact" placeholder="Número de celular..." />
            </InputWrapper>
            <InputWrapper>
              <strong>Gênero</strong>
              <Select
                name="gender"
                placeholder="Escolha"
                options={[{ title: 'Masculino' }, { title: 'Feminino' }]}
              />
            </InputWrapper>
            <InputWrapper>
              <strong>Histórico Médico</strong>
              <Input name="medic_history" placeholder="Historico Médico..." />
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
