import completeTodo from './completeTodo.js'
import addTodoToList from './addTodoToList.js'
import changeTodoPriority from './changeTodoPriority.js'

class Todo {
  constructor(title, desc, due, priority, notes, checklist) {
    this.title = title
    this.desc = desc
    this.due = due
    this.priority = priority
    this.notes = notes
    this.checklist = checklist
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
