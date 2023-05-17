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

  // Security Posture

  export const data3 = {
    labels: ['Mitigated', 'Not Mitigated', 'Marked As Benign'],
    datasets: [
      {
      labels: '369',
      data: [280, 30],
      backgroundColor: 'lightblue',
      borderColor: 'lightblue',
      pointBorderColor: 'lightblue',
      borderWidth:1
    }
  ]
  }
  
  export const option3 = {
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

  // Analyst Verdicts - Threats

  export const data4 = {
    labels: ['Undefined', ' Fake positive', 'True Positive', 'Suspicious'],
    datasets: [
      {
      labels: '369',
      data: [280,50,10,8],
      backgroundColor: 'lightblue',
      borderColor: 'lightblue',
      pointBorderColor: 'lightblue',
      borderWidth:1
    }
  ]
  }
  
  export const option4 = {
      scales: {
        x: {
          min: 0,
          max: 1600
        }
      }
    }

      // Indected EndPoint

  export const data5 = {
    labels: ['Healthy', 'Infected'],
    datasets: [
      {
      labels: '369',
      data: [4001, 100],
      backgroundColor: 'lightblue',
      borderColor: 'lightblue',
      pointBorderColor: 'lightblue',
      borderWidth:1
    }
  ]
  }
  
  export const option5 = {
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

  // Unmitigated Threats

  export const data6 = {
    labels: ['Mitigated', 'Not Mitigated', 'Marked As Benign'],
    datasets: [
      {
      labels: '369',
      data: [301, 15],
      backgroundColor: 'lightblue',
      borderColor: 'lightblue',
      pointBorderColor: 'lightblue',
      borderWidth:1
    }
  ]
  }
  
  export const option6 = {
      scales: {
        x: {
          min: 0,
          max: 1600
        }
      }
    }

    // Agents Requring Attention
    export const data7 = {
      labels: ['Attention needed', 'Missing permission', 'Unprotected', 'incompatible OS', 'Agent suppressed'],
      datasets: [
        {
        labels: '369',
        data: [75, 30],
        backgroundColor: 'lightblue',
        borderColor: 'lightblue',
        pointBorderColor: 'lightblue',
        borderWidth:1
      }
    ]
    }
    
    export const option7 = {
        scales: {
          x: {
            min: 0,
            max: 1600
          }
        }
      }

      // Pie Chart
//Secured Devices bt OS

export const data8 ={
  labels: ['windows','mac OS', 'Linux', 'window Legacy'],
  datasets:[
    {
      data: [9,.2,0,0,0],
      backgroundColor:['#5D00C7','#5E009C','#9842DA','#B637CA' ]
    }
  ]
}

export const option8={

}

// Threats by Detection Trigger
export const data9 ={
  labels: ['Agent Policy','Full Disk Scan', 'Local agent command', 'Deep visibility Command', 'Management console API', 'custom Rule', 'Custom Alert'],
  datasets:[
    {
      data: [9,2,.1,0,0],
      backgroundColor:['#5D00C7','#5E009C','#9842DA','#B637CA','#A495FF','#585EFF','#7FBFFF','#2E373C' ]
    }
  ]
}

export const option9={

}

// Secured Devices bt Role

export const data10 ={
  labels: ['windows','mac OS', 'Linux', 'window Legacy'],
  datasets:[
    {
      data: [9,4,2,.1,0],
      backgroundColor:['#5D00C7','#5E009C','#9842DA','#B637CA' ]
    }
  ]
}

export const option10={

}


