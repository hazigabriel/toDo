import materializeInit from "./materializeInit";
import handleProject from "./handleProjects";
import handleTasks from "./handleTasks";
import handleNavbarMobile from "./handleNavbarMobile";
import renderElements from "./renderElements";
import generateDefaultProjects from "./generateDefaultProjects"

 
//upon loading the document, we run this function to triger the  materialize
//js, in order to run the date-picker and priority-picker
document.addEventListener('DOMContentLoaded', function() {
	materializeInit();
 
})
 
 
 
generateDefaultProjects(); //we use to verify if the local storage item "project" is null and if so we generate two default projects, if we were to delete them
//and reload the page the elements would not render again as the local storage would have the string value of "[]", and no longer null

renderElements.renderLocalStorage();
handleNavbarMobile();
 
 
handleProject.callProjectFunctions()
handleTasks.callTaskFunctions();
