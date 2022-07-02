//Initiate the myLibrary array
let myLibrary = [];
//Call the functions
addBookToLibrary();
//Create the Book constructor
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}
//Create the addBookToLibrary function
function addBookToLibrary() {
    //Query select the addNewBook button, the form and the form container
    const addNewBook = document.querySelector("#newBook");
    const formContainer = document.querySelector("#formContainer");
    const form = document.querySelector("form");
    //Add a click event listener to the button that displays the form
    addNewBook.addEventListener("click", () => {
        formContainer.classList.remove("d-none");
    });
    //Add a submit event listener to the form that creates a new Book object and adds it to the library
    form.addEventListener("submit", (e) => {
        //Query select all the form inputs
        const bookTitle = document.querySelector("#bookTitle");
        const bookAuthor = document.querySelector("#bookAuthor");
        const bookPages = document.querySelector("#bookPages");
        const isRead = document.querySelector("#isRead").checked;
        //Create the new Book object and add it to the library
        const book = new Book(
            bookTitle.value,
            bookAuthor.value,
            bookPages.value,
            isRead
        );
        myLibrary.push(book);
        //Reset the input content
        form.reset();
        //Change the formContainer display back to hidden
        formContainer.classList.add("d-none");
        //Prevent the form from refreshing the page
        e.preventDefault();
    });
}
