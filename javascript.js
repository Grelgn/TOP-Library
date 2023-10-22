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

addBookToLibrary('The Hobbit', 'J.R.R Tolkien', '295', 'not read');

const books = document.querySelector(".books");

const book = document.createElement("div");
book.classList.add("book");
book.innerHTML = `<h3>${myLibrary[0].name}</h3> ${myLibrary[0].author} <br><br> ${myLibrary[0].pages} pages <br><br> ${myLibrary[0].read}`;
books.appendChild(book);