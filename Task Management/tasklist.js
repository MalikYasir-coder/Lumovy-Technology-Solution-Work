const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const totalTasks = document.getElementById('totalTasks');
const emptyMsg = document.getElementById('emptyMsg');
const taskList = document.getElementById('taskList');
let taskCount = 0;
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const li = document.createElement('li');
  li.textContent = taskText;
  taskList.appendChild(li);
  taskInput.value = '';
  emptyMsg.style.display = 'none';
  taskCount++;
  totalTasks.textContent = taskCount;
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  li.appendChild(completeButton);
  completeButton.addEventListener('click', (e) => {
    e.preventDefault();
    li.classList.toggle('completed');
  });
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  li.appendChild(deleteButton);
  deleteButton.addEventListener('click', (e) => {
    e.preventDefault();
    li.remove();
    taskCount--;
    totalTasks.textContent = taskCount;
  });
});


