// GLOBAL VARIABLES

const tasksConteiner = document.querySelector("#tasks-conteiner")
const modalConteiner = document.querySelector(".modal-conteiner")
const colorList = ["#00BFFF","#F5DEB3","#ADFF2F","#C0C0C0","#FF00FF","#FF0000","#FFFF00","#FF8C00","#00FF00","#00FFFF",]

// LOGIC AND FUNCTIONS

function render({id, title, description}) {
	let h3 = document.createElement("h3")
	h3.appendChild(document.createTextNode( title ))

	let button = document.createElement("button")
	button.classList.add("deleteTaskButton")
	button.setAttribute("onClick", `deleteTask(${id})`)
	button.appendChild(document.createTextNode("X"))

	let headerDiv = document.createElement("div")
	headerDiv.appendChild(h3)
	headerDiv.classList.add("header-div")
	headerDiv.appendChild(button)

	let contentDiv = document.createElement("p")
	contentDiv.classList.add("content-div")
	contentDiv.appendChild(document.createTextNode( description ))

	let index = Math.floor(Math.random() * 10)
	let taskDiv = document.createElement("div")
	taskDiv.classList.add("task")
	taskDiv.appendChild(headerDiv)
	taskDiv.append(contentDiv)
	taskDiv.style.backgroundColor = colorList[index]

	tasksConteiner.style.display = "grid"
	tasksConteiner.style.justifyContent = "flex-start"
	tasksConteiner.style.alignItems = "stretch"
	tasksConteiner.appendChild(taskDiv)
}

function noTaskRender() {
	let h2 = document.createElement("h2")
	h2.classList.add('noTaskWarming')
	h2.appendChild(document.createTextNode("Não há tarefas!"))

	tasksConteiner.style.display = "flex"
	tasksConteiner.style.alignItems = "center"
	tasksConteiner.style.justifyContent = "center"
	tasksConteiner.appendChild(h2)
}