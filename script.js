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
      btnShow = document.getElementById('showList');

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
   this.beenRead = false;
}

btnShow.addEventListener('click', () => {
   displayBooks();
});

btnAdd.addEventListener('click', () => {
   addBookToLibrary();
});

function addBookToLibrary() {
   const listLine = document.createElement('li');
   const btnRemove = document.createElement('button');
   const btnRead = document.createElement('button');

   listings.appendChild(listLine);
   listLine.appendChild(btnRemove);
   listLine.appendChild(btnRead);

   btnRemove.textContent = "Delete";
   btnRead.textContent = "Mark as read";

   // Associate new book with library[]

   // Add form
   
   btnRemove.addEventListener('click', () => {
      listLine.remove;
   });
   btnRead.addEventListener('click', )
}

function displayBooks() {
   library.forEach(function(book) {
      const showLine = document.createElement('li');
      show.appendChild(showLine);
      showLine.textContent = `Author: ${book.author}; 
                              Title: ${book.title}; 
                              Num of Pages: ${book.numPages}; `;
      if(book.beenRead) {
         showLine.textContent += `Has been read.`;
      } else {
         showLine.textContent += `Has not been read.`;
      }
      });
}

