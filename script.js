/*Your challenge is to create a function 
that takes weight and height as inputs 
and gives the calculated BMI value as an output. 
The output should be rounded to the nearest whole number.

The first parameter should be the weight 
and the second should be the height.

NOTE: You do not need to write any alerts or prompts or console logs. 
Your code should only contain the function, 
the result has to be returned by the function. 
You do not need to call the function. */

const calc_BMI_Btn = document.getElementById("BMI-calc-btn");
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let result = document.getElementById("result-sentence");

function bmiCalculator() {
  weight = Number(document.getElementById("weight").value);
  height = Number(document.getElementById("height").value);
  if (weight && height) {
    const bmi = Math.round(weight / height ** 2);
    if (bmi <= 18.5) {
      result.textContent = `You have a BMI of ${bmi}. You are Underweight`;
      console.log(resultValue);
    } else if (bmi <= 24.9) {
      result.textContent = `You have a BMI of ${bmi}. You are Healthy.`;
    } else if (bmi <= 29.9) {
      result.textContent = `You have a BMI of ${bmi}. You are Overweight.`;
    } else {
      result.textContent = `You have a BMI of ${bmi}. You are Obese.`;
    }
  } else {
    alert("Invalid Inputs");
  }
}
calc_BMI_Btn.addEventListener("click", bmiCalculator);
