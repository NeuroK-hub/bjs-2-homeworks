function getArrayParams(...arr) {

	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (arr[i] > max) {
			max = arr[i]
		}
		if (arr[i] < min) {
			min = arr[i]
		}
	}
	avg = Number((sum / arr.length).toFixed(2))

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sum = 0
	let sum1 = arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		sum
	)
	return sum1
}

function differenceMaxMinWorker(...arr) {
	if (arr.length == 0) {
		return 0
	} else {
		let max = Math.max.apply(null, arr);
		let min = Math.min.apply(null, arr);
		let difference = max - min;
		return difference
	}
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i]
		} else {
			sumOddElement += arr[i]
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i]
				++countEvenElement
		}
	}
	if (countEvenElement === 0) {
		return 0
	}
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		let result = func(...arrOfArr[i])
		if (result > maxWorkerResult) {
			maxWorkerResult = result
		}
	}
	return maxWorkerResult
}