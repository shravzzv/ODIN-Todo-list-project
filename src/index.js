import Todo from './todos/createTodo'
import List from './lists/createList'

const todo1 = new Todo('clear gmail', '', new Date(), 1, '', '')
const inbox = new List('inbox')

todo1.addToList(inbox)
todo1.markComplete()
todo1.changePriority(3)

console.log(todo1)
console.log(inbox)
