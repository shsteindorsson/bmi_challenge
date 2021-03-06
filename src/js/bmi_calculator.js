function BMICalculator() {
  
  BMICalculator.prototype.metric_bmi = function(obj) {
    let weight = obj.weight;
    let height = obj.height;
    if (weight > 0 && height > 0) {
      let finalBmi = weight / (height / 100 * height / 100);
      obj.bmiValue = parseFloat(finalBmi.toFixed(2));
      setBMIMessage(obj); 
    }
  }

  BMICalculator.prototype.imperial_bmi = function(obj) {
    let weight = obj.weight;
    let height = obj.height;
    if (weight > 0 && height > 0) {
      let finalBmi = weight * 703 / height ** 2;
      obj.bmiValue = parseFloat(finalBmi.toFixed(2));
      setBMIMessage(obj);
    }
  }

  function setBMIMessage (obj){
    if (obj.bmiValue < 18.5) {
        obj.bmiMessage = "underweight"
    }
    if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
        obj.bmiMessage = "healthy"
    }
    if (obj.bmiValue > 25 && obj.bmiValue < 30) {
        obj.bmiMessage = "overweight"
    }
    if (obj.bmiValue > 30) {
        obj.bmiMessage = "obese"
    }
  }
}


if (typeof module !== 'undefined' && module.exports) {
  module.exports = BMICalculator;
}