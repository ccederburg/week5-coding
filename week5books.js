
class Book{
    constructor(title, author, genre){
        this.title = title;
        this.author = author;
        this.genre = genre;
    }

    saySomething() {
        console.log(`${this.title}`)
    }

    describeBook() {
        return `${this.title}, by ${this.author}, is a ${this.genre} book.`;
    }
}

class LibraryOfBooks {
    constructor(location) {
        this.location = location;
    }
    // Holds all of the books.
    library = [];
   
    // Makes a new book and adds to the library.
    addBook(title, author, genre) {
        this.library.push(new Book(title, author, genre))
    }
    
    // Deletes a book.   
    deleteBook(title) {
      let index = this.findBookIndex(title);
      this.library.splice(index, 1);


    }
    
    // Lists all the books.
    listBooks() {
        let list = '';
        for(let i = 0; i< this.library.length; i++) {
            list += this.library[i].title + ', \n'; 
         }
         return list;
        }

        
    //Describes the book.
    describeBook(title) {
        return this.findBook(title).describeBook();
        
       
    }

    findBook(title) {
        for(let i = 0; i < this.library.length; i++) {
            if(this.library[i].title === title) {
                return this.library[i];
            }
        }
    }

    findBookIndex(title) {
        for(let i = 0; i < this.library.length; i++) {
            if(this.library[i].title === title) {
                return i;
            }
        }
    }
}

class Menu{
    constructor() {
    this.library = new LibraryOfBooks(); 
    this.displayMenu();
}
displayMenu() {
    let menuText = `Choose an Option
    1) Add book.
    2) Remove book.
    3) List books.
    4) Describe book.
    5) Exit.`;

   let menuChoice = '';
    while(menuChoice !== 0) {
    menuChoice = prompt(menuText);
    switch (menuChoice) {
    case '1': 
    this.addBook();
         break;
    case '2':
    this.removeBook();
         break;
    case '3':
    this.listBooks();
         break;
    case '4':
    this.describeBook();
        break;
    default:
     alert('You chose to exit. Goodbye.');
   menuChoice = 0;
            }}
}

    addBook() {
        let title = prompt('What is the title?');
        let author = prompt('Who wrote it?');
        let genre = prompt('What is the genre?');
        this.library.addBook(title, author, genre);
        alert( `You added ${title}.`);
    }

    removeBook() {
        let title = prompt('What is the title?');
        this.library.deleteBook(title);
        alert(`You removed ${title}`);
    }
    listBooks() {
        alert(this.library.listBooks());
    }
    
    describeBook() {
        let title = prompt('What is the title?');
        alert(this.library.describeBook(title));
    }

}

// Kicks off the program
new Menu();

// console.log('running');
// let library = new LibraryOfBooks();
// library.addBook('Adelaide', 'Genevieve Wheeler', 'romance');
// console.log(library.describeBook('Adelaide'));
// console.log(library.listBooks());
// library.deleteBook('Adelaide');
// console.log(library.listBooks());