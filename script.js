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

function createBook(event){
    
    if(!title.validity.valid){
        showError();
        return;
    }
    const titlev=document.querySelector('#title').value;
    const authorv=document.querySelector('#author').value;
    const pagesv=document.querySelector('#pages').value;
    let hasRead=document.querySelector('#hasRead').value;
    if(hasRead=="true")hasRead=true;
    else hasRead=false;
    const book= new Book(titlev, authorv, pagesv, hasRead);
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
        //changeBtn.onclick=element.changeRead.bind();
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


const form  = document.getElementsByTagName('form')[0];
const title = document.getElementById('title');
const author = document.getElementById('author');
const authorError = document.querySelector('#author + span.error');
const titleError = document.querySelector('#title + span.error');

console.log(form); 
title.addEventListener('input', (event)=>{
    if(title.validity.valid){
        titleError.textContent='';
        titleError.className='error';
    }
    else{
        showError();
    }
});

author.addEventListener('input', (event)=>{
    if(author.validity.valid){
        authorError.textContent='';
        authorError.className='error';
    }
    else{
        showError();
    }
});


function showError(){
    if(title.validity.valueMissing){
        titleError.textContent="you need a title";
    }
    else if(title.validity.typeMismach){
        titleError.textContent="Must be letters and numbers only";
    }
    else if (title.validity.tooShort) {
        // If the data is too short,
        // display the following error message.
        titleError.textContent = `Title should be at least ${title.minLength} characters; you entered ${title.value.length}.`;
      }
    titleError.className="error active";
}