// import {projectLoad} from "./modules/project"
import {domManipulation, sidebarActive, createTag, changePriorityIconColor, createProject, inboxCreate} from "./modules/dom-manipulation"
import {createTodo} from "./modules/todo"

inboxCreate()
createProject()
domManipulation()
sidebarActive()
// createTodo()
changePriorityIconColor()


let clickEventsModule = (function() {
    // click event to create tag
    const newTagBtn = document.querySelector('.new-tag-btn');
    newTagBtn.addEventListener('click', createTag);

    // Client event to select the priority
    const priorityList = document.querySelectorAll(".priorities");

    // Loop through the options and add the active class to the current/clicked option
    for (let i = 0; i < priorityList.length; i++) {
        priorityList[i].addEventListener("click", function() {
        let selected = document.getElementsByClassName("active");
      
        // If there's no active class
        if (selected.length > 0) {
            selected[0].className = selected[0].className.replace(" active", "");
        }
        // Add the active class to the current/clicked button
        this.className += " active";
      });
    }
    
    const addproject = document.querySelector('.addproject');
    const createProjectFormModal = document.getElementById('create-projectform-modal')
    addproject.addEventListener('click', () => {
        if(createProjectFormModal.classList.contains('show')){
            return
        }else{
            createProjectFormModal.style.display = 'block'
            document.getElementById("formproject").classList.toggle("show");
        }
        
    })

    const createTaskHeaderBtn = document.getElementById('createTaskHeaderBtn');
    const taskCreationForm = document.getElementById('taskCreationForm');
    createTaskHeaderBtn.addEventListener('click', (e) =>{
        e.preventDefault()
        if(taskCreationForm.classList.contains('show')){
            return;
        }
        else{
            taskCreationForm.style.display = 'block'
            document.getElementById('taskCreationForm').classList.toggle('show')
        }
    })

    const addTask = document.getElementById('addtaskbtn')
    addTask.addEventListener('click', (e) =>{
        e.preventDefault()
        createTodo()
    })
})();

