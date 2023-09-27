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
    const newList = new List(e.target.elements.tab.value)
    lists.push(newList)

    // add new .tab button inside .tabsContainer
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

    // reset the form
    e.target.reset()
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

  // ? Understand the problem:
  // There are a list of dom nodes with the classname .shortTodo which when clicked should append to the document an element ExpandedTodo(todo) which takes a shortTodo's associated Todo object as the argument only if there isn't an ExpandedTodo already present.
  // The ExpandedTodo can then either close the expandedTodo or delete the shortTodo.

  // Plan:
  // attach an eventListener to all the default shortTodos.
  // on clicking them, create a handler handleOpenTodo which should
  // create a new ExpandedTodo(todo) element and append it to the document
  // the argument (todo) can be found by todos[index], where index is the index of shortTodo in the DOM list.

  // todo: closing the expanded todo:
  // ?understand the problem:
  // There is an element ExpandedTodo on the document containing a button with the classname close. When this button is clicked, remove the ExpandedTodo node from the document.

  // ?Plan:
  // select the cancel button on the expanded todo inside the handleOpenTodo eventhandler
  // attach an event listener to the button
  // the handleCloseTodo should select the .expTodo and remove it from the DOM

  // todo: prevent clicking on multiple shortTodos
  // ?understand the problem:
  // There exist elements with class .shortTodo which when clicked append to the document an expanded todo. But when an expanded todo is already present in the dom, these elements should not be allowed to be clicked.

  // ?Plan:
  // On expanding a todo, remove the click eventListener from all shortTodos
  // On closing an expanded todo, re attach the eventListeners

  // problems:
  // ! can expand multiple todos at the same time
  // ! newly created todos may not have this event listener attached

  const handleOpenTodo = (e) => {
    const index = Array.from(defaultShortTodos).indexOf(e.currentTarget)

    // create and append new expanded todo
    const newExpTodo = ExpandedTodo(todos[index])
    newExpTodo.classList.add('show')
    content.appendChild(newExpTodo)

    // remove eventlisteners from shortTodos to prevent further clicks
    document
      .querySelectorAll('.shortTodo')
      .forEach((todo) => todo.removeEventListener('click', handleOpenTodo))

    // add cancel button functionality
    const handleCloseTodo = (e) => {
      // .expTodo .header .close
      e.target.parentNode.parentNode.remove()

      // reattach eventlisteners on shortTodos
      document
        .querySelectorAll('.shortTodo')
        .forEach((todo) => todo.addEventListener('click', handleOpenTodo))
    }
    const cancel = document.querySelector('.expTodo .close')
    cancel.addEventListener('click', handleCloseTodo)
  }

  const defaultShortTodos = document.querySelectorAll('.shortTodo')
  Array.from(defaultShortTodos).forEach((todo) =>
    todo.addEventListener('click', handleOpenTodo)
  )
})
