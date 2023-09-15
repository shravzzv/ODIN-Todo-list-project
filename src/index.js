import Todo from './todos/createTodo'
import List from './lists/createList'

const todo1 = new Todo('clear gmail', '', new Date(), 1, '', '')
const todo2 = new Todo('take out trash', '', new Date('2023-09-15'), 3, '', '')

const inbox = new List('inbox')
const work = new List('work')

todo1.addToList(inbox)
todo2.addToList(work)

console.log(todo1)
console.log(todo2)
