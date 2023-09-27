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
import ShortTodo from './components/shortTodo'
import ExpandedTodo from './components/expandedTodo'

document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('#content')
  const lists = [new List('inbox'), new List('personal'), new List('work')]
  const todos = [
    new Todo(
      'Complete project proposal',
      'Hello, World!',
      new Date('2023-09-30'),
      '⭐⭐',
      'home'
    ),
    new Todo(
      'Read chapter 5 of Sapiens',
      'Continue reading the fascinating book "Sapiens" by Yuval Noah Harari.',
      new Date('2023-09-25'),
      '⭐',
      'work'
    ),
    new Todo(
      'Go for a jog',
      'Get some exercise by going for a jog in the morning.',
      new Date('2023-09-24'),
      '⭐',
      'personal'
    ),
    new Todo(
      'Learn about JavaScript promises',
      'Dive deeper into JavaScript promises and asynchronous programming.',
      new Date('2023-09-26'),
      '⭐⭐⭐',
      'work'
    ),
    new Todo(
      'Write a blog post',
      'Start writing a blog post about web development tips and tricks.',
      new Date('2023-09-28'),
      '⭐⭐',
      'inbox'
    ),
    new Todo(
      'Practice meditation',
      'Set aside some time for meditation to relax and clear your mind.',
      new Date('2023-09-27'),
      '⭐',
      'work'
    ),
    new Todo(
      'Attend a networking event',
      'Participate in a local networking event to meet potential collaborators.',
      new Date('2023-09-29'),
      '⭐⭐',
      'personal'
    ),
    new Todo(
      'Study biology',
      'Continue your study of biology and explore fascinating topics.',
      new Date('2023-09-23'),
      '⭐',
      'personal'
    ),
    new Todo(
      'Work on a web development project',
      'Spend time working on your web development project with JavaScript.',
      new Date('2023-09-30'),
      '⭐⭐⭐',
      'inbox'
    ),
    new Todo(
      'Connect with like-minded individuals',
      'Take steps to find and connect with people who share your interests.',
      new Date('2023-09-28'),
      '⭐⭐',
      'inbox'
    ),
  ]

  content.appendChild(Logo())

  content.appendChild(Tabs(lists))
  content.appendChild(NewListModal())

  content.appendChild(Todos(todos))
  content.appendChild(NewTodoModal())

  content.appendChild(AddTodo())

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

    // hide addTodo button
    document.querySelector('.addTodo').style.display = 'none'

    // remove eventlisteners from shortTodos to prevent further clicks
    document
      .querySelectorAll('.shortTodo')
      .forEach((todo) => todo.removeEventListener('click', handleOpenTodo))
  }

  const handleCloseNewListForm = (e) => {
    document.querySelector('.newListForm').classList.remove('show')

    // expose addTodo button
    document.querySelector('.addTodo').style.display = 'block'

    // reattach eventlisteners on shortTodos
    document
      .querySelectorAll('.shortTodo')
      .forEach((todo) => todo.addEventListener('click', handleOpenTodo))

    // reset the form
    e.target.form.reset()
  }

  const handleListSubmit = (e) => {
    e.preventDefault()

    // hide the modal
    document.querySelector('.newListForm').classList.remove('show')

    // create new list using List class
    const newList = new List(e.target.elements.tab.value)
    lists.push(newList)

    // add new .tab button inside .tabsContainer
    const newTabEl = document.createElement('button')
    newTabEl.className = 'tab'
    newTabEl.textContent = newList.title
    newTabEl.addEventListener('click', handleTabClick)

    const tabsContainer = document.querySelector('.tabsContainer')
    tabsContainer.appendChild(newTabEl)

    // expose addTodo button
    document.querySelector('.addTodo').style.display = 'block'
    // reattach eventlisteners on shortTodos
    document
      .querySelectorAll('.shortTodo')
      .forEach((todo) => todo.addEventListener('click', handleOpenTodo))

    // reset the form
    e.target.reset()
  }

  const handleOpenNewTodoForm = (e) => {
    document.querySelector('.newTodoForm').classList.add('show')
    // set autofocus on the title input
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

    // hide the modal
    document.querySelector('.newTodoForm').classList.remove('show')

    // create new todo using class Todo
    const newTitle = e.target.elements.title.value
    const newDesc = e.target.elements.description.value
    const newDate = e.target.elements.date.value
    const newPriority = e.target.elements.priority.value

    const newTodo = new Todo(newTitle, newDesc, new Date(newDate), newPriority)
    todos.push(newTodo)

    // add a new .shortTodo inside .todosContainer
    const newTodoEl = ShortTodo(newTodo)
    document.querySelector('.todosContainer').appendChild(newTodoEl)
    newTodoEl.addEventListener('click', handleOpenTodo)

    // reset the form
    e.target.reset()
  }

  const handleOpenTodo = (e) => {
    const index = Array.from(document.querySelectorAll('.shortTodo')).indexOf(
      e.currentTarget
    )

    // create and append new expanded todo
    const newExpTodo = ExpandedTodo(todos[index])
    newExpTodo.classList.add('show')
    content.appendChild(newExpTodo)

    // remove eventlisteners from shortTodos to prevent further clicks
    document
      .querySelectorAll('.shortTodo')
      .forEach((todo) => todo.removeEventListener('click', handleOpenTodo))

    // hide addListBtn and addTodoBtn
    document.querySelector('.addListBtn').style.display = 'none'
    document.querySelector('.addTodo').style.display = 'none'

    // add cancel button functionality
    const handleCloseTodo = (e) => {
      // .expTodo .header .close
      e.target.parentNode.parentNode.remove()

      // reattach eventlisteners on shortTodos
      document
        .querySelectorAll('.shortTodo')
        .forEach((todo) => todo.addEventListener('click', handleOpenTodo))

      // expose addListBtn and addTodoBtn
      document.querySelector('.addListBtn').style.display = 'block'
      document.querySelector('.addTodo').style.display = 'block'
    }
    const cancelBtn = document.querySelector('.expTodo .close')
    cancelBtn.addEventListener('click', handleCloseTodo)

    // add delete button functionality
    const handleDeleteTodo = (e) => {
      // remove the expandedTodo
      e.target.parentNode.parentNode.remove()

      // remove associated shortTodo and todo
      Array.from(document.querySelectorAll('.shortTodo'))[index].remove()
      todos.splice(index, 1)

      // reattach eventlisteners on shortTodos
      document
        .querySelectorAll('.shortTodo')
        .forEach((todo) => todo.addEventListener('click', handleOpenTodo))

      // expose addListBtn and addTodoBtn
      document.querySelector('.addListBtn').style.display = 'block'
      document.querySelector('.addTodo').style.display = 'block'
    }
    const deleteBtn = document.querySelector('.expTodo .delete')
    deleteBtn.addEventListener('click', handleDeleteTodo)
  }

  const handleTabClick = (e) => {
    // reset by displaying all todos
    Array.from(document.querySelectorAll('.shortTodo')).forEach(
      (todo) => (todo.style.display = 'flex')
    )

    // hide all todos whose list is not the clicked tab
    Array.from(document.querySelectorAll('.list'))
      .filter(
        (list) =>
          list.textContent.toLowerCase() !==
          e.currentTarget.textContent.toLowerCase()
      )
      .forEach((list) => {
        // .shortTodo .contens .subContainer .list
        list.parentNode.parentNode.parentNode.style.display = 'none'
      })
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

  const defaultShortTodos = document.querySelectorAll('.shortTodo')
  Array.from(defaultShortTodos).forEach((todo) =>
    todo.addEventListener('click', handleOpenTodo)
  )

  const defaultTabs = document.querySelectorAll('.tab')
  Array.from(defaultTabs).forEach((tab) =>
    tab.addEventListener('click', handleTabClick)
  )
})
