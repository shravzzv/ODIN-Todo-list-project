import completeTodo from './completeTodo'
import addTodoToList from './addTodoToList'
import changeTodoPriority from './changeTodoPriority'

class Todo {
  constructor(title, desc, due, priority) {
    this.title = title
    this.desc = desc
    this.due = due
    this.priority = priority
    this.complete = false
    this.list = 'inbox'
  }

  markComplete() {
    completeTodo(this)
  }

  addToList(list) {
    addTodoToList(this, list)
  }

  changePriority(newPriority) {
    changeTodoPriority(this, newPriority)
  }
}

export default Todo
