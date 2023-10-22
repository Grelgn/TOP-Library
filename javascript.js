const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name, author, pages, read) {
    myLibrary.push(new Book(name, author, pages, read));
}

addBookToLibrary('The Hobbit', 'J.R.R Tolkien', '295', 'Not read');

const books = document.querySelector(".books");

function displayBooks() {
    myLibrary.forEach((element) => {
        const book = document.createElement("div");
        book.classList.add("book");
        book.innerHTML = `<h3>${element.name}</h3> ${element.author} <br><br> ${element.pages} pages <br><br> ${element.read}`;
        books.appendChild(book);
    });
}

displayBooks();