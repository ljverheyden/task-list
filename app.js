// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  //remove task item
  taskList.addEventListener('click', removeTask);
  //remove all the tasks
  clearBtn.addEventListener('click', clearTasks);
  //filter task event
  filter.addEventListener('keyup', filterTasks);
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') { 
    alert('Add a task');
  }

  //create li element for input task lists
  const li = document.createElement('li');
  
  //li element needs a class (materialze classes)
  li.className = 'collection-item';//materilaze class
  
  //creat the text node on the li and append to li
  li.appendChild(document.createTextNode(taskInput.value));
 
  //create the delete button link element
  const link = document.createElement('a');
  
  //link element needs a class name
  link.className = 'delete-item secondary-content';
 
  //add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  
  //append the link to the li
  li.appendChild(link);

  //append li to the ul
  taskList.appendChild(li);

  //clear input text
  taskInput.value = '';


  e.preventDefault();
}

//Remove task item
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
   if(confirm('are you sure')){
    e.target.parentElement.parentElement.remove();
   }
  }
}
// clear tasks btn
function clearTasks(){
  taskList.innerHTML = '';
}

//filter tasks
function filterTasks(e){
const text = e.target.value.toLowerCase();//targetting value and turning to lower case

document.querySelectorAll('.collection-item').forEach(function(task){//targeting all li in collection
  const item = task.firstChild.textContent;
  if(item.toLocaleLowerCase().indexOf(text) != -1){
    task.style.display = 'block';
  } else {
    task.style.display = 'none';

  }
  });
}


