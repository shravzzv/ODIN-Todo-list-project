import 'normalize.css'
import './styles/main.css'
import Todo from './todos/createTodo'
import List from './lists/createList'
import Logo from './components/logo'
import Tabs from './components/tabs'
import AddTodo from './components/addTodo'
import Todos from './components/todos'
import NewListModal from './components/newListModal'
import NewTodoModal from './components/newTodoModal'

document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('#content')
  const lists = ['inbox', 'personal']
  const todos = [
    new Todo(
      'Clear gmail',
      `It's important to clear your inbox and this is some other text`,
      new Date(),
      '⭐'
    ),
  ]

  content.appendChild(Logo())
  content.appendChild(Tabs(lists))
  content.appendChild(AddTodo())
  content.appendChild(Todos(todos))
  content.appendChild(NewListModal())
  content.appendChild(NewTodoModal())

  const handleOpenNewListForm = (e) => {
    document.querySelector('.newListForm').classList.toggle('show')
    setTimeout(() => {
      const input = document.querySelector('.newListForm>input')
      if (input) {
        input.focus()
      }
    }, 0)
  }

  const handleCloseNewListForm = (e) => {
    document.querySelector('.newListForm').classList.toggle('show')
    e.target.form.reset()
  }

  const handleListSubmit = (e) => {
    e.preventDefault()
    document.querySelector('.newListForm').classList.toggle('show')
    const newList = new List(e.target.elements[0].value)
    lists.push(newList.title)
    e.target.reset()

    const newTabs = Tabs(lists)
    const tabsContainer = document.querySelector('.tabs')
    tabsContainer.parentNode.replaceChild(newTabs, tabsContainer)
    const addListBtn = document.querySelector('.addListBtn')
    addListBtn.addEventListener('click', handleOpenNewListForm)
  }

  const handleOpenNewTodoForm = (e) => {
    document.querySelector('.newTodoForm').classList.add('show')
    setTimeout(() => {
      const input = document.querySelector('.newTodoForm>input:first-of-type')
      if (input) {
        input.focus()
      }
    }, 0)
  }

  const handleCloseNewTodoForm = (e) => {
    document.querySelector('.newTodoForm').classList.remove('show')
    e.target.form.reset()
  }

  const handleTodoSubmit = (e) => {
    e.preventDefault()
    document.querySelector('.newTodoForm').classList.remove('show')

    const newTitle = e.target.elements.title.value
    const newDesc = e.target.elements.description.value
    const newDate = e.target.elements.date.value
    const newPriority = e.target.elements.priority.value
    const newTodo = new Todo(newTitle, newDesc, new Date(newDate), newPriority)
    todos.push(newTodo)

    const newTodos = Todos(todos)
    document.querySelector('.todosContainer').remove()
    content.appendChild(newTodos)

    e.target.reset()
  }

  const addListBtn = document.querySelector('.addListBtn')
  addListBtn.addEventListener('click', handleOpenNewListForm)

  const canceNewListBtn = document.querySelector('.newListForm .cancel')
  canceNewListBtn.addEventListener('click', handleCloseNewListForm)

  const newListForm = document.querySelector('.newListForm')
  newListForm.addEventListener('submit', handleListSubmit)

  const addTodoBtn = document.querySelector('.addTodo')
  addTodoBtn.addEventListener('click', handleOpenNewTodoForm)

  const cancelNewTodoBtn = document.querySelector('.newTodoForm .cancel')
  cancelNewTodoBtn.addEventListener('click', handleCloseNewTodoForm)

  const newTodoForm = document.querySelector('.newTodoForm')
  newTodoForm.addEventListener('submit', handleTodoSubmit)
})
