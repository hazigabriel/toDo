import renderElements from "./renderElements";
import handleProject from "./handleProjects";

const handleTasks = {
	//we hate the html input and push it 
	addNewTask: function(){
		let newTaskWindow = document.querySelector(".newTask ");
		let newTaskButton = document.querySelector(".newTaskButton");
		let closeTabIcon = document.querySelector(".closeTabIcon");
		let submitButton = document.querySelector(".submitNew")


		newTaskButton.addEventListener("click", function(){
			if(handleProject.projects.length == 0) {
				alert("Please add a new project before adding a task.")
			} else if(document.querySelector(".active").children[0] == undefined){
				alert("Please select a project before adding a task.")
			} else {
				newTaskWindow.classList.remove("hidden")
			}
			

		});

		closeTabIcon.addEventListener("click", function(){
			newTaskWindow.classList.add("hidden")
		});

		submitButton.addEventListener("click", function(){
			let taskDescription = document.querySelector("#taskDescription");
			let taskPriority = document.querySelector(".priorityPicker");
			let taskDueDate = document.querySelector(".datepicker");

			if(taskDescription.value == "" || taskPriority.value == "" || taskDueDate.value == ""){
				alert("Please complete all fields.")
			} else {
				handleProject.projects[handleProject.currentProject()].tasks.push(new handleTasks.generateTask(taskDescription.value, taskPriority.value, taskDueDate.value));
				localStorage.setItem("projects", JSON.stringify(handleProject.projects));
				taskDescription.value = "";
				taskPriority.selectedIndex = 0;
				taskDueDate.value = "";
				newTaskWindow.classList.add("hidden");
				renderElements.renderTasks();
			}
			

		})


	},
	//task constructor
	generateTask: function task(name, priority, dueDate){
		this.name = name;
		this.priority = priority;
		this.dueDate = dueDate;
		this.rendered = false;
		this.checked = false;

	},
	handleTaskUpdate: function(){
		document.querySelector(".task-wrapper").addEventListener("click", function(e){
			 //here we only target the child elements of each task
			if(e.target.parentElement.parentElement.parentElement.hasAttribute("data-index")){
				if(e.target.classList.contains("editTask")){
					handleTasks.taskIndex = e.target.parentElement.parentElement.parentElement.getAttribute("data-index");
					document.querySelector("#newTaskDescription").value = handleProject.projects[handleProject.currentProject()].tasks[handleTasks.taskIndex].name;
					document.querySelector(".newPriorityPicker").value = handleProject.projects[handleProject.currentProject()].tasks[handleTasks.taskIndex].priority;
					document.querySelector(".newDatepicker").value = handleProject.projects[handleProject.currentProject()].tasks[handleTasks.taskIndex].dueDate;
					document.querySelector(".updateTask").classList = "updateTask ";
					//handleTasks.taskUpdateWindow(e.target.parentElement.parentElement.parentElement.getAttribute("data-index"))

				} else if(e.target.classList.contains("checkTask")){

					handleTasks.taskCheckedStatus(e.target.parentElement.parentElement.parentElement.getAttribute("data-index"));

				} 
			} else {

			}
		})
	},
	//using the following variable to obtain the index of the selected task in funtions where we need to update/delete the task
	taskIndex: 0,

	taskCheckedStatus: function(attr){

		if(handleProject.projects[handleProject.currentProject()].tasks[attr].checked == false){
			handleProject.projects[handleProject.currentProject()].tasks[attr].checked = true;
			renderElements.clearTasks();
			renderElements.renderTasks()
		} else {
			handleProject.projects[handleProject.currentProject()].tasks[attr].checked = false;
			renderElements.clearTasks();
			renderElements.renderTasks();
		}

		localStorage.setItem("projects", JSON.stringify(handleProject.projects));
	},
	taskUpdateWindow: function(taskIndex){
		document.querySelector(".submitTaskUpdate").addEventListener("click", function(){

				//we generatere new temporary variables each time the submit button is clicked
				let taskDescription = document.querySelector("#newTaskDescription");
				let taskPriority = document.querySelector(".newPriorityPicker");
				let taskDueDate = document.querySelector(".newDatepicker");

 
				if(taskDescription.value == "" || taskDescription.value.trim().length == 0){
		 			alert("The new task name must be at least 1 character long.");
		 			return
		 		} else {
		 			handleProject.projects[handleProject.currentProject()].tasks[handleTasks.taskIndex].name = taskDescription.value;
					handleProject.projects[handleProject.currentProject()].tasks[handleTasks.taskIndex].dueDate = taskDueDate.value;
					handleProject.projects[handleProject.currentProject()].tasks[handleTasks.taskIndex].priority = taskPriority.value;
					renderElements.clearTasks();
					renderElements.renderTasks()
		 		}
 
				document.querySelector(".updateTask").classList = "updateTask hidden";
				localStorage.setItem("projects", JSON.stringify(handleProject.projects));

		}),
		document.querySelector(".deleteTask").addEventListener("click", function(){
			handleProject.projects[handleProject.currentProject()].tasks.splice(handleTasks.taskIndex, 1);
			renderElements.clearTasks();
			renderElements.renderTasks()
			document.querySelector(".updateTask").classList = "updateTask  hidden"
			localStorage.setItem("projects", JSON.stringify(handleProject.projects));
		}),


		document.querySelector(".closeUpdateTaskIcon").addEventListener("click", function(){
			document.querySelector(".updateTask").classList = "updateTask  hidden"
		})

 

	},
	callTaskFunctions(){
		handleTasks.addNewTask();
		handleTasks.handleTaskUpdate();
		handleTasks.taskUpdateWindow()
	}	

}


export default handleTasks 
 