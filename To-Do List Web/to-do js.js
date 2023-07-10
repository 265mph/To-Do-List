const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const inputBoxLength = () => {
    return inputBox.value.length;
}


const addTask = () => {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(inputBox.value));
        listContainer.appendChild(li);
        let spanIcon = document.createElement("span");
        spanIcon.innerHTML = "\u00d7";
        li.appendChild(spanIcon)
        inputBox.value = '';
        saveData();
}

const addTaskKeyPress = (event) => {
    if(inputBoxLength() > 0 && event.keyCode === 13) {
        addTask();
    }
    saveData();
}

const deleteTask = (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}

listContainer.addEventListener("click", deleteTask, false);
inputBox.addEventListener("keypress", addTaskKeyPress);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();