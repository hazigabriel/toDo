import handleProject from "./handleProjects";
import handleTasks from "./handleTasks";

function generateDefaultProjects(){
	if(localStorage.getItem("projects") == null){
		localStorage.projects ="[{\"name\":\"Home tasks\",\"tasks\":[{\"name\":\"Walk the dog\",\"priority\":\"2\",\"dueDate\":\"May 17, 2021\",\"rendered\":false,\"checked\":true},{\"name\":\"Do the groceries\",\"priority\":\"1\",\"dueDate\":\"May 18, 2021\",\"rendered\":false,\"checked\":true},{\"name\":\"Clean the house \",\"priority\":\"1\",\"dueDate\":\"May 21, 2021\",\"rendered\":false,\"checked\":false},{\"name\":\"Find the TV remote\",\"priority\":\"3\",\"dueDate\":\"May 17, 2021\",\"rendered\":false,\"checked\":false},{\"name\":\"Find the TV \",\"priority\":\"2\",\"dueDate\":\"May 17, 2021\",\"rendered\":false,\"checked\":false}],\"index\":0,\"rendered\":true},{\"name\":\"theOdinProject\",\"tasks\":[{\"name\":\"Complete the \\\"toDo\\\" project\",\"priority\":\"1\",\"dueDate\":\"May 17, 2021\",\"rendered\":true,\"checked\":true},{\"name\":\"proceed to the \\\"JavaScript in the Real World\\\" chapter\",\"priority\":\"1\",\"dueDate\":\"May 17, 2021\",\"rendered\":true,\"checked\":false}],\"index\":1,\"rendered\":true}]"
	} else {

	}
}

export default generateDefaultProjects 
 