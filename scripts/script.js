// GLOBAL VARIABLES

const form = document.querySelector("#form")

//  EVENT LSTENERS

document.addEventListener('DOMContentLoaded', loadTasks)
document.addEventListener('click', (event)=>{
	if(!event.target.matches('.e-md')){
		hideModal()
	}
})
form.addEventListener("submit", addTask)

// LOGIC AND FUNCTIONS

function loadTasks() {
	let taskDivs = document.querySelectorAll(".task")
	taskDivs.forEach(taskDiv => {
		taskDiv.style.display = "none"
	})
	let noTasksWarming = document.querySelectorAll(".noTaskWarming")

	let tasks = JSON.parse(localStorage.getItem("TASKS"))
	if(!tasks) {
		return noTaskRender()
	}else {
		if(tasks.length != 0){
			noTasksWarming.forEach(noTaskWarming=>{
				if(noTaskWarming) {
					noTaskWarming.style.display = "none"
				}
			})
			tasks.map(task => render(task))

		}else noTaskRender()
	}

}

async function addTask(event) {
	event.preventDefault()
	let newTask = {
		id: Math.floor(Math.random() * 100 * 100),
		title: document.querySelector("#title").value,
		description: document.querySelector("#description").value,
	}

	let tasks = localStorage.getItem("TASKS")
	if(tasks) {
		localStorage.setItem("TASKS", JSON.stringify([
			...JSON.parse(tasks),
			newTask,
		]))
	}else {
		localStorage.setItem("TASKS", JSON.stringify([newTask]))
	}

	loadTasks()

	document.querySelector("#title").value = ""
	document.querySelector("#description").value = ""
	modalConteiner.style.display = "none"
}

function deleteTask(id) {
	let tasks = JSON.parse(localStorage.getItem("TASKS"))
	localStorage.setItem("TASKS", JSON.stringify(
		tasks.filter(task => task.id != id)
	))

	loadTasks()
}

function showModal() {
	modalConteiner.style.display = "flex"
}

function hideModal() {
	modalConteiner.style.display = "none"
}