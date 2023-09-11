import React from 'react';
import { Link } from 'react-router-dom';

import DefaultLayout from '../_layouts/default';

import Barside from '../../components/Barside';

import { Container } from './styles';

function Dashboard() {
  return (
    <DefaultLayout>
      <Barside />
      <Container>
        <div className="container py-3 col-9">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Dashboard</h5>
            <Link to="/profile" className="d-flex align-items-center">
              <p className="pt-4">Carla Belize</p>
              <img className="" src="" alt="" />
            </Link>
          </div>
          <p className="lh-1">Seja bem vinda, Carla Belize</p>
        </div>
        <div className="container-fluid d-flex mb-4 col-9">
          <div className="card d-flex flex-row pb-2">
            <div className="card-body ">
              <h5 className="card-title">Médicos</h5>
              <h4 className="card-text mt-4">Dr.Soares</h4>
              <p className="card-text lh-1">Total de Cirurgias</p>
            </div>
            <div className="">
              <canvas id="doctor" />
            </div>
          </div>
          <div className="card d-flex flex-row">
            <div className="card-body">
              <h5 className="card-title">SUS</h5>
              <p className="card-text mt-5">Total Cirurgias</p>
            </div>
            <div>
              <canvas id="conv" />
            </div>
          </div>
          <div className="card d-flex flex-row">
            <div className="card-body">
              <h5 className="card-title">Juazeiro do Norte</h5>
              <p className="card-text mt-5" />
            </div>
            <div>
              <canvas id="surgery" />
            </div>
          </div>
        </div>

        <div className="container-fluid d-flex col-9 justify-content-between mb-4">
          <div>
            <div className="card ">
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
            </div>
          </div>
          <div className="card w-25">
            <div className="card-body">
              <canvas id="surgery_types" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Procedimentos</h5>
              <p className="card-text">Total de Cirurgias</p>
            </div>
          </div>
        </div>

        <div className="container-fluid mb-4 col-9">
          <div className="card w-100 p-3">
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
          </div>
        </div>
      </Container>
    </DefaultLayout>

  );
}

export default Dashboard;
