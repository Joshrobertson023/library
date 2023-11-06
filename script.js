/**********************************************************************/
/*                                                                    */
/* Program name: Library                                              */
/* Date:         November 3, 2023                                     */
/* Author:       Josh Robertson                                       */
/*                                                                    */
/* This is a simple library. There is one button to add a book to the */
/* library, then a form appears and the user can enter the book's     */
/* author, title, number of pages, and check if it has been read or   */
/* not. When the form is submitted the book is added to the library   */
/* and added to the list of books. Next to each book listing is a     */
/* delete button and a button to change the read status.              */
/*                                                                    */
/**********************************************************************/

/**********************************************************************/
/*                            DOM constants                           */
/**********************************************************************/
const show = document.querySelector('.content'),
      btnAdd = document.getElementById('add'),
      dialog = document.querySelector('dialog'),
      btnOK = document.querySelector('.secondary');

/**********************************************************************/
/*                          Global declarations                       */
/**********************************************************************/
let library = [];

function Book(author, title, pages, read) {
   this.author = author;
   this.title = title;
   this.pages = pages;
   this.read = read;
}

/**********************************************************************/
/*                              Functions                             */
/**********************************************************************/
function addBookToLibrary(author, title, number, read) {
   let book = new Book(author, title, number, read);
   library.unshift(book);
   console.log(library);
   displayBook(book);
}

function displayBook(book) {
   const card = document.createElement('div');
   card.classList.add('card');
   const authorText = document.createElement('p'),
         titleText = document.createElement('p'),
         pagesText = document.createElement('p'),
         readText = document.createElement('p');
   show.appendChild(card);
   
   const btnRemove = document.createElement('button');
   btnRemove.classList.add('card-button');
   const btnRead = document.createElement('button');
   btnRead.classList.add('card-button');
   
   card.appendChild(authorText);
   card.appendChild(titleText);
   card.appendChild(pagesText);
   card.appendChild(readText);
   card.appendChild(btnRemove);
   card.appendChild(btnRead);
   
   btnRemove.textContent = "Delete";
   btnRead.textContent = "Mark as read";
   
   updateDiv(authorText, titleText, pagesText, readText, btnRead, book.author, book.title, book.pages, book.read);
   
   btnRemove.addEventListener('click', () => {
      card.remove();
      removeBookFromLibrary(book);
   })

   btnRead.addEventListener('click', () => {
      if(book.read) {
         book.read = false;
      } else {
         book.read = true;
      }
      updateDiv(authorText, titleText, pagesText, readText, btnRead, book.author, book.title, book.pages, book.read);
   })
}

function removeBookFromLibrary(book) {
   let bookIndex = library.indexOf(book);
   library.splice(bookIndex, 1);
}

function updateDiv(authorText, titleText, pagesText, readText, btnRead, author, title, pages, read) {
   authorText.textContent = `Author: ${author}`;
   titleText.textContent = `Title: ${title}`;
   pagesText.textContent = `Num of Pages: ${pages}`;
   if(read) {
      readText.textContent = `Read: Yes`;
      btnRead.textContent = 'Mark as unread'
   } else {
      readText.textContent = `Read: No`;
      btnRead.textContent = 'Mark as read';
   }
}

/**********************************************************************/
/*                            Main program                            */
/**********************************************************************/
btnAdd.addEventListener('click', () => {
   dialog.showModal();

   btnOK.addEventListener('click', () => {
      let author = document.getElementById('inputAuthor');
      let title = document.getElementById('inputTitle');
      let number = document.getElementById('inputNumber');
      let read = document.getElementById('inputRead');

      if(author.value == "" || title.value == "" || number.value == "") { // In case submitted multiple times
         dialog.close();
      } else {
         console.log(read.checked);
         addBookToLibrary(author.value, title.value, number.value, read.checked);
         author.value = "";
         title.value = "";
         number.value = "";
         read.checked = false;
      }
      dialog.close();
   });
});