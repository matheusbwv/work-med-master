import React from 'react';

import DefaultLayout from '../_layouts/default';

import Barside from '../../components/Barside';

function Dashboard() {
  return (
    <DefaultLayout>
      <Barside />
      <h1>DASHBOARD</h1>
    </DefaultLayout>

  );
}

export default Dashboard;
