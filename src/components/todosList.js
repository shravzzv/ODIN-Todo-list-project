import '../styles/todosList.css'
const todos = [
  {
    title: 'clear gmail',
    desc: '',
    due: '',
    priority: 1,
    notes: '',
    checklist: '',
    complete: false,
    list: 'inbox',
  },
  {
    title: 'clear gmail',
    desc: '',
    due: '',
    priority: 1,
    notes: '',
    checklist: '',
    complete: false,
    list: 'inbox',
  },
  {
    title: 'clear gmail',
    desc: '',
    due: '',
    priority: 1,
    notes: '',
    checklist: '',
    complete: false,
    list: 'inbox',
  },
]

const todosList = () => {
  const element = document.createElement('div')
  element.className = 'todosList'

  const heading = document.createElement('h2')
  heading.textContent = 'Inbox'
  element.appendChild(heading)

  const list = document.createElement('ul')
  element.appendChild(list)

  todos.forEach((todo) => {
    const item = document.createElement('li')
    const title = document.createElement('p')
    title.textContent = todo.title

    item.appendChild(title)
    list.appendChild(item)
  })

  const addTaskBtn = document.createElement('button')
  addTaskBtn.textContent = '+ Add task'
  element.appendChild(addTaskBtn)

  return element
}

export default todosList
