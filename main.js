var A = document.getElementById('TodoList');
A.setAttribute('class', 'container text-center display-4');

// Empty Array to list Items in task List
let taskListArray = [];
let updatedTaskList = [];

let liID = 0;

function viewTaskList() {
    let todoListContainer = document.createElement('div');
    todoListContainer.setAttribute('class', 'container');

    let headerRow = document.createElement('div');
    headerRow.setAttribute('class', 'row')

    let headerTitle = document.createElement('div');
    headerTitle.setAttribute('class', 'col-12');
    headerTitle.innerHTML = "TASK LIST";

    let inputBoxRow = document.createElement('div');
    inputBoxRow.setAttribute('class', 'row');

    // Col for Input of Task list 
    let inputBoxCol2 = document.createElement('input');
    inputBoxCol2.setAttribute('class', 'col-12');
    inputBoxCol2.setAttribute('type', 'value');
    inputBoxCol2.setAttribute('pattern', '[a-z]{1,15};');
    inputBoxCol2.setAttribute('placeholder', 'Insert Task');
    inputBoxCol2.setAttribute('id', 'enter');
    inputBoxCol2.addEventListener('keyup', viewableTaskList)

    let displayContainer = document.createElement('div');
    displayContainer.setAttribute('class', 'container');
    displayContainer.setAttribute('style', ' overflow: hidden;');

    let displayTask = document.createElement('div');
    displayTask.setAttribute('class', 'row');

    // Main Task Display Col
    let displayTask2 = document.createElement('ul');
    displayTask2.setAttribute('class', 'col-12 ');
    displayTask2.setAttribute('id', 'displayTask');
    displayTask2.innerHTML = "";

    // Row created for the Buttons 
    let actionButtons = document.createElement('div');
    actionButtons.setAttribute('class', 'row');

    let actionEmptyCol1 = document.createElement('div');
    actionEmptyCol1.setAttribute('class', 'col-2');
    actionEmptyCol1.innerHTML = "";

    // View Task Remaining Button
    let actionButton1 = document.createElement('button');
    actionButton1.setAttribute('class', 'col-3 btn btn-secondary btn-lg');
    actionButton1.innerHTML = "Task Remaining";
    actionButton1.setAttribute('id', 'Show');
    actionButton1.addEventListener('click', taskRemaining)

    // Completed Button
    let actionButton2 = document.createElement('button');
    actionButton2.setAttribute('class', 'col-3 btn btn-secondary btn-lg');
    actionButton2.innerHTML = "Completed";
    actionButton2.setAttribute('id', 'DONE');
    actionButton2.addEventListener('click', taskComplete)

    // DeleteALL Button
    let actionButton3 = document.createElement('button');
    actionButton3.setAttribute('class', 'col-3 btn btn-secondary btn-lg');
    actionButton3.innerHTML = "Delete All";
    actionButton3.setAttribute('id', 'Delete');
    actionButton3.addEventListener('click', deleteAll)

    let actionEmptyCol2 = document.createElement('div');
    actionEmptyCol2.setAttribute('class', 'col-2');
    actionEmptyCol2.innerHTML = "";

    actionButtons.appendChild(actionEmptyCol1);
    actionButtons.appendChild(actionButton1);
    actionButtons.appendChild(actionButton2);
    actionButtons.appendChild(actionButton3);
    actionButtons.appendChild(actionEmptyCol2);
    headerRow.appendChild(headerTitle);
    inputBoxRow.appendChild(inputBoxCol2);
    displayTask.appendChild(displayTask2);
    todoListContainer.appendChild(headerRow);
    todoListContainer.appendChild(inputBoxRow);
    displayContainer.appendChild(displayTask)
    todoListContainer.appendChild(displayContainer);
    todoListContainer.appendChild(actionButtons);
    A.appendChild(todoListContainer);
}

function init() {
    viewTaskList();
    viewableTaskList();
    getTask();
    updateDisplay();
}