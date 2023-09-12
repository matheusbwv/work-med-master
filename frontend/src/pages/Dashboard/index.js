import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import api from '../../services/api';

import chart from '../../lib/chartjs';

import DefaultLayout from '../_layouts/default';
import Barside from '../../components/Barside';
import Avatar from '../../assets/avatar.jpg';

import {
  Container, Top, FlexBox, UniqGrafic, Box,
} from './styles';

function Dashboard() {
  const name = useSelector(((state) => state.user.profile.name));

  return (
    <DefaultLayout>
      <Barside />
      <Container>
        <Top>
          <div>
            <h5>Dashboard</h5>
            <p>Seja bem vindo, {name}!</p>
          </div>
          <Link to="/profile">
            <p>{name}</p>
            <img src={Avatar} alt="Avatar" />
          </Link>
        </Top>
        <FlexBox>
          <Box>
            <div className="card-body ">
              <h5 className="card-title">Médicos</h5>
              <h4 className="card-text mt-4">Dr.Soares</h4>
              <p className="card-text lh-1">Total de Cirurgias</p>
            </div>
            <div className="">
              <canvas id={chart} />
            </div>
          </Box>
          <Box>
            <div className="card-body">
              <h5 className="card-title">SUS</h5>
              <p className="card-text mt-5">Total Cirurgias</p>
            </div>
            <div>
              <canvas id="conv" />
            </div>
          </Box>
          <Box>
            <div className="card-body">
              <h5 className="card-title">Juazeiro do Norte</h5>
              <p className="card-text mt-5" />
            </div>
            <div>
              <canvas id="surgery" />
            </div>
          </Box>
        </FlexBox>

        <FlexBox>
          <Box>
            <div className="card-body">
              <h5 className="card-title">Cirurgias Realizadas</h5>
              <p className="card-text">Total de Cirurgias</p>
              <div className="row row-cols-2">
                <div className="col-8">
                  <canvas id="surgery_month" height="250px" />
                </div>
                <div className="col-4 text-center d-flex flex-column align-middle justify-content-center">
                  <h1>Teste</h1>
                  <h5 className="card-title">Total Realizado</h5>
                </div>
              </div>
            </div>
          </Box>
          <Box>
            <div className="card-body">
              <canvas id="surgery_types" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Procedimentos</h5>
              <p className="card-text">Total de Cirurgias</p>
            </div>
          </Box>
        </FlexBox>

        <UniqGrafic>
          <div className="row row-cols-4">
            <div className="card-body">
              <h5 className="card-title">Gastos Totais</h5>
              <p className="card-text">Com Cirurgias</p>
            </div>
            <div className="pt-4">
              <h5>Teste</h5>
            </div>

          </div>
          <div>
            <canvas className="" id="surgery_expenses" />
          </div>
        </UniqGrafic>
      </Container>
    </DefaultLayout>

  );
}

export default Dashboard;
