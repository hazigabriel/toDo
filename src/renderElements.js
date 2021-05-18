import handleProject from "./handleProjects";
import handleTasks from "./handleTasks";

const renderElements = {
	renderProjects: function(){

		for(let i = 0; i < handleProject.projects.length; i++){

			if(handleProject.projects[i].rendered == false){
				let projectsWrapper = document.querySelector(".projects")

				let wrap = document.createElement("div");
				let title = document.createElement("p");
				let deleteButton = document.createElement("i");
				let editButton = document.createElement("i");

				title.textContent = handleProject.projects[i].name;
				editButton.textContent = "edit";
				deleteButton.textContent = "delete";
				editButton.classList = "material-icons editIcon";
				deleteButton.classList = "material-icons deleteIcon";
				title.dataset.index = i;
				deleteButton.dataset.deleteIndex = i;
				editButton.dataset.editIndex = i;

				wrap.appendChild(title);
				wrap.appendChild(editButton);
				wrap.appendChild(deleteButton);
				projectsWrapper.appendChild(wrap)

				handleProject.projects[i].rendered = true;
				 
			}  
		}
		 
	},
	renderTasks: function(){
	 	for(let i = 0; i < handleProject.projects[handleProject.currentProject()].tasks.length; i++){
	 		let currentTasks = handleProject.projects[handleProject.currentProject()].tasks;
	 		if(currentTasks[i].rendered == false) {
		 		let tasksParent = document.querySelector(".task-wrapper")

				let task = document.createElement("div");
				let row = document.createElement("div");
				let s10 = document.createElement("div");
				let dueDate = document.createElement("p");
				let description = document.createElement("p");
				let s2 = document.createElement("div");
				let editIcon = document.createElement("i");
				let checkIcon = document.createElement("i");
				let br = document.createElement("br");

				description.textContent = currentTasks[i].name;
				dueDate.textContent = "due on: " + currentTasks[i].dueDate;
				editIcon.textContent = "edit";
				
				if(currentTasks[i].priority == 1) {
					task.classList = "task highPriority";
				} else if(currentTasks[i].priority == 2) {
					task.classList = "task mediumPriority";
				} else {
					task.classList = "task lowPriority";
				}


				if(currentTasks[i].checked == true) {
					checkIcon.style.color = "#26A69A"
					checkIcon.textContent = "check_box";
					task.classList.add("completedTask")

				} else {
					checkIcon.textContent = "check_box_outline_blank"
					checkIcon.style.color = "#565656"
				}

					
				 
				 
				row.classList = "row";
				s10.classList = "col s10";
				dueDate.classList = "due-date"
				description.classList = "task-description";
				s2.classList = "col s2 task-icons";
				editIcon.classList = "material-icons editTask";
				checkIcon.classList = "material-icons checkTask"

			

				task.dataset.index = i;

				task.appendChild(row);
				row.appendChild(s10);
				s10.appendChild(dueDate);
				s10.appendChild(description);
				row.appendChild(s2);
				s2.appendChild(checkIcon);
				s2.appendChild(br)
				s2.appendChild(editIcon);

				tasksParent.appendChild(task)

				currentTasks[i].rendered = true;
				}

			}
		
	},
	clearTasks: function(index){
		let currentTasks = handleProject.projects[handleProject.currentProject()].tasks;

		for(let i = 0; i < currentTasks.length; i++) {
			currentTasks[i].rendered = false;

		};

		document.querySelector(".task-wrapper").innerHTML = "";

	},
	clearProjects: function(){
		for(let i = 0; i < handleProject.projects.length; i++) {
			handleProject.projects[i].rendered = false;

		};

		document.querySelector(".projects").innerHTML = "";
	},
	renderLocalStorage: function(){
		
		handleProject.projects = JSON.parse(localStorage.getItem("projects"));

		for(let i = 0; i < handleProject.projects.length; i++) {
			handleProject.projects[i].rendered = false;
		}

		renderElements.renderProjects();
		handleProject.selectProject();
		if(handleProject.projects.length == 1 ){
					document.querySelector(".projects").children[0].classList = "active";
			} 

	}

	 


}


export default renderElements 
 