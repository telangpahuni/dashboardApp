BarChart()
DoughnutChart()
const xlabels=[];
const ylabels=[];

async function BarChart(){
  await getMyData();
  const ctx = document.getElementById('myChart').getContext('2d');
  myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels:xlabels ,
          datasets: [{
              label: 'Splunk status',
              data: ylabels,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        indexAxis: 'y',
      }
      
  });
}

async function DoughnutChart(){
  await getMyData();
  const ctx = document.getElementById('doughnutChart').getContext('2d');
  var myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      
      data: {
        labels: ['Compliant','Non-Compliant'],
        datasets:[{
          data: [compliantCount,nonCompliantCount],
          
          backgroundColor:[
            'rgba(255, 110, 132, 0.5)',
            'rgba(54, 200, 235, 0.5)'
          ]
        }]
      },
      options: {},

  });
}

const sStatus = []
let compliantCount = 0;
let nonCompliantCount = 0;

async function getMyData() {

  const response1 = await fetch('../src/test.csv');
  const response2 = await fetch('../src/Splunk_06-09-2021 - Splunk.csv')
  const data = await response1.text();
  const data2 = await response2.text();
  const rows = data.split('\n').slice(1);
  const rows2 = data2.split('\n').slice(1);
  rows2.forEach( elt =>{
    const row = elt.split(',');
    const str = row[1].toString();
    if(str=='Compliant'){
      compliantCount++;
    }
    else{
      nonCompliantCount++;
    }
  });

  rows.forEach( elt =>{
    const row = elt.split(',');
    sStatus.push(row[1]);
    str = row[1].toString();
    if(str=='Compliant'){
      compliantCount++;
    }
    else{
      nonCompliantCount++;
    }
  });

  // console.log(compliantCount);
  // console.log(nonCompliantCount);
  counts=[];
  const uniqueS = [...new Set(sStatus)];
  for(let i=0; i<uniqueS.length ; i++){
    countu =0;
    for(let j=0; j<sStatus.length;j++){
      if(uniqueS[i]==sStatus[j]){
        countu++;
      }
    }
    counts.push(countu);
  };
  uniqueS.forEach(elt=>{
    xlabels.push(elt);
  });
  counts.forEach(elt=>{
    ylabels.push(elt);
  });
};

