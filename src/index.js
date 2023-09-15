// declarations
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

const completeTodo = (todo) => (todo.complete = true)

const changeTodoPriority = (todo, newPriority) => {
  todo.priority = newPriority
}

const addTodoToList = (todo, list) => {
  todo.list = list.title
  list.todos.push(todo)
}

class List {
  constructor(title) {
    this.title = title
    this.todos = []
  }

  removeTodo(todo) {
    removeTodoFromList(todo, this)
  }
}

const removeTodoFromList = (todo, list) => {
  list.todos = list.todos.filter((item) => item.title !== todo.title)
  todo.list = ''
}

// non declarations

const todo1 = new Todo('clear gmail', '', new Date(), 'high', '', '')
const todo2 = new Todo('take out trash', '', new Date('2023-09-15'), 3, '', '')

const inbox = new List('inbox')
const work = new List('work')

todo1.addToList(inbox)
todo2.addToList(work)

work.removeTodo(todo2)

console.log(todo1)
