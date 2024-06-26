let form = document.querySelector(".form")
let input = document.querySelector(".input")
let button = document.querySelector(".button")

form .addEventListener("submit" , (evt) => {
evt.preventDefault()
let value = input.value
let newText = document.createElement("h1")
newText.textContent = value
document.body.appendChild(newText)
input.value = ""
newText.style.color = "red"
document.body.style.backgroundColor = value
})