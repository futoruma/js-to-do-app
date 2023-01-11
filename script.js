let newtasktext = document.querySelector("#newtasktext")
let addbutton = document.querySelector("#addbutton")
let newtasks = document.querySelector("#newtasks")

addbutton.addEventListener("click", () => {
    let newTask = newtasktext.value
    newtasktext.value = ""
    let newDiv = document.createElement("div")
    newtasks.append(newDiv)
    newDiv.append(newTask)
    let deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
    deleteButton.classList.add("deletebutton")
    newDiv.append(deleteButton)
    deleteButton.addEventListener("click", () => {
        newtasks.removeChild(newDiv)
    })
})
