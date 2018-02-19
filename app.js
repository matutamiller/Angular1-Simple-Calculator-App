var app = angular.module("calculatorApp", []);      //creating module
app.controller("CalculatorCtrl", CalculatorCtrl);   //creating controller

function CalculatorCtrl() {                         //creating function of the controller
	this.resultValue = 0;                           //setting default result value to 0
	this.buttonClicked = function(button) {         //setting the function for the clicked button with the argument of the button value
		this.selectedOperation = button;
	}
	this.computeResult = function() {               //creating function for the result calculation
		var number1 = parseFloat(this.input1);      //parsing a string and returning a floating point number for input1
		var number2 = parseFloat(this.input2);      //parsing a string and returning a floating point number for input1
		if (this.selectedOperation === "+") {       //calculating the result for "+" operation
			this.resultValue = number1 + number2;
		}
		else if (this.selectedOperation === '-') {   //calculating the result for "-" operation
			this.resultValue = number1 - number2;
		}
		else if (this.selectedOperation === '*') {  //calculating the result for "*" operation
			this.resultValue = number1 * number2;
		}
		else if (this.selectedOperation === '/') {   //calculating the result for "/" operation
			this.resultValue = number1 / number2;
		}
	}
}