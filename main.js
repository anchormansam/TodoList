var A = document.getElementById('TodoList');
A.setAttribute('class', 'container text-center display-4');

// Empty Array to list Items in task List
let taskListArray = [];
let updatedTaskList = [];



function viewTaskList() {
    let todoListContainer = document.createElement('div');
    todoListContainer.setAttribute('class', 'container');

    let headerRow = document.createElement('div');
    headerRow.setAttribute('class', 'row')

    let headerTitle = document.createElement('div');
    headerTitle.setAttribute('class', 'col-12');
    headerTitle.innerHTML = "TO DO LIST";

    let inputBoxRow = document.createElement('div');
    inputBoxRow.setAttribute('class', 'row');

    let inputBoxCol1 = document.createElement('div');
    inputBoxCol1.setAttribute('class', 'col-3');
    inputBoxCol1.innerHTML = "";
   
    // Col for Input of Task list 
    let inputBoxCol2 = document.createElement('input');
    inputBoxCol2.setAttribute('class', 'col-6');
    inputBoxCol2.setAttribute('type', 'value');
    inputBoxCol2.setAttribute('placeholder', 'Insert Task')
    inputBoxCol2.setAttribute('id', 'enter');
    inputBoxCol2.addEventListener('keyup', viewableTaskList)


    let inputBoxCol3 = document.createElement('div');
    inputBoxCol3.setAttribute('class', 'col-3');
    inputBoxCol3.innerHTML = "";

    let displayTask = document.createElement('div');
    displayTask.setAttribute('class', 'row'); 

    let displayTask1 = document.createElement('div');
    displayTask1.setAttribute('class', 'col-3');
    displayTask1.innerHTML = "";
    
    // Main Task Display Col
    let displayTask2 = document.createElement('ul');
    displayTask2.setAttribute('class', 'col-6');
    displayTask2.setAttribute('id', 'displayTask')
    displayTask2.innerHTML = "";
    
    let displayTask3 = document.createElement('div');
    displayTask3.setAttribute('class', 'col-3');
    displayTask3.innerHTML = "";
    
    // Row created for the Buttons 
    let actionButtons = document.createElement('div');
    actionButtons.setAttribute('class', 'row'); 
    
    let actionEmptyCol1 = document.createElement('div');
    actionEmptyCol1.setAttribute('class', 'col-3');
    actionEmptyCol1.innerHTML = "";
    
    // View All Button
    let actionButton1 = document.createElement('button');
    actionButton1.setAttribute('class', 'col-2');
    actionButton1.innerHTML = "All";
    
    
    // Completed Button
    let actionButton2 = document.createElement('button');
    actionButton2.setAttribute('class', 'col-2');
    actionButton2.innerHTML = "Completed"

    // Delete Button
    let actionButton3 = document.createElement('button');
    actionButton3.setAttribute('class', 'col-2');
    actionButton3.innerHTML = "Delete";
    
    let actionEmptyCol2 = document.createElement('div');
    actionEmptyCol2.setAttribute('class', 'col-3');
    actionEmptyCol2.innerHTML = "";



    
    actionButtons.appendChild(actionEmptyCol1);
    actionButtons.appendChild(actionButton1);
    actionButtons.appendChild(actionButton2);
    actionButtons.appendChild(actionButton3);
    actionButtons.appendChild(actionEmptyCol2);
    headerRow.appendChild(headerTitle);
    inputBoxRow.appendChild(inputBoxCol1);
    inputBoxRow.appendChild(inputBoxCol2);
    inputBoxRow.appendChild(inputBoxCol3);
    displayTask.appendChild(displayTask1);
    displayTask.appendChild(displayTask2);
    displayTask.appendChild(displayTask3);
    todoListContainer.appendChild(headerRow);
    todoListContainer.appendChild(inputBoxRow);
    todoListContainer.appendChild(displayTask);
    todoListContainer.appendChild(actionButtons);
    A.appendChild(todoListContainer);
}






function init() {
    viewTaskList();
    viewableTaskList();
    getTask();
}