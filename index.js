let myLibrary = [];

function Book(title, author, pages, rating, read, id) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.rating = rating;
    this.read = read;
    

};

Book.prototype.toggleRead = function(){
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, rating, read, id){
    return new Book(title, author, pages, rating, read, id);
}

book_001 = addBookToLibrary('Shinning', 'Stephen King', '278', 8.7, true, crypto.randomUUID());
book_002 = addBookToLibrary('It', 'Stephen King', '1138', 8.5, true, crypto.randomUUID());
book_003 = addBookToLibrary('1984', 'George Orwell', '328', 8.8, true, crypto.randomUUID());
book_004 = addBookToLibrary('Animal Farm', 'George Orwell', '112', 8.0, true, crypto.randomUUID());
book_005 = addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '310', 9.3, true, crypto.randomUUID());
book_006 = addBookToLibrary('The Lord of the Rings', 'J.R.R. Tolkien', '1178', 9.4, true, crypto.randomUUID());
book_007 = addBookToLibrary('Fahrenheit 451', 'Ray Bradbury', '194', 7.3, true, crypto.randomUUID());
book_008 = addBookToLibrary('Brave New World', 'Aldous Huxley', '268', 7.7, true, crypto.randomUUID());
book_009 = addBookToLibrary('Dune', 'Frank Herbert', '412', 8.7,  true, crypto.randomUUID());
book_010 = addBookToLibrary('The Catcher in the Rye', 'J.D. Salinger', '277', 8.1,  true, crypto.randomUUID());



myLibrary.push(book_001, book_002, book_003, book_004, book_005, book_006, book_007, book_008, book_009, book_010);


const container = document.querySelector('.container');


// Display data from JavaScript 

const books = document.querySelector('.books');

// Put this in a function!
function displayBooks(){
    // Clear the container of data every time the function is called 
    books.innerHTML = '';
    // Loop thru the myLibrary array and create a card element for each remaining book
    myLibrary.forEach(bookData => {
    const div = document.createElement('div');
    div.className = 'book';
        div.innerHTML = `
            <p>Title:<h3> ${bookData.title}</h3></p>
            <p>Author:<h3> ${bookData.author}</h3></p>
            <p>Pages:<h3> ${bookData.pages}</h3></p>
            <p>Rating:<h3> ${bookData.rating}</h3></p>
            <p>Read:<h3> ${bookData.read}</h3></p>
        `; 
    div.style.border = '5px solid black';
    div.style.borderRadius = '12px';
    div.style.backgroundColor = 'white';
    div.style.fontSize = '24px';
    div.style.padding = '20px';

    // Create a delete botton for each book
    const bookBtn = document.createElement('div');
    bookBtn.className = 'btn-small';
    bookBtn.textContent = 'Delete this book';
    bookBtn.dataset.id = `${bookData.id}`;

    // Create a toggle read button for each book 
    const toggleBtn = document.createElement('div');
    toggleBtn.className = 'btn-toggle';
    toggleBtn.textContent = 'Read?';


    

    // Listen for a click on each book and filter the book with the right id from the array, the original array stayes the same!
    bookBtn.addEventListener('click', (e) => {
            const id = e.currentTarget.dataset.id;
            myLibrary = myLibrary.filter(book => book.id !== id);
            displayBooks(); 
    });
    
    
    div.appendChild(bookBtn);
    div.appendChild(toggleBtn);
    books.appendChild(div);
    
    })
    // Create a button on the main page to display the form section
    const button = document.createElement('div');
    button.className = 'btn';
    button.innerHTML = `<p class='btn-text'>Add your favorite books</p>`;
    books.appendChild(button); 

    let isOpen = false;

    // Shows / Hides the form.
    button.addEventListener('click', () => {
        if (!isOpen) {
            displayForm();
            isOpen = true;
        } else {
            hideForm();
            isOpen = false;
        }
    });
}


function displayForm(){
    const container = document.querySelector('.container');
    const div = document.createElement('div');
    div.className = 'submit_form';
        div.innerHTML = `
        <div className="input-title">
            <p class="form-title">Add your favorite book</p>
        </div>
        <form class="form">
            <div class="fields">
                
                    <div class="field">
                        <label>Title</label>
                        <input type="text" class="book-title">
                    </div>
                    <div class="field">
                        <label>Author</label>
                        <input type="text" class="author">
                    </div>
                    <div class="field">
                        <label>Pages</label>
                        <input type="number" class="pages">
                    </div>
                    <div class="field">
                        <label>Rating</label>
                        <input type="number" min="0" 
                        max="1000" step="0.01"class="rating">
                    </div>
            </div>
            <button type="submit">Add to Library</button>
        </form>
    `;
        container.appendChild(div);
}


function hideForm() {
    const form = document.querySelector('.submit_form');
    if (form) form.remove();
}

// Because we can't communicate with the json database without a server the button press won't do anything but clear the users input
const form = document.querySelector('.form');
//  form.addEventListener('submit', handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    e.target.reset();
}

displayBooks();

// TODO: Create a JSON Database to store the differert books 
// TODO: Create a button that will relocate the user to the page where he can 
// write his own book, the button will comunicate with the database, adding the 
// book to it

// Display data from the database 
// fetch('./db.json')
//     .then(res => res.json())
//     .then(data => {
//         // Request calls the function
//         displayBooks(data.books);
//     })
    


// function displayBooks(books){
//     const container = document.querySelector('.books');

//     books.forEach(book => {
//         const div = document.createElement('div');
//         div.className = 'book';
//         div.innerHTML = `
//             <p>Title:<h3> ${book.title}</h3></p>
//             <p>Author:<h3> ${book.author}</h3></p>
//             <p>Pages:<h3> ${book.pages}</h3></p>
//             <p>Rating<h3> ${book.rating}</h3></p>
//             <button>Remove from library</button>
//         `;  
        

//         container.appendChild(div);
        
// })  
 
