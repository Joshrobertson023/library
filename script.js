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
const listings = document.getElementById('listings'),
      show = document.getElementById('show'),
      btnAdd = document.getElementById('add'),
      btnShow = document.getElementById('showList'),
      dialog = document.querySelector('dialog'),
      btnOK = document.querySelector('dialog button');

/**********************************************************************/
/*                          Global variables                          */
/**********************************************************************/


/**********************************************************************/
/*                            Main progrma                            */
/**********************************************************************/

const library = [
   {
      author: "Josh Robertson",
      title: "Los Peces Betta",
      numPages: 96,
      beenRead: true,
   }
];

function Book(author, title, numPages, beenRead) {
   this.author = author;
   this.title = title;
   this.numPages = numPages;
   this.beenRead = beenRead;
}

btnAdd.addEventListener('click', () => {
   dialog.showModal();

   let addBookForm = document.getElementById('addBookForm');

   addBookForm.addEventListener("submit", (e) => {
      e.preventDefault();

      let author = document.getElementById('inputAuthor');
      let title = document.getElementById('inputTitle');
      let number = document.getElementById('inputNumber');
      let read = document.getElementById('inputRead');

      if(author.value === "" || title.value === "" || number.value === "") {
         alert("Make sure all fields are filled.");
      } else {
         addBookToLibrary(author.value, title.value, number.value, read.checked);
         author.value = "";
         title.value = "";
         number.value = "";
         read.checked = false;
         dialog.close();
      }
   });
});

function addBookToLibrary(author, title, number, read) {
   let book = new Book(author, title, number, read);
   console.log(book);
   displayBooks();
   
   // Associate new book with library[]
}

function displayBooks() {
   library.forEach(function(book) {
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

      updateDiv(divText, book.author, book.title, book.numPages, book.beenRead)

      btnRemove.addEventListener('click', () => {
         showLine.remove();
      })
      btnRead.addEventListener('click', () => {
         if(book.beenRead) {
            book.beenRead = false;
         } else {
            book.beenRead = true;
         }
         updateDiv(divText, book.author, book.title, book.numPages, book.beenRead);
      })
   });
}

function updateDiv(divText, author, title, pages, read) {
   divText.textContent = '';
   divText.textContent = `Author: ${author}; 
   Title: ${title}; 
   Num of Pages: ${pages}; `;
   if(read) {
      divText.textContent += `Has been read.`;
   } else {
      divText.textContent += `Has not been read.`;
   }
}