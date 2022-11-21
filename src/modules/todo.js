import {inboxCreate} from "./dom-manipulation"
import {compareAsc, format, parseISO, startOfToday} from 'date-fns'


//Creating an array for ToDo
let toDoArray = [];

//Factory function to create todo list
export const createTodo = () => {
const form = document.querySelector('.add-task-form');
const labelSelected = document.querySelectorAll('#labelSelected');
 let Title = document.getElementById('title').value
 let Description = document.getElementById('descrp').value
 let DueDate = document.getElementById('duedate').value
 let Project = document.getElementById('project-name').value
 let e = document.getElementById('priorityUL');
 let Priority = e.options[e.selectedIndex].text;

//  let Priority = document.getElementById('priorityUL').options[document.getElementById('priority').selectedIndex].value


//  let i = ''
//  for(i in labelSelected){
//     if(document.getElementById(labelSelected).checked==true){
//         Label = document.getElementById(labelSelected).value;
//     }
//  }
 

// Check to see if required fields are empty
if(Title == "" || Description == "" || DueDate == ""){
    alert('Title, Description, Due Date are required fields!')
    return;
}

// Check to see if a pre date was entered
if(parseISO(DueDate) < startOfToday()){
    alert('You have entered a date that has already passed!')
    console.log('due date', parseISO(DueDate));
    console.log('date now', startOfToday());
    return;
}
 console.log(Title, Description, DueDate, Priority, Project)

 toDoArray.push({Title, Description, DueDate, Priority, Project});

 console.log(toDoArray)
 form.reset()
 return {Title, Description, DueDate, Priority, Project};
}



