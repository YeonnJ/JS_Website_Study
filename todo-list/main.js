//유저가 값을 입력
//+버튼을 누르면 할일이 추가
//delete를 누르면 할일이 삭제
//check버튼을누르면 할일이 끝나면서 밑줄
//1. check버튼을 클릭하는 순간, false -> true로 바꿔줌
//2. true이면 끝난걸로 간주하고 밑줄보여주기
//진행중 탭은 언더바 이동
//끝남탭은 끝난아이템만, 진행중탭은 진행중 아이템만
//전체탭을 누르면 다시 전체아이템으로 돌아옴

let taskInput = document.getElementById("taskinput");
let addButton = document.getElementById("add-button");
let taskList = [];

addButton.addEventListener("click", addTask);

function addTask() {
  let task = {
    id: randomIdGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete == true) {
      resultHTML += `<div class= "task" > 
      <div class="task-done"> ${taskList[i].taskContent} </div>
      <div>
        <button onclick="toggleComplete('${taskList[i].id}')">check</button>
        <button onclick="deleteTask('${taskList[i].id}')">delete</button>
      </div>
    </div>`;
    } else {
      resultHTML += `<div class= "task" > 
      <div> ${taskList[i].taskContent} </div>
      <div>
        <button onclick="toggleComplete('${taskList[i].id}')">check</button>
        <button onclick="deleteTask('${taskList[i].id}')">delete</button>
      </div>
    </div>`;
    }
  }

  document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
}

function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  render();
}

function randomIdGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
