import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import AuthLayout from '../_layouts/auth';
import Logo from '../../assets/logo.svg';
import workmed from '../../assets/workmed.svg';

import { Container, Forms } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.auth.loading);

  const handleSubmit = ({ email, password }) => {
    dispatch(signInRequest(email, password, navigate));
  };

  return (
    <AuthLayout>
      <Forms>
        <img src={Logo} alt="WorMed" />
        <h2>Bem-Vindo de Volta!</h2>
        <p>Entre para ter acesso a sua Dashboard</p>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />

          <Link to="/signup">Criar conta gratuita</Link>
          <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        </Form>
      </Forms>
      <Container>
        <h1>WORKMED</h1>
        <img src={workmed} alt="Banner" />
        <h2>What is Lorem Ipsum?</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown
        </p>
      </Container>
    </AuthLayout>
  );
}

export default SignIn;
