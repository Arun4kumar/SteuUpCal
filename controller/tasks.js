const calculate = require("../services/tasks");

const calculateStepUpSip = (req, res) => {
  let data = req.body;
  let { period, montlyInvestments, yearlyIncrease, rateOfReturn } = data;
  if (
    !period ||
    period <= 0 ||
    !montlyInvestments ||
    montlyInvestments <= 0 ||
    !yearlyIncrease ||
    yearlyIncrease <= 0 ||
    !rateOfReturn ||
    rateOfReturn <= 0
  ) {
    res.status(400).send({ error: "Invalid Input" });
  } else res.send({ result: calculate(req.body) });
};

module.exports = calculateStepUpSip;
