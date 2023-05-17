// line Data
export const options = {
  Plugins: {
    legend: true
  },
  scales: {
    y: {
      min: 0,
      max: 25
    }
  }

}

export const data = {
  labels: ['May 9th', 'May 10th', 'May 11th', 'May 12th', 'May 13th', 'May 14th', 'May 15th'],
  datasets: [{
    labels: 'salesof the week',
    data: [23, 6, 8, 9, 8, 5, 0],
    backgroundColor: 'lightblue',
    borderColor: 'lightblue',
    pointBorderColor: 'lightblue',
    // fill :true,
    // tension: 0.4
  }]
}

//vertical Bar 
export const data1 = {
  labels: ['Lateral Movement', 'On-Write Static Al - Supicious', 'User-Defined Blacklist', 'SentinelOne Cloud', 'On-Write Static Al', 'Behavioral Al', 'Reputation','Documents,Scripts','Anti Exploitation/ Fileless','Cloud Detection'],
  datasets: [
    {
    labels: '369',
    data: [1450,1300,1000,650,300,300,100,90,70],
    backgroundColor: 'lightblue',
    borderColor: 'lightblue',
    pointBorderColor: 'lightblue',
    borderWidth:1
  }
]
}

export const option1 = {
  indexAxis: 'y' ,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
    scales: {
      x: {
        min: 0,
        max: 1600
      }
    }
  }

}

//straight Bar

export const data2 = {
  labels: ['Malware', 'Ransomware', 'Trojan', 'Worm', 'PUA', 'Hacktool', 'Virus','Adware','Infostealer','Generic Heuristic'],
  datasets: [
    {
    labels: '369',
    data: [2800,1400,100,200,200,250],
    backgroundColor: 'lightblue',
    borderColor: 'lightblue',
    pointBorderColor: 'lightblue',
    borderWidth:1
  }
]
}

export const option2 = {
    scales: {
      x: {
        min: 0,
        max: 1600
      }
    }
  }


