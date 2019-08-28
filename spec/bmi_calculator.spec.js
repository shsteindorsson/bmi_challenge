
require('../spec.helper')

describe('BMICalculator', () => {
  let bmi_calculator
  let person

  beforeEach(() => {
    person = new Person({weight: 90, height: 186});
    bmi_calculator = new BMICalculator();
  });

  it('calculates BMI for a person using metric method', () => {
    bmi_calculator.metric_bmi(person)
    expect(person.bmiValue).to.eql(26.01)
  });

  it("sets BMI message for a person using metric method", () => {
    bmi_calculator.metric_bmi(person);
    expect(person.bmiMessage).to.equal('Overweight');
  });
})

describe('User can calculate BMI using imperial system', () => {
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });

  beforeEach(async () => {
    await browser.page.reload();
  });

  it('by inputing his weight and height', async () => {
    await browser.selectOption("select[id='my_select']", {option: 'imperial' })
    await browser.fillIn("input[id='weight-in-lbs']", { with: "170" })
    await browser.fillIn("input[id='height-in-in']", { with: "70" })
    await browser.clickOnButton("button")
    let content = await browser.getContent("span[id='display_value']")

    expect(content).to.eql('Your BMI is 24.39');
  });

  after(async () => {
    await browser.close();
  });
});
