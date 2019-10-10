// let getData = new Request('Task.JSON');
// let listNumber = 0
// let temp = localStorage.getItem('Task');
// if (temp != null){
//     taskListArray = JSON.parse(temp);
// };


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
            var obj = new ActualTaskItem(taskListArray.length + 1, document.getElementById('enter').value);
            let list = document.createElement('li');
            list.textContent = e.target.value;
            document.getElementById('displayTask').appendChild(list);
            taskListArray.push(obj);
            localStorage.setItem('Task', JSON.stringify(taskListArray));
            document.getElementById('enter').value = '';

        };
    }
}


// Store JSON Data in the Array
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
function updateDisplay() {
    document.getElementById('displayTask').innerHTML = '';
    for (let j = 0; j < taskListArray.length; j++) {

        let list = document.createElement('li')
        list.textContent = taskListArray[j].title;
        document.getElementById('displayTask').appendChild(list);

        // document.getElementById('Task').innerHTML = '';
    }
}

// function display(getTask){
//    localStorage.getItem('Task') = temp;

// }

// function delete(){


// }