const myLibrary = [];

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
};

function addBookToLibrary(title, author, pages, read, id){
    return new Book(title, author, pages, read, id);
}

book_001 = addBookToLibrary('Shinning', 'Stephen King', '278', true, crypto.randomUUID());
book_002 = addBookToLibrary('It', 'Stephen King', '1138', true, crypto.randomUUID());
book_003 = addBookToLibrary('1984', 'George Orwell', '328', true, crypto.randomUUID());
book_004 = addBookToLibrary('Animal Farm', 'George Orwell', '112', false, crypto.randomUUID());
book_005 = addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '310', true, crypto.randomUUID());
book_006 = addBookToLibrary('The Lord of the Rings', 'J.R.R. Tolkien', '1178', true, crypto.randomUUID());
book_007 = addBookToLibrary('Fahrenheit 451', 'Ray Bradbury', '194', false, crypto.randomUUID());
book_008 = addBookToLibrary('Brave New World', 'Aldous Huxley', '268', true, crypto.randomUUID());
book_009 = addBookToLibrary('Dune', 'Frank Herbert', '412', true, crypto.randomUUID());
book_010 = addBookToLibrary('The Catcher in the Rye', 'J.D. Salinger', '277', false, crypto.randomUUID());



myLibrary.push(book_001, book_002, book_003, book_004, book_005, book_006, book_007, book_008, book_009, book_010);



// Display data from JavaScript 

// const books = document.querySelector('.books');

// myLibrary.forEach(bookData => {
//     const book = document.createElement('div');
//     book.className = 'book';
//     book.innerHTML = `
//         <p>Title:<h3> ${bookData.title}</h3></p>
//         <p>Author:<h3> ${bookData.author}</h3></p>
//         <p>Pages:<h3> ${bookData.pages}</h3></p>
//         <p>I read it?<h3> ${bookData.read}</h3></p>
//     `;
//     book.style.border = '5px solid black';
//     book.style.borderRadius = '12px';
//     book.style.backgroundColor = 'white';
//     book.style.fontSize = '24px';
//     book.style.padding = '20px';

//     books.appendChild(book);
// })



// TODO: Create a JSON Database to store the differert books 
// TODO: Create a button that will relocate the user to the page where he can 
// write his own book, the button will comunicate with the database, adding the 
// book to it

// Display data from the database 
fetch('./db.json')
    .then(res => res.json())
    .then(data => {
        // Request calls the function
        displayBooks(data.books);
    })
    


function displayBooks(books){
    const container = document.querySelector('.books');

    books.forEach(book => {
        const div = document.createElement('div');
        div.className = 'book';
        div.innerHTML = `
            <p>Title:<h3> ${book.title}</h3></p>
            <p>Author:<h3> ${book.author}</h3></p>
            <p>Pages:<h3> ${book.pages}</h3></p>
            <p>I read it?<h3> ${book.read}</h3></p>
        `;
        div.style.border = '5px solid black';
        div.style.borderRadius = '12px';
        div.style.backgroundColor = 'white';
        div.style.fontSize = '24px';
        div.style.padding = '20px';

        container.appendChild(div);
        
})  
    

}

function displayForm(){
    const books = document.querySelector('.books');
    const container = document.querySelector('.container');

    // Create a new div on the right side of the page
    const div = document.createElement('div');

    // Add html to the new element
    div.className = 'submit_form';
    div.innerHTML = `
        <div class="form">
                <div class="fields">
                        <div class="column">
                            <div class="field">
                                <label for="first_name">FIRST NAME</label>
                                <input type="text" name="first_name" id="first_name">
                            </div>
                            <div class="field">
                                <label for="email">EMAIL</label>
                                <input type="email" name="email" id="email">
                            </div>
                            
                            <div class="field">
                                <label for="password">PASSWORD</label>
                                <input type="password" name="password" id="password" class="password" minlength="4" maxlength="16">
                            </div>
                        </div>
                    <div class="column">
                        <div class="field">
                            <label for="last_name">LAST NAME</label>
                            <input type="text" name="first_name" id="last_name">
                        </div>
                        <div class="field">
                            <label for="phone_number">PHONE NUMBER</label>
                            <input type="number" name="phone_number" id="phone_number">
                        </div>
                        <div class="field">
                            <label for="confirm_password">CONFIRM PASSWORD</label>
                            <input type="password" name="confirm_password" id="confirm_password" minlength="4" maxlength="16" class="confirm_password">
                        </div>
                    </div>
                </div>
            </div>
    `;

    // Style the html above 
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    div.style.gap = '30px';
    div.style.position = 'absolute';
    div.style.top = '50%';
    div.style.bottom = '50%';
    div.style.width = '780px';
    div.style.height = '920px';
    div.style.backgroundColor = 'white'

    container.removeChild(books);
    container.appendChild(div);

}
