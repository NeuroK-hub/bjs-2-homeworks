// 1 Задание
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 100
		} else if (newState > 100) {
			this._state = 100
		} else {
			this._state = newState
		}
	}
	get state() {
		return this._state
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
		super(name, releaseDate, pagesCount, state, type)
		this.type = "magazine"
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(name, releaseDate, pagesCount, state, type)
		this.author = author
		this.type = "book"
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(name, releaseDate, pagesCount, state, type)
		this.author = author
		this.type = "novel"
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(name, releaseDate, pagesCount, state, type)
		this.author = author
		this.type = "fantastic"
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(name, releaseDate, pagesCount, state, type)
		this.author = author
		this.type = "detective"
	}
}



// 2 Задание

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = []
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book)
		}
	}

	findBookBy(type, value) {
		const searchResults = this.books.find((item) => item[type] === value)
		return searchResults || null
	}
	giveBookByName(bookName) {
		const book = this.findBookBy("name", bookName);
		if (!book) return null;
		this.books = this.books.filter((item) => item.name !== bookName);
		return book;
	}
}