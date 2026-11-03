const myLibrary = [];

//constructor
function Book(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    //this.pages = pages;
    //this.read = read;

    function info() {
        console.log(this.title + "by" + this.author)
    }
}


function addBookToLibrary(title, author) {
    const id = crypto.randomUUID(); // Generate a unique ID for the book
    const newBook = new Book(id, title, author);
    myLibrary.push(newBook);
    displayBook(newBook); // Display the newly added book
}

function displayBook(book) {
    const bookCollection = document.querySelector('.book-collection');
    const template = document.getElementById('book-card-template');
    const bookCard = template.content.cloneNode(true);
    bookCard.querySelector('.book-title').textContent = book.title  //fillo i dati
    bookCard.querySelector('.book-author').textContent = book.author
    bookCollection.append(bookCard)
}


function displayBooks() {
    const bookCollection = document.querySelector('.book-collection');
    const template = document.getElementById('book-collection-template');

    //bookCollection.innerHTML = ''; //clears to avoid duplicates (better way to do this?)

    myLibrary.forEach((book) => {
        const bookCard = template.content.cloneNode(true); //crea working copy fresh del template
        bookCard.querySelector('.book-title').textContent = book.title  //fillo i dati
        bookCard.querySelector('.book-author').textContent = book.author
        bookCollection.append(bookCard)
    });
}

//bind page elements
const openFormButton = document.getElementById('open-form-button');
const bookForm = document.getElementById('book-form');
const bookDialog = document.getElementById('book-dialog');

//listen on openFormBtn, open the form (showModal for the dialog)
openFormButton.addEventListener('click', () => {
    bookDialog.showModal();
});

//listen for the 'submit' event on the form itself
bookForm.addEventListener('submit', (e) => {

    // create book logic
    addBookToLibrary(bookForm.title.value, bookForm.author.value);

    // 3. Stop the browser from refreshing the page
    e.preventDefault();

    // 4. Close the modal dialog when submitted
    bookDialog.close();
    
    // (Optional) Clear the form inputs for next time
    bookForm.reset();

});


console.log("SONO LINKATO A BOOKS.JS");
