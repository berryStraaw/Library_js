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

Book.prototype.changeRead=function(){
    if(this.hasRead) this.hasRead=false;
    else this.hasRead=true;
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
    library.forEach((element, index) => {
        const div=document.createElement('div');

        const delBtn=document.createElement('button');
        delBtn.innerHTML="Delete Book"
        delBtn.onclick=function(){library.splice(index,1);display();};

        const changeBtn=document.createElement('button');
        changeBtn.innerHTML="change read status";
        changeBtn.onclick=function(){element.changeRead();display();}
        

        div.innerHTML=element.info();
        div.appendChild(delBtn);
        div.appendChild(changeBtn);
        bookList.appendChild(div);
    });
}

const book1= new Book("hobbitzes", "danny", 15, false);

addBook(book1);

display();