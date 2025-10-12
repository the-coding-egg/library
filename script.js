const myLibrary = [];

function Book(id, name, author, pages, read) {
  this.id = id;
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${this.name} by ${this.author}, ${pages}, ${read}.`;
  };
}

function addBookToLibrary(name, author, pages, read) {
  let id = self.crypto.randomUUID();
  let newBook = new Book(id, name, author, pages, read);

  myLibrary.push(newBook);
}

//add the books to the array
addBookToLibrary("Moby Dick", "Herman Melville", 342, "read");
addBookToLibrary("Project Hail Mary", "Andy Weir", 496, "read");
addBookToLibrary("The Creative Act", "Rick Ruben", 300, "read");

// display the books in the console
console.log(myLibrary);

const resetButton = document.querySelector(".resetbutton");
const submitButton = document.querySelector(".submitbutton");

// display books onto pages
// need to run a for loop and display each element in array
for (let book in myLibrary) {
  const bookSection = document.querySelector(".book");

  const bookDisplay = document.createElement("div");
  bookDisplay.classList.add("bookdisplay");
  bookDisplay.textContent = myLibrary;

  bookSection.appendChild(bookDisplay);
}
