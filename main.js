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
        //Call the displayLibrary function to display the books
        displayLibrary();
        //Reset the input content
        form.reset();
        //Change the formContainer display back to hidden
        formContainer.classList.add("d-none");
        //Prevent the form from refreshing the page
        e.preventDefault();
    });
}
function displayLibrary() {
    //Query select the row div that will contain all the book cols
    const row = document.querySelector(".row");
    //Remove all the row child elements to reset the library
    removeAllChildNodes(row);
    //Loop through every book object in the myLibrary array
    for (let i = 0; i < myLibrary.length; i++) {
        //Create the col div that will contain the card
        const col = document.createElement("div");
        col.classList.add("col");
        //Create a card div that will contain the card body
        const card = document.createElement("div");
        card.classList.add("card", "text-white", "text-center", "bg-secondary");
        //Give every book a dataset index according to their array position
        card.dataset.index = i;
        //Create a card body div that will contain all book informations
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        //Create the h5 book title element
        const bookTitleContainer = document.createElement("h5");
        bookTitleContainer.classList.add("display-4");
        const bookTitle = document.createTextNode(myLibrary[i].title);
        bookTitleContainer.appendChild(bookTitle);
        //Create the h6 book author element
        const bookAuthorContainer = document.createElement("h6");
        bookAuthorContainer.classList.add("display-5");
        const bookAuthor = document.createTextNode(`by ${myLibrary[i].author}`);
        bookAuthorContainer.appendChild(bookAuthor);
        //Create the p book pages element
        const bookPagesContainer = document.createElement("p");
        bookPagesContainer.classList.add("display-6");
        const bookPages = document.createTextNode(myLibrary[i].pages);
        bookPagesContainer.appendChild(bookPages);
        //Create the read status button
        const readStatusContainer = document.createElement("button");
        //If the book is read give it a green background and text 'Read'
        if (myLibrary[i].isRead) {
            readStatusContainer.classList.add("btn", "btn-success");
            const readStatus = document.createTextNode("Read");
            readStatusContainer.appendChild(readStatus);
        }
        //Else give it a yellow background and text 'Not Read'
        else {
            readStatusContainer.classList.add("btn", "btn-warning");
            const readStatus = document.createTextNode("Not Read");
            readStatusContainer.appendChild(readStatus);
        }
        //Create the remove button
        const removeBtnContainer = document.createElement("button");
        removeBtnContainer.classList.add("btn", "btn-danger");
        const removeBtn = document.createTextNode("Remove");
        removeBtnContainer.appendChild(removeBtn);
        //Append all elements to the card body
        cardBody.appendChild(bookTitleContainer);
        cardBody.appendChild(bookAuthorContainer);
        cardBody.appendChild(bookPagesContainer);
        cardBody.appendChild(readStatusContainer);
        cardBody.appendChild(removeBtnContainer);
        //Append the card body to the card
        card.appendChild(cardBody);
        //Append the card to the col
        col.appendChild(card);
        //Append the col to the row
        row.appendChild(col);
    }
}
//Create the removeAllChildNodes that remove all child elements of a parent node
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
