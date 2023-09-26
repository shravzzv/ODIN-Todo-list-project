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
import LargeTodo from './components/largeTodo'

document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('#content')
  const lists = [new List('inbox'), new List('personal'), new List('work')]
  const todos = [
    new Todo(
      'Complete project proposal',
      'Hello, World!',
      new Date('2023-09-30'),
      '⭐⭐'
    ),
    new Todo(
      'Read chapter 5 of Sapiens',
      'Continue reading the fascinating book "Sapiens" by Yuval Noah Harari.',
      new Date('2023-09-25'),
      '⭐'
    ),
    new Todo(
      'Go for a jog',
      'Get some exercise by going for a jog in the morning.',
      new Date('2023-09-24'),
      '⭐'
    ),
    new Todo(
      'Learn about JavaScript promises',
      'Dive deeper into JavaScript promises and asynchronous programming.',
      new Date('2023-09-26'),
      '⭐⭐⭐'
    ),
    new Todo(
      'Write a blog post',
      'Start writing a blog post about web development tips and tricks.',
      new Date('2023-09-28'),
      '⭐⭐'
    ),
    new Todo(
      'Practice meditation',
      'Set aside some time for meditation to relax and clear your mind.',
      new Date('2023-09-27'),
      '⭐'
    ),
    new Todo(
      'Attend a networking event',
      'Participate in a local networking event to meet potential collaborators.',
      new Date('2023-09-29'),
      '⭐⭐'
    ),
    new Todo(
      'Study biology',
      'Continue your study of biology and explore fascinating topics.',
      new Date('2023-09-23'),
      '⭐'
    ),
    new Todo(
      'Work on a web development project',
      'Spend time working on your web development project with JavaScript.',
      new Date('2023-09-30'),
      '⭐⭐⭐'
    ),
    new Todo(
      'Connect with like-minded individuals',
      'Take steps to find and connect with people who share your interests.',
      new Date('2023-09-28'),
      '⭐⭐'
    ),
  ]

  content.appendChild(Logo())

  content.appendChild(Tabs(lists))
  content.appendChild(NewListModal())

  content.appendChild(Todos(todos))

  content.appendChild(AddTodo())
  content.appendChild(NewTodoModal())

  // event handlers

  const handleOpenNewListForm = (e) => {
    document.querySelector('.newListForm').classList.add('show')
    // set autofocus on the input
    setTimeout(() => {
      const input = document.querySelector('.newListForm>input')
      if (input) {
        input.focus()
      }
    }, 0)
  }

  const handleCloseNewListForm = (e) => {
    document.querySelector('.newListForm').classList.remove('show')
    e.target.form.reset()
  }

  const handleListSubmit = (e) => {
    e.preventDefault()

    // hide the modal
    document.querySelector('.newListForm').classList.remove('show')

    // create new list using List class
    const newList = new List(e.target.elements[0].value)
    lists.push(newList)

    // add new .tab button inside .tabs container
    const newTab = document.createElement('button')
    newTab.className = 'tab'
    newTab.textContent = newList.title
    const tabsContainer = document.querySelector('.tabsContainer')
    tabsContainer.appendChild(newTab)

    // reset the form
    e.target.reset()
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

  const handleCloseLargeTodo = (e) => {
    document.querySelector('.largeTodo').classList.remove('show')
    document.querySelector('.addTodo').style.visibility = 'visible'
    document.querySelector('.tabs').style.visibility = 'visible'
  }

  const handleShortTodoClick = (todo) => {
    const newLargeTodo = content.appendChild(LargeTodo(todo))

    newLargeTodo.classList.add('show')

    document.querySelector('.addTodo').style.visibility = 'hidden'
    document.querySelector('.tabs').style.visibility = 'hidden'

    document
      .querySelector('.largeTodo .close')
      .addEventListener('click', handleCloseLargeTodo)
  }

  // event listeners

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

  const allShortTodoEls = document.querySelectorAll('.shortTodo')
  Array.from(allShortTodoEls).forEach((shortTodo, index) => {
    const todo = todos[index]
    shortTodo.addEventListener('click', () => {
      handleShortTodoClick(todo)
    })
  })
})
