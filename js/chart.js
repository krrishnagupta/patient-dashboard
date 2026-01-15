const labels = ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Systolic',
      data: [120, 118, 140, 115, 135, 138],
      borderColor: '#f472b6',
      tension: 0.4,
      fill: false
    },
    {
      label: 'Diastolic',
      data: [80, 65, 90, 85, 70, 75],
      borderColor: '#8b5cf6',
      tension: 0.4,
      fill: false
    }
  ]
};

const config = {
  type: 'line',
  data: data,
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
};

new Chart(
  document.getElementById('bpChart'),
  config
);
