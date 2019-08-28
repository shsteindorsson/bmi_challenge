
function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
  
  this.calculate_bmi = function (mode) {
    console.log(mode + ' mode');
    calculator = new BMICalculator();
    if (mode) {
      calculator.metric_bmi(this);
      console.log('calc_metric');
    }
    else {
      calculator.imperial_bmi(this);
      console.log('calc_imperial');
    }
    
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Person;
  }

