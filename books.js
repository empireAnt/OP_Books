const myLibrary = [];

//constructor
function Book(title, author) {
    this.title = title;
    this.author = author;
    //this.pages = pages;
    //this.read = read;

    function info() {
        console.log(this.title + "by" + this.author)
    }
}


function addBookToLibrary(title, author) {
    const newBook = new Book(title, author)
    myLibrary.push(newBook)
}


//bind page elements
const openFormButton = document.getElementById('open-form-button')
const bookForm = document.getElementById('book-form');
const bookDialog = document.getElementById('book-dialog');

//listen on openFormBtn, open the form (showModal for the dialog)
openFormButton.addEventListener('click', () => {
    bookDialog.showModal();
});

//listen for the 'submit' event on the form itself
bookForm.addEventListener('submit', (e) => {

    // create book logic
    addBookToLibrary(bookForm.title.value, bookForm.author.value)

    // 3. Stop the browser from refreshing the page
    e.preventDefault();

    // 4. Close the modal dialog when submitted
    bookDialog.close();
    
    // (Optional) Clear the form inputs for next time
    bookForm.reset();
});


console.log("SONO LINKATO A BOOKS.JS")
