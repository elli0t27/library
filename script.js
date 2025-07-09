console.log("Hello library")
const myLib = []

function Book(name, author, pages,read){
    this.name=name
    this.author= author
    this.pages=pages
    this.read=read
    this.uid= crypto.randomUUID()
}
const theHobbit=new Book("Hobbit", "Tolkien", 294,true)
const alchemist=new Book("Alchemist", "Paulo Coelho", 300, false)
const atomic =new Book("Atomic Habits" ,"Andrew", 400, false)
myLib.push(theHobbit)
myLib.push(alchemist)
myLib.push(atomic)
const container = document.querySelector(".container")
function loadPage(){
    container.innerHTML=""
    for (book of myLib){
    const card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML=`<h2>${book.name}</h2>
    ${book.author}
    ${book.pages}`
    container.appendChild(card)
}
}
loadPage()

const openBtn = document.querySelector(".adder")
const closeBtn = document.querySelector(".close")
const submitBtn = document.querySelector(".submit")
const modal = document.querySelector(".dialog")
const bookForm = document.querySelector("#form")
newBookName = document.querySelector("#name")
newAuthor = document.querySelector("#author")
newPages = document.querySelector("#pages")
newRead = document.querySelector("#read")

openBtn.addEventListener("click", ()=>{
    bookForm.reset()
    newRead.checked = true
    modal.showModal()
})

closeBtn.addEventListener("click", ()=>{
    modal.close()
})

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    addBook()
    modal.close()
    loadPage()
})
function addBook(){
    myLib.push(new Book(newBookName.value, newAuthor.value,newPages.value,newRead.checked))
}
function removeBook(){
    
}