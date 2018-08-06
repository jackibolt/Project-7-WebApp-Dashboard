
///////////////////////////////
  /// ALERT NOTIFICATION ///
//////////////////////////////

const notif = document.querySelector('#notif-bell');
const subhead = document.querySelector('.subheader');
const alert = document.querySelectorAll('.alert');
const X = document.getElementsByTagName('x-letter');



  // Adds an alert box
const addAlert = () => {
  const alertDiv = document.createElement('div');
    alertDiv.className = 'alert';
  const alertText = document.createElement('div');
    alertText.innerHTML = "<span><strong>Alert</strong></span><span>You have a new notification on your account.</span>"
    alertText.className = "alert-text";
  const alertX = document.createElement('div');
    alertX.innerHTML = "<a><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.88 22.88'><path d='M.324 1.909a1.14 1.14 0 0 1 0-1.587 1.14 1.14 0 0 1 1.587 0l9.523 9.539L20.973.322a1.12 1.12 0 0 1 1.571 0 1.112 1.112 0 0 1 0 1.587l-9.523 9.524 9.523 9.539a1.112 1.112 0 0 1 0 1.587 1.12 1.12 0 0 1-1.571 0l-9.539-9.539-9.523 9.539a1.14 1.14 0 0 1-1.587 0c-.429-.444-.429-1.159 0-1.587l9.523-9.539L.324 1.909z' fill='#FFF'/></svg></a>"
    alertX.className = "x-letter";
  subhead.append(alertDiv);
  alertDiv.append(alertText);
  alertDiv.append(alertX);
}

const removeAlert = () => {
  const alertBox = document.querySelector('.alert');
  subhead.removeChild(alertBox);
}

let noteTote = 0

notif.addEventListener('click', () => {
  // i = noteTote;
  if (noteTote < 2) {
    addAlert();
    noteTote += 1;
    console.log(noteTote);
  } else if (noteTote === 2){
    noteTote +=1;
    removeAlert();
    console.log(noteTote);
  } else if (noteTote === 3) {
    removeAlert();
    noteTote = 0;
    console.log(noteTote);
  }

});


  // Hide alert box if X is clicked
subhead.addEventListener('click', (e) => {
    // if target is the svg tag
  if (e.target.tagName === "A" || e.target.tagName === 'SVG' || e.target.tagName === 'PATH' || e.target.className === 'x-letter'){
    console.log(e.target.tagName);
    removeAlert(e);
  }
});


///////////////////////////////
        /// CHARTS ///
//////////////////////////////

// LINE GRAPH

 //fetch line graph ID
const lineChart = document.getElementById("lineGraph").getContext('2d');

  // template function to put in graph data
const showChart = (labels, data) => {
  new Chart(lineChart, {
      type: 'line',
      data: {
          labels: labels,
          datasets: [{
              label: 'Traffic',
              data: data,
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
        },
        elements: {
          line: {
            tension: 0, // disables bezier curves
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              }
          }]
        }
      }
  });
}

  // line graph variables
const topRow = document.querySelector('#top-row');
const selectChart = document.querySelectorAll('.chart-opt');
showChart(
  ['6 a.m.', '9 a.m.', '12 p.m.', '3 p.m.', '6 p.m.', '9 p.m.', '12 a.m.'],
  [75, 88, 175, 200, 156, 92, 83]
);


  // focus on chart titles
topRow.addEventListener('click', (e) => {
  for (let i=0; i<selectChart.length; i+=1) {
    selectChart[i].classList.remove('highlight');
  }
  if (e.target.textContent.toLowerCase() === 'hourly') {
    e.target.classList.add('highlight');
    showChart(
      ['6 a.m.', '9 a.m.', '12 p.m.', '3 p.m.', '6 p.m.', '9 p.m.', '12 a.m.'],
      [75, 88, 175, 200, 156, 92, 83]
    );
  }
  if (e.target.textContent.toLowerCase() === 'daily') {
    e.target.classList.add('highlight');
    showChart(
      ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      [300, 1400, 1200, 1300, 1100, 900, 600]
    );
  }
  if (e.target.textContent.toLowerCase() === 'weekly') {
    e.target.classList.add('highlight');
    showChart(
      ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
      [5060, 6834, 5389, 7488, 6093, 7478, 6494, 6787]
    );
  }
  if (e.target.textContent.toLowerCase() === 'monthly') {
    e.target.classList.add('highlight');
    showChart(
      ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
      [52357, 47376, 42653, 38764, 26573, 47326, 56167, 29873, 65347, 65253, 47637, 63535]
    );
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
              'rgba(76,191,230, 1)',
              'rgba(76,191,230, 1)',
              'rgba(76,191,230, 1)',
              'rgba(76,191,230, 1)',
              'rgba(76,191,230, 1)',
              'rgba(76,191,230, 1)',
              'rgba(76,191,230, 1)',
              'rgba(76,191,230, 1)',
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

// DOUGHNUT GRAPH


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
      legend: {
        position: 'right',
        padding: 15,
      }
    }
});

///////////////////////////////
        /// MESSAGE ///
//////////////////////////////

const sendBtn = document.querySelector('.send');
const userInput = document.querySelector('#message-wrap input');
const msgInput = document.querySelector('#message-wrap textarea');
const idDiv = document.querySelector('#overlay');

const createBox = (content) => {
  idDiv.style.display = 'flex';
  const alertBox = document.createElement('span');
  alertBox.classList.add('alert-box');
  alertBox.innerHTML = content ;
  idDiv.appendChild(alertBox);
};

sendBtn.addEventListener('click', () => {
  if (userInput.value.length === 0 || msgInput.value.length === 0) {
    createBox("<strong>Error.</strong>  Your message did not send because you've left a field blank.");
    console.log('nope')
  } else {
    createBox("Message sent.");
  }
});

idDiv.addEventListener('click', () => {
  idDiv.style.display = "none";
  alertKid = document.querySelector('.alert-box');
  idDiv.removeChild(alertKid);
});
