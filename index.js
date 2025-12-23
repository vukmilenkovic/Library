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

myLibrary.push(book_001);