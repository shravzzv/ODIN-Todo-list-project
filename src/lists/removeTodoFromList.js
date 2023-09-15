const removeTodoFromList = (todo, list) => {
  list.todos = list.todos.filter((item) => item.title !== todo.title)
  todo.list = ''
}

export default removeTodoFromList
