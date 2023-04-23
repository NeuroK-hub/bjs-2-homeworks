function parseCount(a) {
	if (Number.isNaN(Number.parseFloat(a))) {
		throw new Error('Невалидное значение')
	}
	return Number.parseFloat(a)
}

function validateCount(a) {
	try {
		return parseCount(a)
	} catch (Error) {
		return Error
	}
}

class Triangle {
	constructor(a, b, c) {
		if ((a + b) < c || (a + c) < b || (c + b) < a) {
			throw new Error('Треугольник с такими сторонами не существует')
		} else {
			this.a = a
			this.b = b
			this.c = c
		}

	}

	get perimeter() {
		return this.a + this.b + this.c
	}

	get area() {
		let p = this.perimeter * 0.5
		return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c)
	} catch (ettor) {
		return {
			get area() {
				return ('Ошибка! Треугольник не существует')
			},
			get perimeter() {
				return ('Ошибка! Треугольник не существует')
			}
		}
	}
}