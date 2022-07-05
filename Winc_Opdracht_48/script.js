const input = document.getElementById("textinput");
const taskList = document.getElementById("tasklist");

//Laadt alle eerder aangemaate taken bij het laden van de pagina.
window.addEventListener("DOMContentLoaded", async () => {
    entries = await getLocal();
    entries.forEach(entry => {
        taskToDOM(entry.desc);
        if (entry.done) {
            newPar.classList.add("crossedout");
            newCheckbox.checked = true;
        }
    })
    input.focus();
})

//voegt een taak toe aan de DOM op basis van een api-entry.
const taskToDOM = (task) => {
    newItem = document.createElement("li");
    newLabel = document.createElement("label");
    newCheckbox = document.createElement("input");
    newPar = document.createElement("p");
    newDelete = document.createElement("i");
    taskList.appendChild(newItem);
    newItem.appendChild(newLabel);
    newItem.appendChild(newDelete);
    newLabel.appendChild(newCheckbox);
    newLabel.appendChild(newPar);
    newCheckbox.type = "checkbox";
    newItem.classList.add("item");
    newDelete.classList = "fa-solid fa-trash-can";
    newPar.innerHTML = task;
}

//delete-functie. Maakt gebruik van bubbling.
taskList.addEventListener("click", async (event) => {
    if (event.target.className == "fa-solid fa-trash-can") {
        item = event.target.parentElement;
        index = Array.from(taskList.children).indexOf(item);
        taskList.removeChild(item);
        entries = await getLocal();
        deleteLocal(entries[index]._id);
    }
})

//Functie voor het doorstrepen van tekst en het aanpassen van "done" in de api.
taskList.addEventListener("change", async (event) => {
    if (event.target.type == "checkbox") {
        event.target.nextElementSibling.classList.toggle("crossedout");
        index = Array.from(taskList.children).indexOf(event.target.parentElement.parentElement)
        entries = await getLocal();
        putDone(entries[index]._id, event.target.checked);
    }
})

//voegt nieuwe taak toe aan de api en de DOM
const addTask = () => {
    if (input.value.length > 0) {
        newTask = input.value;
        taskToDOM(newTask);
        newData = { desc: newTask, done: false };
        input.value = "";
        input.focus();
        postLocal(newData);
    }
    else alert("Voer eerst een taak in.")
}



document.getElementById("submit").addEventListener("click", () => {
    addTask();
})

//Je kan ook op 'enter' drukken om te verzenden
document.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        addTask();
    }
})

//Leegt de pagina en de api. Alleen aan te spreken via console.
const resetAll = async () => {
    entries = await getLocal();
    entries.forEach(task => {
        deleteLocal(task._id);
    });
    location.reload();
}

const logApi = async () => {
    api = await getLocal();
    console.log(api);
}