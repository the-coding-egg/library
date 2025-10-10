const myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${this.name} by ${this.author}, ${pages}, ${read}.`;
  };
}

const hailMary = new Book("Project Hail Mary", "Andy Weir", 496, "read");
const creativeAct = new Book("The Creative Act", "Rick Ruben", 300, "read");
const mobyDick = new Book("Moby Dick", "Herman Melville", 342, "read");
console.log(mobyDick.info());
console.log(hailMary.info());
console.log(creativeAct.info());

function addBookToLibrary() {}
