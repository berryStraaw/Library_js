let library=[];

function Book(title,author,pages,hasRead){
    this.title=title
    this.author=author
    this.pages=pages
    this.hasRead=hasRead
}

Book.prototype.info=function(){
    string=this.title+" by " + this.author +", " +this.pages+ " pages, "

        if(this.hasRead)string+="has read";
        else string+="not read";

        return string;
}


function addBook(book){
    library.push(book);
}

function createBook(){
    const title=document.querySelector('#title').value;
    const author=document.querySelector('#author').value;
    const pages=document.querySelector('#pages').value;
    let hasRead=document.querySelector('#hasRead').value;
    if(hasRead=="true")hasRead=true;
    else hasRead=false;
    const book= new Book(title, author, pages, hasRead);
    addBook(book);
    display();
}

function display(){
    const bookList=document.querySelector('.books');
    bookList.innerHTML="";
    library.forEach(element => {
        const div=document.createElement('div');
        div.innerHTML=element.info();
        bookList.appendChild(div);
    });
}

const book1= new Book("hobbitzes", "danny", 15, false);

addBook(book1);

display();