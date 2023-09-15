const addTodoToList = (todo, list) => {
  todo.list = list.title
  list.todos.push(todo)
}

export default addTodoToList
