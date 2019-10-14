var totalTask = 0;

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

            var obj = new ActualTaskItem(taskListArray.length, document.getElementById('enter').value);
            let list = document.createElement('button');
            list.setAttribute('id', taskListArray.length)
            list.textContent = e.target.value;
            list.addEventListener('click', completeTask);
            document.getElementById('displayTask').appendChild(list);
            taskListArray.push(obj);
            localStorage.setItem('Task', JSON.stringify(taskListArray));
            document.getElementById('enter').value = '';


        };
    }
}


// JSON Data in the Array
function getTask() {
    let data = localStorage.getItem('Task');
    console.log(data)
    if (data.length > 0) {
        data = JSON.parse(data);
        for (let i = 0; i < data.length; i++) {
            var obj = new ActualTaskItem(data[i].id, data[i].title);
            taskListArray.push(obj);
        }
    }
    else {

        localStorage.setItem('Task', JSON.stringify(taskListArray));
        data = JSON.parse(localStorage.getItem('Task'));

    }

}
// This will update the list that you see on screen
function updateDisplay() {
    document.getElementById('displayTask').innerHTML = '';
    for (let j = 0; j < taskListArray.length; j++) {

        let list = document.createElement('li');
        list.setAttribute('type', 'button');
        list.setAttribute('class', 'btn-block;');
        list.textContent = taskListArray[j].title;
        list.setAttribute('id', taskListArray[j].id);
        document.getElementById('displayTask').appendChild(list);


    }
}

// Mark Task as Completed 
function taskComplete(e) {
    for (var i = 0; i < taskListArray.length; i++) {
        console.log(e.target.id);
        if (taskListArray[i].completed == false) {
            let btn = document.getElementById(i);
            btn.setAttribute('style', 'visibility: hidden;')
        }
        if (taskListArray[i].completed == true) {
            let btn = document.getElementById(i);
            btn.setAttribute('style', 'visibility: visible;')
        }
        // if (deleteAll(e)) {
        //     // localStorage.removeItem();
        //     // taskListArray = [];
        //     // document.getElementById('displayTask').innerHTML = '';
        
        // }
        else {

        }
    }
}


// Shows all Complete Task that have not been deleted
function completeTask(e) {
    if (confirm('Did you complete this task?')) {
        let clickedOn = taskListArray.filter(task => {

            console.log(task.id)
            console.log(e.target.id)
            return task.id == e.target.id
        });
        console.log(clickedOn);
        clickedOn[0].completed = true;
        console.log(taskListArray);
        document.getElementById(clickedOn[0].id).setAttribute('style', 'text-decoration: line-through;');
        // displayTask2.innerHTML.setProperty('', 'line-through');

    } else {
        // Do nothing!
    }

}

// Shows all current Task
function taskRemaining(e) {
    for (var i = 0; i < taskListArray.length; i++) {
        console.log(e.target.id);
        if (taskListArray[i].completed == false) {
            let btn = document.getElementById(i);
            btn.setAttribute('style', 'visibility: visible;')
        }
        if (taskListArray[i].completed == true) {
            let btn = document.getElementById(i);
            btn.setAttribute('style', 'visibility: hidden;')
        }
        else {

        }
    }

}

// Deletes all Task
function deleteAll(e) {
    console.log(deleteAll);
    localStorage.clear();
    taskListArray = [];
    document.getElementById('displayTask').innerHTML = '';

}









