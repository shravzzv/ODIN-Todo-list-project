class Todo {
  constructor(title, desc, due, priority, notes, checklist) {
    this.title = title
    this.desc = desc
    this.due = due
    this.priority = priority
    this.notes = notes
    this.checklist = checklist
    this.complete = false
  }
}

const completeTodo = (todo) => (todo.complete = true)

const todo1 = new Todo(
  'clear gmail/action needed',
  '',
  new Date(),
  'high',
  '',
  ''
)
const todo2 = new Todo(
  'clear gmail/pendig',
  '',
  new Date(2023, 8, 21),
  '',
  '',
  ''
)
completeTodo(todo2)
console.log(todo1)
console.log(todo2)
