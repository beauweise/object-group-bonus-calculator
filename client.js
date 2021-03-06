$(document).ready(readyNow);

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

// Write a declared function that takes in one Employee object (as an argument to the function), and returns a new object with the following properties:

//     The name property should contain the employee's name.
//     The bonusPercentage property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
//     The totalCompensation property should be the adjusted annual compensation (base annual + bonus)
//     The totalBonus should be the employee's total bonus rounded to the nearest dollar.

    function bonusCalculation(employeeObject) {
      console.log(employeeObject);
      let newObject = {
        name: employeeObject.name,
        bonusPercentage: 0,
        totalCompensation: 0,
        totalBonus: 0
      }
      // we calculate the percentage of bonus for each person object
      if (employeeObject.reviewRating <= 2) {
        newObject.bonusPercentage = 0;
      }
      else if (employeeObject.reviewRating == 3) {
        newObject.bonusPercentage = 0.04;
      }
      else if (employeeObject.reviewRating == 4) {
        newObject.bonusPercentage = 0.06;
      }
      else if (employeeObject.reviewRating <= 5) {
        newObject.bonusPercentage = 0.10;
      }

      // we calculate the addition of 5% to the bonus if they have been employed long time
      if (employeeObject.employeeNumber < 10000) {
        newObject.bonusPercentage += 0.05;
      }
      // 1% subtracted if salary too high
      if (employeeObject.annualSalary > 65000) {
        newObject.bonusPercentage -= 0.01;
      }
      // sets bonus to only be between 0 and 13%
      if (newObject.bonusPercentage < 0) {
        newObject.bonusPercentage = 0;
      }
      else if (newObject.bonusPercentage > .13) {
        newObject.bonusPercentage = .13;
      }
      // doing total bonus first
      newObject.totalBonus = Number(employeeObject.annualSalary * newObject.bonusPercentage);
      newObject.totalCompensation = Number(employeeObject.annualSalary) + newObject.totalBonus;
      
      return newObject;
    }

    function bonusCheck() {
    let newArray = [];
    for (let i = 0; i < employees.length; i++) {
      let el = $('#output');
      console.log(bonusCalculation(employees[i]));
      
      newArray.push(bonusCalculation(employees[i]));
      console.log(newArray[i].name);
      el.append('<li>' + newArray[i].name + ' - Bonus Percentage: ' + (newArray[i].bonusPercentage * 100) + '% Total Bonus: $' + newArray[i].totalBonus + ' Total Compensation: $' + newArray[i].totalCompensation + '</li>');
      
      //el.append('hello')
      //el.append('<li>' + employeeBonus.name + ' ' + employeeBonus.bonusPercentage + ' ' + employeeBonus.totalBonus + ' ' + employeeBonus.totalCompensation + '</li>');
    }
  }

    
    function readyNow() {
      console.log('JQ');
      $('#bonus').on('click', bonusCheck);
    } // end readyNow
