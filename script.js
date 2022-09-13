console.log("happy bday");

let myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookTOLibrary(){
    let title = prompt('title : ',);
    let author = prompt('author : ',);
    let pages = prompt('pages : ',);
    let read = prompt('read : ',);
    let book = new Book(title, author, pages, read)
}




