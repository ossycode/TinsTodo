// import {projectLoad} from "./project";

const projectTitle = ['Personal']
const projectDiv = document.querySelector('.projects')
const projectTitleDropdown = document.getElementById('projectTitleDropdown')

export function domManipulation() {

    //Dom for the default project load
var title = '';
for(title=0; title<projectTitle.length; title++) {
    var projectItems = document.createElement('div');
      projectItems.className = "projectItems";
      projectItems.textContent = projectTitle[title]
      projectDiv.appendChild(projectItems)

      var projectTitleOption = document.createElement('option');
      projectTitleOption.id = 'project-name'
      projectTitleOption.textContent = projectTitle[title]
      projectTitleDropdown.appendChild(projectTitleOption)
  }
  

  
}

export function sidebarActive() {
 const sidebar = document.getElementById("sidebar");

// Get all list with class="btn" inside the container
const sideList = sidebar.getElementsByClassName("sidelist");

// Loop through the options and add the active class to the current/clicked option
for (let i = 0; i < sideList.length; i++) {
    sideList[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    // Add the active class to the current/clicked button
    this.className += " active";
  });
}
}


function openTagInput() {
    document.getElementById("tagDropdown").classList.toggle("show");
  }

function openPriorityInput() {
    document.getElementById("priorityUL").classList.toggle("show");
  }
  
const tagbtn = document.getElementById('tag-dropbtn')
const priorityBtn = document.getElementById('proirity-dropbtn')

 tagbtn.addEventListener('click', openTagInput)
 priorityBtn.addEventListener('click', openPriorityInput)

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.closest('.tag-dropdown')) {

      let dropdowns = document.getElementsByClassName("tagDropdownContent");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    } 

    if (!event.target.closest('.priority-dropdown')) {

      let priorityDropdowns = document.getElementsByClassName("prorityUL");
      let i;
      for (i = 0; i < priorityDropdowns.length; i++) {
        let openDropdown = priorityDropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    } 
    }
    

  export function createTag(){
  const addItem = document.getElementById('new-tag').value;
  // Run check to see if the input box is empty and button was clicked
  //If so do nothing
  // if not, empty contents to the drop down list
  if(addItem !== "") {
    const div = document.querySelector('.tagDropdownContent');
    const aTag = document.createElement('a');
    aTag.setAttribute("href", "#");
    aTag.className = 'aTag'
    const input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    input.id = "labelSelected"
    input.classList.add('taginp')
    const label = document.createElement('label')
    label.className = 'taginput';
    label.textContent = addItem;
    

    const span = document.createElement('span');
    span.className = 'remove-checklist-item';
    const removeIcon = document.createTextNode('\u00d7');
    removeIcon.className = 'removeIcon';
    
    span.appendChild(removeIcon)
    aTag.appendChild(label)
    aTag.appendChild(input)
    aTag.appendChild(span)
    div.appendChild(aTag)
    document.getElementById('new-tag').value = "";
  }

  if (document.querySelectorAll('.aTag').length > 0){
    const nodeListCheckList = document.querySelectorAll('.aTag');
    console.log(nodeListCheckList);
    nodeListCheckList.forEach(checkListItem => {
      checkListItem.addEventListener('click', function removeItemFromChecklist() {
        checkListItem.remove();
      });
    })
  }
  else{
    alert("Field cannot be empty")
  }

  }

  export function changePriorityIconColor() {
    // change the priority icon color based on the priority level selected
    const priorityList = document.querySelectorAll(".priorities");
    priorityList.forEach(item => {item.addEventListener('click', (e) => {

    const priorityIcon = document.querySelector('.priorityIcon');  
    if(e.target.value === 'priority1'){
        priorityIcon.style.fill = 'rgb(243, 10, 10)';
    }
    else if(e.target.value === 'priority2'){
        priorityIcon.style.fill = 'rgb(252, 207, 7)';
    }
    else if(e.target.value === 'priority3'){
        priorityIcon.style.fill = 'rgb(39, 5, 233)';
    }else{
        priorityIcon.style.fill = 'rgb(191, 190, 190)';
    }
    
    })})

}

export function createProject() {
  const content  = document.querySelector('.content')
  const modal = document.createElement('div')
  modal.className = 'create-projectform-modal'
  modal.id = 'create-projectform-modal';
  const modalContent = document.createElement('div')
  modalContent.className = 'create-projectform-modal-content'

  const projectAddform = document.createElement('form')
  projectAddform.classList.add('form-project')
  projectAddform.id = "formproject"

  const label = document.createElement('label')
  label.textContent = 'Project Name'
  const input = document.createElement('input')
  input.id = "form-input"
  const cancelBtn = document.createElement('button')
  cancelBtn.textContent = "Cancel"
  cancelBtn.id = 'projectformCancelBtn';

  const addBtn = document.createElement('button')
  addBtn.textContent = "Add"
  addBtn.id = "projectformAddBtn";

  const h2 = document.createElement('h2')
  h2.textContent = "Add project"

  content.appendChild(modal)
  modal.appendChild(modalContent)
  modalContent.appendChild(projectAddform)
  projectAddform.appendChild(h2)
  projectAddform.appendChild(label)
  projectAddform.appendChild(input)
  projectAddform.appendChild(cancelBtn)
  projectAddform.appendChild(addBtn)


  const projectformAddBtn = document.getElementById('projectformAddBtn');
  projectformAddBtn.addEventListener("click", (e) => {
      e.preventDefault()
      if(input.value !== '' &  !projectTitle.includes(input.value) ){
        projectTitle.push(input.value)
        let div  = document.createElement('div')
        div.className = "projectItems";
        div.textContent = input.value
        projectDiv.appendChild(div)
        let option = document.createElement('option')
        option.id = 'project-name'
        option.textContent = input.value
        projectTitleDropdown.appendChild(option)
        
      }
      else{
        
        alert('Project name is required!')
      }
      document.getElementById('form-input').value = "";
     
    });
    
    const createProjectFormModal = document.getElementById('create-projectform-modal');
    projectformCancelBtn.addEventListener("click", (e) => {
      e.preventDefault()
      createProjectFormModal.classList.remove("show")
      createProjectFormModal.style.display = 'none'
      document.getElementById('form-input').value = "";
    });

}

export function inboxCreate (Title, Description, DueDate, Priority, Project, Label) {
  const content = document.querySelector('.content')
  const inboxContainer = document.createElement('div')
  const taskList = document.createElement('div')
  
  const taskTitle = document.createElement('p')
  taskList.textContent =  Title;
  const taskDescription = document.createElement('p')
  taskDescription.textContent = Description
  const taskDate = document.createElement('p')
  taskDate.textContent = DueDate;
  const taskProject = document.createElement('p')
  taskProject.textContent = Project
  
  const taskLabel = document.createElement('p')
  taskLabel.textContent = Label
  
  const taskPriority = document.createElement('p')
  taskPriority.textContent = Priority

  const addTaskInboxContainer= document.createElement('div')
  const h3 = document.createElement('h3')
  h3.textContent = "Inbox"
  const inboxAddTaskBtn = document.createElement('button')
  inboxAddTaskBtn.textContent = " + Add Task"
  
  inboxContainer.appendChild(h3)
  taskList.appendChild(taskTitle)
  taskList.appendChild(taskDescription)
  taskList.appendChild(taskDate)
  taskList.appendChild(taskProject)
  taskList.appendChild(taskLabel)
  taskList.appendChild(taskPriority)
  addTaskInboxContainer.appendChild(inboxAddTaskBtn)
  inboxContainer.appendChild(taskList)
  inboxContainer.appendChild(addTaskInboxContainer)
  content.appendChild(inboxContainer)

}