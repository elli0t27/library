console.log("Hello library")
const myLib = []

function Book(name, author, pages){
    this.name=name
    this.author= author
    this.pages=pages
    this.uid= crypto.randomUUID()
}
const theHobbit=new Book("Hobbit", "Tolkien", 294)
const alchemist=new Book("Alchemist", "Paulo Coelho", 300)
const atomic =new Book("Atomic Habits" ,"Andrew", 400)
myLib.push(theHobbit)
myLib.push(alchemist)
myLib.push(atomic)
const container = document.querySelector(".container")
for (book of myLib){
    const card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML=`<h2>${book.name}</h2>
    ${book.author}
    ${book.pages}`
    container.appendChild(card)
}