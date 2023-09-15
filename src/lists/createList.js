import removeTodoFromList from './removeTodoFromList'

class List {
  constructor(title) {
    this.title = title
    this.todos = []
  }

  removeTodo(todo) {
    removeTodoFromList(todo, this)
  }
}

export default List
