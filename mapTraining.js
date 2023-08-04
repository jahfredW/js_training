const pollutionThresholds = [
  {
    polluant: 'pm10',
    thresholds: {
      good: 20,
      fair: 80,
      moderate: 250,
      poor: 350,
    },
  },
  {
    polluant: 'pm2_5',
    thresholds: {
      good: 10,
      fair: 12,
      moderate: 250,
      poor: 350,
    },
  },
  {
    polluant: 'pm10',
    thresholds: {
      good: 20,
      fair: 80,
      moderate: 250,
      poor: 350,
    },
  },
];

 pollutionData = {
    "co": 195.27,
    "no": 0.16,
    "no2": 1.97,
    "o3": 73.67,
    "so2": 1.76,
    "pm2_5": 5.65,
    "pm10": 7.7,
    "nh3": 0.25
}


const destrucTest = (thresholds, value) => {
    const { good, fair, moderate, poor } = thresholds;
    console.log(good, fair, moderate, poor)

    if (value <= good) {
        return 'text-green-500';
      } else if (value <= fair) {
        return 'text-yellow-500';
      } else if (value <= moderate) {
        return 'text-orange-500';
      } else if (value <= poor) {
        return 'text-red-500';
      } else {
        return 'text-purple-500'; // Or any other default color for values beyond "poor"
      }
    
}

// on parcours les élements de pollutionThreshold avec map 
pollutionThresholds.forEach( (item) => {
    // on destructure chaque élément de item : 
    /**
     * pareil que const polluant = item.polluant
     * const thresholds = item.thresholds 
     */
    const { polluant, thresholds } = item;
    // récupération de la valeur correspodant à la clé 
    const value = pollutionData[polluant];
   
    let color = destrucTest(thresholds, value)
    console.log(color)
    })

// la grande différence entre map et foreach : map crée un nouveau tableau 
// tandis que foreach non 

// tri pour avoir un tableau unique 
let tabSorted = pollutionThresholds.reduce( ( acc, currentValue) => {
    console.log(currentValue.polluant)
    return acc.includes(currentValue.polluant) ? acc : (acc.push(currentValue.polluant), acc)
}, [])

console.log(pollutionThresholds);
console.log(tabSorted);
    