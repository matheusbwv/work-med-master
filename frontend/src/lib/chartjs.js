import Chart from 'chart.js/auto';

const ctx_doctor = document.getElementById('doctor');

const chart = new Chart(ctx_doctor, {
  type: 'doughnut',
  // line
  // bar
  // pie
  // doughnut
  data: {
    labels: ['Dr.Soares'],
    datasets: [{
      label: '',
      backgroundColor: ['#FF7723'],
      data: [],
      borderWidth: 0.0,
    }],

  },
  options: {

  },
});

export default chart;
