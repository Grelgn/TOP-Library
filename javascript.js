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
    books.innerHTML = '';
    myLibrary.forEach((element) => {
        const book = document.createElement("div");
        book.classList.add("book");
        book.innerHTML = `<h3>${element.name}</h3> ${element.author} <br><br> ${element.pages} pages <br><br> ${element.read}`;
        books.appendChild(book);
    });
}

displayBooks();

const dialog = document.querySelector("dialog");
const add = document.querySelector(".add");
const cancel = document.querySelector(".cancel");
const addBook = document.querySelector(".add-book");

add.addEventListener("click", () => {
    dialog.showModal();
});

cancel.addEventListener("click", () => {
    dialog.close();
});

addBook.addEventListener("click", () => {
    const formName = document.querySelector("#name").value;
    const formAuthor = document.querySelector("#author").value;
    const formPages = document.querySelector("#pages").value;
    let formRead = document.querySelector("#read").checked;

    formRead ? formRead = "Read" : formRead = "Not read";

    addBookToLibrary(formName, formAuthor, formPages, formRead)
    displayBooks();
});