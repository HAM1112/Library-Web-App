

let myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read  // read is of boolean type
}

//const harryPotter = new Book('Harry Potter', 'J.K.Rowling', 4100, true);
//myLibrary.push(harryPotter);
//const hobbit = new Book('Hobbit','J.R.R. Tolkien', 304, false);
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
    
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    
    render()
    //createbook()
    document.getElementById('book-form').reset()
    
}
//displayBooks()
//render()



function createbook(item){
    
    let main = document.getElementById('main');
    let card = document.createElement('div');
    let card_title = document.createElement('h2')
    let card_author = document.createElement('p')
    let card_pages = document.createElement('p')
    let card_read = document.createElement('button');
    let card_remove = document.createElement('button');
    
    card.setAttribute('id', myLibrary.indexOf(item))
    card.classList.add('card')
    
    card_title.innerHTML = `${item.title}`
    card.appendChild(card_title);
    
    card_author.innerHTML = `Author : ${item.title}`
    card.appendChild(card_author)
    
    card_pages.innerHTML = `No.Pages : ${item.pages}`
    card.appendChild(card_pages)
    
    card_read.setAttribute('id','ReadBtn');
    if(item.read == false){
        card_read.innerHTML = `Not Read`
        card_read.classList.add('readoff')
    }
    else{
        card_read.innerHTML = `Read`
        card_read.classList.add('readon')
        //console.log(item.read);
    }
    card.appendChild(card_read);
    
    
    
    card_remove.innerHTML = `Remove`;
    card_remove.setAttribute('id','removeBtn');
    card.appendChild(card_remove);
    
    // button event listener
    
    card_remove.addEventListener('click',()=>{
        console.log("rm btn is working" + item);
        myLibrary.splice(myLibrary.indexOf(item),1);
        render()
    })

    card_read.addEventListener('click',()=>{
        item.read = !item.read;
        render()
    })
    
    //render();
    main.appendChild(card);

}

function render() {
    const library = document.getElementById('main');
    const card = document.querySelectorAll('.card');
    card.forEach( card => library.removeChild(card));
   
    for (let i=0; i<myLibrary.length; i++){
        createbook(myLibrary[i]);
    }
}












// testing


function toCapitalize(str) {
    let capita = str[0].toUpperCase();
    for (let index = 1; index < str.length; index++) {
        if(str[index] != " " && str[index - 1] == " "){capita += str[index].toUpperCase();}
        else{capita += str[index]}}
    return capita;
}