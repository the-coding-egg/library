const myLibrary = [];

function Book(id, name, author, pages, read) {
  this.id = id;
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `Name: ${this.name}\nAuthor: ${this.author}\nPages: ${this.pages}\nRead?: ${this.read}`;
  };
}

function addBookToLibrary(name, author, pages, read) {
  let id = self.crypto.randomUUID();
  let newBook = new Book(id, name, author, pages, read);

  myLibrary.push(newBook);
}

//add the books to the array
addBookToLibrary("Moby Dick", "Herman Melville", 342, "Yes");
addBookToLibrary("Project Hail Mary", "Andy Weir", 496, "Yes");
addBookToLibrary("The Creative Act", "Rick Ruben", 300, "No");

// display the books in the console
console.log(myLibrary);

// display books onto pages
function displayBooks() {
  for (let book of myLibrary) {
    const bookSection = document.querySelector(".book");

    const bookDisplay = document.createElement("div");
    bookDisplay.classList.add("bookdisplay");
    bookDisplay.textContent = book.info();

    console.log(book.name);

    bookSection.appendChild(bookDisplay);
  }
}

// be able to create more books
const resetButton = document.querySelector(".resetbutton");
const submitButton = document.querySelector(".submitbutton");

submitButton.addEventListener("click", submitNewBook);

function submitNewBook(event) {
  const bookName = document.querySelector("#name").value;
  const bookAuthor = document.querySelector("#author").value;
  const bookPages = Number(document.querySelector("#pages").value);
  const bookRead = document.querySelector('input[name="isread"]:checked').value;

  addBookToLibrary(bookName, bookAuthor, bookPages, bookRead);
  console.log("added book!");

  console.log(myLibrary);

  displayBooks();
  event.preventDefault();
}

const dialogForm = document.querySelector(".dialogform");
const formButton = document.querySelector(".addbookbutton");
const cancelButton = document.querySelector(".cancelbutton");

formButton.addEventListener("click", () => {
  dialogForm.showModal();
});

cancelButton.addEventListener("click", () => {
  dialogForm.close();
});
