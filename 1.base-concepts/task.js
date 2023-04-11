"use strict"

function solveEquation(a, b, c) {
	let arr = [];

	let discriminant = (b ** 2) - (4 * a * c);

	if (discriminant < 0) {
		return arr;
	} else if (discriminant === 0) {
		arr[0] = -b / (2 * a)
	} else {
		arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a)
		arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a)
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {


	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		return false;
	}
	let monthPercen = ((percent / 100) / 12);
	let loanBody = (amount - contribution);
	let payment = (loanBody * (monthPercen + (monthPercen / (((1 + monthPercen) ** countMonths) - 1))));
	let amountToBeRefunded = (payment * countMonths);
	return +(amountToBeRefunded.toFixed(2));
}