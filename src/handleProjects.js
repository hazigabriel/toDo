import renderElements from "./renderElements";



const handleProject = {
	projects: [{name: "House tasks", tasks: Array(4), index: 0, rendered: true}],
	addNewProject: function(){
		let submit = document.querySelector(".addNewProjectButton");
		submit.addEventListener("click", function(){
		 	let input = document.querySelector(".newProject");
		 	if(input.value == "" || input.value.trim().length == 0){
		 		return 
		 	} else {
		 		handleProject.projects.push(new handleProject.generateProject(input.value));
				input.value = "";	 
	 


				localStorage.setItem("projects", JSON.stringify(handleProject.projects)) // we save the projects in our local storage as an object
		 	};


		 	renderElements.renderProjects();


		 	//if we only have only one project, and it's been added right now, we run the following function to have it automatically selected
		 	if(handleProject.projects.length == 1 ){
					document.querySelector(".projects").children[0].classList = "active";
			} 

			
		})
	},
	generateProject: function project(name){
		this.name = name;
		this.tasks = [];
		this.index = handleProject.projects.length;
		this.rendered = false;
	},
	selectProject: function(){

		document.querySelector(".projects").addEventListener("click", function(e){
			
			if(e.target.hasAttribute("data-index") || e.target.hasAttribute("data-edit-index") || e.target.hasAttribute("data-delete-index") ) {
			 
			 		e.target.parentElement.classList = "active";
				

					renderElements.clearTasks();

					for(let i = 0; i < document.querySelector(".projects").children.length; i++){
					    document.querySelector(".projects").children[i].classList = "";
					   

					};
					e.target.parentElement.classList = "active";
				
				
				
			} else {
				return
			}  
			renderElements.renderTasks();
	
			///min 16 30 https://www.youtube.com/watch?v=W7FaYfuwu70&t=0s

		})



	},
	handleButtons: function(){
		document.querySelector(".projects").addEventListener("click", function(e){
			//we handle the even where the user click on an edit button
			if (e.target.hasAttribute("data-edit-index")){
					let errorMessage = document.querySelector(".updateProjectError");
					let taskContent = document.querySelectorAll(".taskContent")[2];
					document.querySelector(".updateProject").classList = "updateProject";
			  		

					document.querySelector(".submitProjectUpdate").addEventListener("click", function(){

						let newProject = document.querySelector("#project-description").value;

						if(newProject.length < 1 || newProject.trim().length == 0) {
							errorMessage.classList = "updateProjectError";
							taskContent.style.height = "35vh"

						} else {
							document.querySelector(".projects").children[handleProject.currentProject()].children[0].textContent = newProject;
							handleProject.projects[handleProject.currentProject()].name = newProject;
							document.querySelector(".updateProject").classList = "updateProject hidden";
							 
							 
							localStorage.setItem("projects", JSON.stringify(handleProject.projects)) // we save the projects in our local storage as an object

							errorMessage.classList = "updateProjectError hidden";
							taskContent.style.height = "30vh"
						}
						 
						 
					});

					document.querySelector("#project-description").value = "";


				
					document.querySelector(".closeUpdateProjectIcon").addEventListener("click", function(){
						document.querySelector("#project-description").value = "";
						document.querySelector(".updateProject").classList.add("hidden");
						errorMessage.classList = "updateProjectError hidden";
						taskContent.style.height = "30vh"
					});

					renderElements.renderTasks();

		 


			} else if (e.target.hasAttribute("data-delete-index")){
					if(confirm("Are you sure you want to delete " + "\"" + handleProject.projects[e.target.getAttribute("data-delete-index")].name + "\"" + " and all its taks?")){
						e.target.parentElement.remove();
						handleProject.projects.splice(e.target.getAttribute("data-delete-index"), 1);
						renderElements.clearProjects();
						renderElements.renderProjects();
						document.querySelector(".task-wrapper").innerHTML = "";
						localStorage.setItem("projects", JSON.stringify(handleProject.projects));
					} else {

					}
			} else {
				return
			}
		})
	},
	currentProject: function(){
		return document.querySelector(".active").children[0].dataset.index; //retuns of the index of the project that is currenly selected
	},
	callProjectFunctions: function(){
		handleProject.addNewProject(); 
		handleProject.selectProject();
		handleProject.handleButtons();
	}



}


export default handleProject 
 