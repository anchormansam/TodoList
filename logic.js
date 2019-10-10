let getData = new Request('Task.JSON');
// let listNumber = 0
let temp = localStorage.getItem('Task');
if (temp != null){
    taskListArray = JSON.parse(temp);
};


class ActualTaskItem {
    constructor(id, title) {

        this.id = id;
        this.title = title;
        this.completed = false;
        this.deleted = false;
    }
}

// Function created so that the task list is viewable
function viewableTaskList(e) {
    console.log(e);
    document.getElementById('enter').onkeydown = function (event) {
        if (event.keyCode == 13) {
            // alert('5');
            new ActualTaskItem (taskListArray.length,document.getElementById('enter').value);
                let list = document.createElement('li')
                list.textContent = e.target.value;
                displayTask.appendChild(list);
                taskListArray.push(document.getElementById('enter').value);
                localStorage.setItem('Task', JSON.stringify(taskListArray));

            document.getElementById('enter').value = '';

        };
    }
}
// I don't know what this does yet but i put it here
localStorage.setItem('key', 'value')

// Store JSON Data in the Array
function getTask() {
let data = localStorage.getItem('Task');
console.log(data)
    if (data.length > 0) {
        taskListArray = JSON.parse(data);
        for (let i = 0; i < taskListArray.length; i++){

            let list = document.createElement('li')
            list.textContent = taskListArray[i].value;
            displayTask.appendChild(list);
            
            
            document.getElementById('Task').value = '';
        }
    }
    else {

        localStorage.setItem('Task', JSON.stringify(taskListArray));
         data = JSON.parse(localStorage.getItem('task'));
        
    }

}


// function display(getTask){
//    localStorage.getItem('Task') = temp;
   
// }

// function delete(){


// }