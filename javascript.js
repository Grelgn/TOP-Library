const myLibrary = [];

class Book {
    constructor(name, author, pages, read, index) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.index = index
    }
}

function addBookToLibrary(name, author, pages, read, index) {
    myLibrary.push(new Book(name, author, pages, read, index));
}

addBookToLibrary('The Hobbit', 'J.R.R Tolkien', '295', 'Not read', 0);

const books = document.querySelector(".books");

function displayBooks() {
    books.innerHTML = '';
    myLibrary.forEach((element) => {
        const book = document.createElement("div");
        book.classList.add("book");
        element.index = myLibrary.indexOf(element)
        book.classList.add(element.index);
        book.innerHTML = `<h3>${element.name}</h3> ${element.author} <br><br> ${element.pages} pages <br><br> ${element.read}`;
        const buttonDiv = document.createElement("div");
        book.appendChild(buttonDiv);
        const deleteBook = document.createElement("button");
        deleteBook.classList.add("delete");
        deleteBook.textContent = "Delete"
        deleteBook.addEventListener("click", (e) => {
            let index = e.currentTarget.parentNode.parentNode.classList[1];
            myLibrary.splice(index, 1);
            displayBooks();
        });
        buttonDiv.appendChild(deleteBook);
        const changeRead = document.createElement("button");
        changeRead.classList.add("change-read");
        changeRead.textContent = "Change Read Status"
        changeRead.addEventListener("click", (e) => {
            element.read == "Read" ? element.read = "Not read" : element.read = "Read";
            displayBooks();
        });
        buttonDiv.appendChild(changeRead);
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
    let formIndex = myLibrary.length;

    formRead ? formRead = "Read" : formRead = "Not read";

    if (formName != "" && formAuthor != "" && formPages != "") {
        addBookToLibrary(formName, formAuthor, formPages, formRead, formIndex);
        displayBooks();
        dialog.close();
    }
});