

let myLibrary = [];
let main = document.getElementById('main');





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
    
    let card = document.createElement('div');
    card.classList.add('card')
    
    if(title === "" || author == "" || pages ==""){
        return console.log("error")
    }
    else{

        let book = new Book(title, author, pages, read);
        myLibrary.push(book);
        
    }

    
    let card_title = document.createElement('h2')
    card_title.innerHTML = `${title}`
    card.appendChild(card_title);
    
    let card_author = document.createElement('p')
    card_author.innerHTML = `Author : ${author}`
    card.appendChild(card_author)
    
    let card_pages = document.createElement('p')
    card_pages.innerHTML = `No.Pages : ${pages}`
    card.appendChild(card_pages)
    
    let card_read = document.createElement('button');
    card_read.setAttribute('id','ReadBtn');
    if(read == false){
        card_read.innerHTML = `Not Read`
        card_read.classList.add('readoff')
    }
    else{
        card_read.innerHTML = `Read`
        card_read.classList.add('readon')
    }
    card.appendChild(card_read);
    
    
    
    let card_remove = document.createElement('button');
    card_remove.innerHTML = `Remove`;
    card_remove.setAttribute('id','removeBtn');
    card.appendChild(card_remove);
    
    // button event listener
    
    let ReadBtn = document.getElementById('ReadBtn');
    if(ReadBtn){
        ReadBtn.addEventListener('click',()=>{
            console.log("hi");
        })
    }
    
    
    main.appendChild(card);
}
//displayBooks()


function changeRead(){
    console.log(read.checked)
}















// testing


function toCapitalize(str) {
    let capita = str[0].toUpperCase();
    for (let index = 1; index < str.length; index++) {
        if(str[index] != " " && str[index - 1] == " "){capita += str[index].toUpperCase();}
        else{capita += str[index]}}
    return capita;
}