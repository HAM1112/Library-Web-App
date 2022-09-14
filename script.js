

let myLibrary = [];


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

let SubmitBtn = document.getElementById('submitbtn');
SubmitBtn.addEventListener('click',addBookTOLibrary)

function addBookTOLibrary(){
    const title = prompt('title : ',);
    const author = prompt('author : ',);
    const pages = prompt('pages : ',);
    const read = prompt('read : ',);
    
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);

    displayBooks();
}


const main = document.getElementById('main');
myLibrary.forEach(item => {
    let card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `<div><h3>${item.title}</h3><p>${item.author}</p><p>${item.pages}</p><div></div>${item.read}</div>` ;
    main.appendChild(card)
    console.log(item)
});


function displayBooks(){
    
    for(item = 2; item < myLibrary.length; item++ ) {
        
        let card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `<div><h3>${myLibrary[item].title}</h3><p>${myLibrary[item].author}</p><p>${myLibrary[item].pages}</p><div></div>${myLibrary[item].read}</div>`

        main.appendChild(card)
        
    };
}