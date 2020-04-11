
const urlAPI = "https://jsonplaceholder.typicode.com";
const todoList = document.getElementById("todo-list");

// array variable to store temporary value
let todoArr = [];

// format list shown in HTML
const formatList = (data) => {
  todoList.innerHTML = ""
  data.forEach(item => {
    todoList.innerHTML += `<li class="list-group-item">
      <span class="todo-title" style="text-decoration: ${item.completed ? "line-through" : "none"}">${item.title}</span>
      <button class="float-right btn btn-sm btn-outline-danger ml-3" onclick="deleteTodo(${item.id})">delete</button>
      <button class="float-right btn btn-sm btn-primary" onclick="markDone(${item.id})">done</button>
    </li>`
  })
}

// get all todo item
const getTodo = () => {
  axios({
    url: `${urlAPI}/todos`,
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(res => {
    // array slice method to limit output just 10 item
    todoArr = res.data.slice(0,10);
    // todo list will be formatted based on todoArr 
    formatList(todoArr);
  })
  .catch(err => console.log(err))
}

// create todo item
const createTodo = (title, userId) => {
  axios({
    url: `${urlAPI}/todos`,
    method: "POST",
    data: {
      title,
      userId,
      completed: false
    },
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(res => {
    //insert new element from the FRONT [ res.data, oldData, olData ....  ]
    todoArr.unshift(res.data);
    formatList(todoArr);
  })
  .catch(err => console.log(err))
}

// to mark todo item as done (update) by id
const markDone = (id) => {
  axios({
    url: `${urlAPI}/todos/${id}`,
    method: "PUT",
    data: {
      completed: true
    },
    headers: {
      "Content-type": "application/json"
    }
  })
  .then(res => {
    // this logic translate to "if item.id is the same as input id, change completed status to true"
    todoArr = todoArr.map(item => item.id === id ? {...item, completed : true} : item);
    formatList(todoArr);
  })
  .catch(err => console.log(err))
}

// delete Todo list by id
const deleteTodo = (id) => {
  axios({
    url: `${urlAPI}/todos/${id}`,
    method: "DELETE"
  })
  .then(res => {
    // return todo list data except the one with same as input id
    todoArr = todoArr.filter(item => item.id !== id);
    formatList(todoArr);
  })
  .catch(err => console.log(err))
}

// get all todo list in program startup
getTodo()

// event listener for submit form
document.getElementById("createTodo").addEventListener('submit', 
  (e) => {
    e.preventDefault()
     const title = document.getElementById("title").value
     const userId = document.getElementById("userId").value
     createTodo(title, userId)
  }
)
