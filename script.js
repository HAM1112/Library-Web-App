

let myLibrary = [];

const btn = document.getElementById('btn');
btn.addEventListener('click',addBookTOLibrary)

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; // read is of boolean type
}

const harryPotter = new Book('Harry Potter', 'J.K.Rowling', 4100, true);
myLibrary.push(harryPotter);
const hobbit = new Book('Hobbit','J. R. R. Tolkien', 304, false);
myLibrary.push(hobbit);

function addBookTOLibrary(){
    const title = prompt('title : ',);
    const author = prompt('author : ',);
    const pages = prompt('pages : ',);
    const read = prompt('read : ',);
    
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);


    for(item = 2; item < myLibrary.length; item++ ) {
        let createDiv = document.createElement('div');
        createDiv.classList.add('test');
        createDiv.innerHTML = `<h2>${myLibrary[item].title}</h2>
                            <span>${myLibrary[item].author}</span><br>
                            <span>${myLibrary[item].pages}</span><br>
                            <span>${myLibrary[item].read}</span>` ;
        div_title.appendChild(createDiv)
        console.log(item)
    };
}

const div_title = document.getElementById('title');
const div_author = document.getElementById('author');
const div_pages = document.getElementById('pages');
const div_read = document.getElementById('read');


myLibrary.forEach(item => {
    let createDiv = document.createElement('div');
    createDiv.classList.add('test');
    createDiv.innerHTML = `<h2>${item.title}</h2>
                        <span>${item.author}</span><br>
                        <span>${item.pages}</span><br>
                        <span>${item.read}</span>` ;
    div_title.appendChild(createDiv)
    console.log(item)
});