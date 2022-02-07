// actual function
const calculate = (data) => {
  let { period, montlyInvestments, yearlyIncrease, rateOfReturn } = data;
  montlyInvestments = montlyInvestments - 0;
  yearlyIncrease = yearlyIncrease - 0;
  rateOfReturn = rateOfReturn - 0;
  period = period - 0;

  let months = period * 12;
  let rate = rateOfReturn / 12;
  let sipCumulation = 0;
  let sipGrowthResult = 0;

  let result = {};

  for (let i = 1; i <= months; i++) {
    if (i != 1) {
      if (i % 12 == 1) {
        montlyInvestments = montlyInvestments + yearlyIncrease;
      }
      if (i % 12 == 0) {
        result[i / 12] = sipGrowthResult.toFixed(3) - 0;
      }
    }
    sipCumulation = montlyInvestments * Math.pow(1 + rate / 100, i);
    sipGrowthResult += sipCumulation;
  }
  return result;
};

module.exports = calculate;
