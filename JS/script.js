
///////////////////////////////
      /// ALERT NOTIF ///
//////////////////////////////

const notif = document.getElementsByClassName('notif');
const alert = document.getElementsByClassName('alert');








///////////////////////////////
        /// CHARTS ///
//////////////////////////////

// LINE GRAPH

const ctx1 = document.getElementById("lineGraph").getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['6 a.m.', '9 a.m.', '12 p.m.', '3 p.m.', '6 p.m.', '9 p.m.', '12 a.m.'],
        datasets: [{
            label: 'Traffic',
            data: [800, 1500, 2400, 2200, 3000, 1120, 400],
            backgroundColor: [
                'rgba(143,215,239, 0.5)',
            ],
            borderColor: [
                'rgba(76,191,230, 1)',
            ],
            borderWidth: 2
        }]
    },

    options: {
      legend: {
            display: false
        }
    }
});


// BAR GRAPH


const ctx2 = document.getElementById("barGraph").getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
            label: 'Daily Traffic',
            data: [300, 1400, 1200, 1300, 1100, 900, 600],
            backgroundColor: [
                'rgba(143,215,239, 1)',
                'rgba(143,215,239, 1)',
                'rgba(143,215,239, 1)',
                'rgba(143,215,239, 1)',
                'rgba(143,215,239, 1)',
                'rgba(143,215,239, 1)',
                'rgba(143,215,239, 1)',
            ],
            borderColor: [
                'rgba(76,191,230, 1)',
                'rgba(76,191,230, 1)',
                'rgba(76,191,230, 1)',
                'rgba(76,191,230, 1)',
                'rgba(76,191,230, 1)',
                'rgba(76,191,230, 1)',
                'rgba(76,191,230, 1)',
                'rgba(76,191,230, 1)',
            ],
            borderWidth: 2
        }]
    },

    options: {
      legend: {
            display: false
        }
    }
});

// DOUGHBUT GRAPH


const ctx3 = document.getElementById("doughnutGraph").getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktops'],
        datasets: [{
            label: 'Mobile Users',
            data: [60, 20, 18],
            backgroundColor: [
                'rgba(76,191,230, 1)',
                'rgba(143,215,239, 1)',
                'rgba(199,235,247, 0.2)',
            ],
            borderColor: [
                'rgba(76,191,230, 1)',
                'rgba(143,215,239, 1)',
                'rgba(199,235,247 1)',
            ],
            borderWidth: 2
        }]
    },

    options: {
      // legend: {
      //       display: false
      //   }
    }
});
