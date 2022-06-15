// const chart = document.querySelector('.chart')

//  new Chart(chart, {
//      type:'line',
//      data:{
//          labals:['jan', 'feb','mar', 'apr','may','jun','july','aug','sept','oct','nov','dec'],

//         datasets:[
//             {
//                 labels:'BTC',
//                 data: [29374, 33537, 33537,34437,33677,33937,33559,33237,33127,33697,35037],
//                 bordercolor:'red',
//                 borderwidth:2
//             },
//             {
//                 labels:'ETH',
//                 data: [29374, 33537, 33537,34437,33677,33937,33559,33237,33127,33697,35037],
//                 bordercolor:'blue',
//                 borderwidth:2
//             },

//         ]
//      },
//      options:{
//          responsive:true
//      }
//  })

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const data = {
  labels: labels,
//   datasets: [{
//                     labels:'BTC',
//                     data: [29374, 33537, 33537,34437,33677,33937,33559,33237,33127,33697,35037],
//                     bordercolor:'red',
//                     borderwidth:2
//                 },
//                 {
//                     labels:'ETH',
//                     data: [29374, 33537, 33537,34437,33677,33937,33559,33237,33127,33697,35037],
//                     bordercolor:'blue',
//                     borderwidth:2
//                 }]
datasets: [
    {   label: 'BTC',
        data: [26374, 33537, 33867,34637,33656,33937,33889,33677,33977,33997,35039],
        borderColor:'red',
        fill: false,
        borderWidth:2
    },
  {
    label: 'ETH',
    data: [29374, 33537, 33537,34437,33677,33937,33559,33237,33127,33697,35037],
    fill: false,
    borderColor:'blue',
    borderWidth:2
  }

]
};

const config = {
  type: 'line',
  data: data,
  options: {Responsive:true}
};

const myChart = new Chart(
document.getElementById('myChart'),
config
);


const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close');
const themeToggle = document.querySelector('.theme-btn');

menuBtn.addEventListener('click' , () => {
    sideMenu.style.display ='block';
})
closeBtn.addEventListener('click' , () => {
    sideMenu.style.display ='none';
})

themeToggle.addEventListener('click' , () => {
    document.body.classList.toggle('dark-theme');


    themeToggle.querySelector("span:nth-child(1)").classList.toggle('active');
    themeToggle.querySelector('span:nth-child(2)').classList.toggle('active');
})

    