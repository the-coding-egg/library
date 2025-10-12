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

// console.log(mobyDick.info());
// console.log(hailMary.info());
// console.log(creativeAct.info());

function addBookToLibrary(name, author, pages, read) {
  let id = self.crypto.randomUUID();
  let newBook = new Book(id, name, author, pages, read);

  myLibrary.push(newBook);
}

addBookToLibrary("Moby Dick", "Herman Melville", 342, "read");
addBookToLibrary("Project Hail Mary", "Andy Weir", 496, "read");
addBookToLibrary("The Creative Act", "Rick Ruben", 300, "read");

console.log(myLibrary);

const resetButton = document.querySelector("#resetbutton");
const submitButton = document.querySelector("#submitbutton");

// submitButton.addEventListener("click", (event) => {
//   event.preventDefault();
// });
