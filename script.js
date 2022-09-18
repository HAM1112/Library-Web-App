

let myLibrary = [];
let main = document.getElementById('main');
let readCheck = document.getElementsByClassName('btnRead')
readCheck.classList.add('')


function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if(read == true){
      this.read = "Read"  
    }
    else{
        this.read = "Not read"
    } // read is of boolean type
}

const harryPotter = new Book('Harry Potter', 'J.K.Rowling', 4100, true);
//myLibrary.push(harryPotter);
const hobbit = new Book('Hobbit','J.R.R. Tolkien', 304, false);
//myLibrary.push(hobbit);

let SubmitBtn = document.getElementById('submitbtn');
SubmitBtn.addEventListener('click',addBookTOLibrary)

function addBookTOLibrary(){
    const title = toCapitalize(document.getElementById('title').value);
    const author = toCapitalize(document.getElementById('author').value);
    const pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;

    if(title === "" || author == "" || pages ==""){
        return console.log("error")
    }
    else{
        if(read == true){
            console.log('trueeeee')
        }

        let book = new Book(title, author, pages, read);
        myLibrary.push(book);
        displayBooks();
        
    }

    
}
//displayBooks()

function displayBooks(){
    
    let card = document.createElement('div');
    card.classList.add('card')
    
    myLibrary.forEach(element => {

        card.innerHTML = `
            <div>
                <h2>${element.title}</h2>
                <p>Author : ${element.author}</p>
                <p>No.pages : ${element.pages}</p>
                <button class="btnRead">${element.read}</button>
                <button id="BtnRemoveBook"> Remove </button> 
            </div>
            `
        main.appendChild(card);

        console.log(element)
    });
}















// testing


function toCapitalize(str) {
    let capita = str[0].toUpperCase();
    for (let index = 1; index < str.length; index++) {
        if(str[index] != " " && str[index - 1] == " "){capita += str[index].toUpperCase();}
        else{capita += str[index]}}
    return capita;
}