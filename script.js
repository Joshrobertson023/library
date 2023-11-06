/**********************************************************************/
/*                                                                    */
/* Program name: Library                                              */
/* Date:         November 3, 2023                                     */
/* Author:       Josh Robertson                                       */
/*                                                                    */
/*                                                                    */
/**********************************************************************/

/**********************************************************************/
/*                            DOM constants                           */
/**********************************************************************/
const show = document.getElementById('show'),
      btnAdd = document.getElementById('add'),
      dialog = document.querySelector('dialog'),
      btnOK = document.querySelector('dialog button');

/**********************************************************************/
/*                          Global variables                          */
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
   const showLine = document.createElement('li');
   const divText = document.createElement('div');
   show.appendChild(showLine);
   
   const btnRemove = document.createElement('button');
   const btnRead = document.createElement('button');
   
   showLine.appendChild(divText);
   showLine.appendChild(btnRemove);
   showLine.appendChild(btnRead);
   
   btnRemove.textContent = "Delete";
   btnRead.textContent = "Mark as read";
   
   updateDiv(divText, btnRead, book.author, book.title, book.pages, book.read);
   
   btnRemove.addEventListener('click', () => {
      showLine.remove();
      removeBookFromLibrary(book);
      // Remove book from library array
   })
   btnRead.addEventListener('click', () => {
      if(book.read) {
         book.read = false;
      } else {
         book.read = true;
      }
      updateDiv(divText, btnRead, book.author, book.title, book.pages, book.read);
   })
}

function removeBookFromLibrary(book) {
   let bookIndex = library.indexOf(book);
   library.splice(bookIndex, 1);
}

function updateDiv(divText, btnRead, author, title, pages, read) {
   divText.textContent = '';
   divText.textContent = `Author: ${author}; 
   Title: ${title}; 
   Num of Pages: ${pages}; `;
   if(read) {
      divText.textContent += `Has been read.`;
      btnRead.textContent = 'Mark as unread'
   } else {
      divText.textContent += `Has not been read.`;
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