const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    myLibrary.push(new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read'));
}

addBookToLibrary();
console.log(myLibrary);