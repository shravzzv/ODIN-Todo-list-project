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
  const lists = [new List('inbox')]
  const todos = [
    new Todo(
      'Create a Todo',
      'Click the + button at the bottom right of the screen.',
      new Date(),
      '⭐⭐⭐',
      'Inbox'
    ),
    new Todo(
      'Create a List',
      'Click the + button next to the tabs bar above. Now create a new todo and select this list.',
      new Date(),
      '⭐⭐⭐',
      'Inbox'
    ),
    new Todo(
      'Complete a Todo',
      'Click the circle on any todo to mark it as completed.',
      new Date(),
      '⭐⭐⭐',
      'Inbox'
    ),
    new Todo(
      'Navigate using tabs',
      'Click on any of the available tabs to filter the todos.',
      new Date(),
      '⭐⭐⭐',
      'Inbox'
    ),
    new Todo(
      'Clear this screen',
      'Open each todo and click the 🗑️ icon.',
      new Date(),
      '⭐⭐⭐',
      'Inbox'
    ),
  ]

  content.appendChild(Logo())

  content.appendChild(Tabs(lists))

  content.appendChild(Todos(todos))

  content.appendChild(AddTodo())

  // event handlers

  // for list form
  const handleOpenNewListForm = (e) => {
    // append newListModel to the DOM
    content.appendChild(NewListModal())

    // set autofocus on the input
    setTimeout(() => {
      const input = document.querySelector('.newListForm>input')
      if (input) {
        input.focus()
      }
    }, 0)

    // hide addList button
    document.querySelector('.addListBtn').style.display = 'none'

    // hide addTodo button
    document.querySelector('.addTodo').style.display = 'none'

    // add eventlistener to close the form on the form's cancel button
    document
      .querySelector('.newListForm .cancel')
      .addEventListener('click', handleCloseNewListForm)

    // add evenlisteners to submit the form
    document
      .querySelector('.newListForm')
      .addEventListener('submit', handleListSubmit)

    // remove eventlisteners from shortTodos to prevent further clicks
    document
      .querySelectorAll('.shortTodo')
      .forEach((todo) => todo.removeEventListener('click', handleOpenTodo))

    // remove eventlisteners from tabs to prevent further clicks
    document
      .querySelectorAll('.tab')
      .forEach((tab) => tab.removeEventListener('click', handleTabClick))

    // prevent completing todos while form is present
    document
      .querySelectorAll('.completeCircle')
      .forEach((circle) =>
        circle.removeEventListener('click', handleCompleteClick)
      )
  }

  const handleCloseNewListForm = (e) => {
    // remove the form from DOM
    document.querySelector('.newListForm').remove()

    // expose addList button
    document.querySelector('.addListBtn').style.display = 'block'

    // expose addTodo button
    document.querySelector('.addTodo').style.display = 'block'

    // reattach eventlisteners on tabs
    document
      .querySelectorAll('.tab')
      .forEach((tab) => tab.addEventListener('click', handleTabClick))

    // reattach eventlisteners on shortTodos
    document
      .querySelectorAll('.shortTodo')
      .forEach((todo) => todo.addEventListener('click', handleOpenTodo))

    // allow completing todos
    document
      .querySelectorAll('.completeCircle')
      .forEach((circle) =>
        circle.addEventListener('click', handleCompleteClick)
      )
  }

  const handleListSubmit = (e) => {
    e.preventDefault()

    // create new list using List class
    const newList = new List(e.target.elements.tab.value)
    lists.push(newList)

    // add new tab element inside tabsContainer
    const newTabEl = document.createElement('button')
    newTabEl.className = 'tab'
    newTabEl.textContent = newList.title
    newTabEl.addEventListener('click', handleTabClick)

    const tabsContainer = document.querySelector('.tabsContainer')
    tabsContainer.appendChild(newTabEl)

    // expose addLists button
    document.querySelector('.addListBtn').style.display = 'block'

    // expose addTodo button
    document.querySelector('.addTodo').style.display = 'block'

    // reattach eventlisteners on tabs
    document
      .querySelectorAll('.tab')
      .forEach((tab) => tab.addEventListener('click', handleTabClick))

    // reattach eventlisteners on shortTodos
    document
      .querySelectorAll('.shortTodo')
      .forEach((todo) => todo.addEventListener('click', handleOpenTodo))

    // allow completing todos
    document
      .querySelectorAll('.completeCircle')
      .forEach((circle) =>
        circle.addEventListener('click', handleCompleteClick)
      )

    // remove the form from the DOM
    document.querySelector('.newListForm').remove()
  }

  // for todos form
  const handleOpenNewTodoForm = (e) => {
    // append newTodoModel to the DOM
    content.appendChild(NewTodoModal(lists))

    // set autofocus on the title input
    setTimeout(() => {
      const input = document.querySelector('.newTodoForm>input:first-of-type')
      if (input) {
        input.focus()
      }
    }, 0)

    // hide addTodo button
    document.querySelector('.addTodo').style.display = 'none'

    // hide addList button
    document.querySelector('.addListBtn').style.display = 'none'

    // remove eventlisteners from shortTodos to prevent further clicks
    document
      .querySelectorAll('.shortTodo')
      .forEach((todo) => todo.removeEventListener('click', handleOpenTodo))

    // remove eventlisteners from tabs to prevent further clicks
    document
      .querySelectorAll('.tab')
      .forEach((tab) => tab.removeEventListener('click', handleTabClick))

    // prevent completing todos while form is present
    document
      .querySelectorAll('.completeCircle')
      .forEach((circle) =>
        circle.removeEventListener('click', handleCompleteClick)
      )

    // add eventlistener to close the form
    document
      .querySelector('.newTodoForm .cancel')
      .addEventListener('click', handleCloseNewTodoForm)

    // add evenlisteners to submit the form
    document
      .querySelector('.newTodoForm')
      .addEventListener('submit', handleTodoSubmit)
  }

  const handleCloseNewTodoForm = (e) => {
    // remove the form from DOM
    document.querySelector('.newTodoForm').remove()

    // expose addList button
    document.querySelector('.addListBtn').style.display = 'block'

    // expose addTodo button
    document.querySelector('.addTodo').style.display = 'block'

    // reattach eventlisteners on tabs
    document
      .querySelectorAll('.tab')
      .forEach((tab) => tab.addEventListener('click', handleTabClick))

    // reattach eventlisteners on shortTodos
    document
      .querySelectorAll('.shortTodo')
      .forEach((todo) => todo.addEventListener('click', handleOpenTodo))

    // allow completing todos
    document
      .querySelectorAll('.completeCircle')
      .forEach((circle) =>
        circle.addEventListener('click', handleCompleteClick)
      )
  }

  const handleTodoSubmit = (e) => {
    e.preventDefault()

    // create new todo using class Todo
    const newTitle = e.target.elements.title.value
    const newDesc = e.target.elements.description.value
    const newDate = e.target.elements.date.value
    const newPriority = e.target.elements.priority.value
    const newList = e.target.elements.list.value

    const newTodo = new Todo(
      newTitle,
      newDesc,
      new Date(newDate),
      newPriority,
      newList
    )
    todos.push(newTodo)

    // add a new shortTodo inside the todosContainer
    const newTodoEl = ShortTodo(newTodo)
    document.querySelector('.todosContainer').appendChild(newTodoEl)
    newTodoEl.addEventListener('click', handleOpenTodo)

    // add complete circle's functionality
    newTodoEl.children[0].addEventListener('click', handleCompleteClick)

    // expose addLists button
    document.querySelector('.addListBtn').style.display = 'block'

    // expose addTodo button
    document.querySelector('.addTodo').style.display = 'block'

    // reattach eventlisteners on tabs
    document
      .querySelectorAll('.tab')
      .forEach((tab) => tab.addEventListener('click', handleTabClick))

    // reattach eventlisteners on shortTodos
    document
      .querySelectorAll('.shortTodo')
      .forEach((todo) => todo.addEventListener('click', handleOpenTodo))

    // allow completing todos
    document
      .querySelectorAll('.completeCircle')
      .forEach((circle) =>
        circle.addEventListener('click', handleCompleteClick)
      )

    // remove the form from the DOM
    document.querySelector('.newTodoForm').remove()
  }

  // for a tab
  const handleTabClick = (e) => {
    // reset by displaying all todos
    Array.from(document.querySelectorAll('.shortTodo')).forEach(
      (todo) => (todo.style.display = 'flex')
    )

    Array.from(document.querySelectorAll('.tab')).forEach((tab) =>
      tab.classList.remove('active')
    )

    e.currentTarget.classList.add('active')

    // hide all todos whose list is not the clicked tab
    Array.from(document.querySelectorAll('.list'))
      .filter(
        (list) =>
          list.textContent.toLowerCase() !==
          e.currentTarget.textContent.toLowerCase()
      )
      .forEach((list) => {
        // Ensure you're not modifying the body element
        if (list.parentNode.parentNode.parentNode !== document.body) {
          list.parentNode.parentNode.parentNode.style.display = 'none'
        }
      })
  }

  // for a todo
  const handleOpenTodo = (e) => {
    const index = Array.from(document.querySelectorAll('.shortTodo')).indexOf(
      e.currentTarget
    )

    // create and append new expanded todo
    const newExpTodo = ExpandedTodo(todos[index])
    content.appendChild(newExpTodo)

    // remove eventlisteners from shortTodos to prevent further clicks
    document
      .querySelectorAll('.shortTodo')
      .forEach((todo) => todo.removeEventListener('click', handleOpenTodo))

    // remove eventlisteners from tabs to prevent further clicks
    document
      .querySelectorAll('.tab')
      .forEach((tab) => tab.removeEventListener('click', handleTabClick))

    // prevent completing todos while form is present
    document
      .querySelectorAll('.completeCircle')
      .forEach((circle) =>
        circle.removeEventListener('click', handleCompleteClick)
      )

    // hide addListBtn and addTodoBtn
    document.querySelector('.addListBtn').style.display = 'none'
    document.querySelector('.addTodo').style.display = 'none'

    // add cancel button functionality
    const cancelBtn = document.querySelector('.expTodo .close')
    cancelBtn.addEventListener('click', handleCloseTodo)

    // add delete button functionality
    const deleteBtn = document.querySelector('.expTodo .delete')
    deleteBtn.addEventListener('click', (e) => handleDeleteTodo(e, index))
  }

  const handleCloseTodo = (e) => {
    // .expTodo .header .close
    e.target.parentNode.parentNode.remove()

    // reattach eventlisteners on shortTodos
    document
      .querySelectorAll('.shortTodo')
      .forEach((todo) => todo.addEventListener('click', handleOpenTodo))

    // reattach eventlisteners on tabs
    document
      .querySelectorAll('.tab')
      .forEach((tab) => tab.addEventListener('click', handleTabClick))

    // allow completing todos
    document
      .querySelectorAll('.completeCircle')
      .forEach((circle) =>
        circle.addEventListener('click', handleCompleteClick)
      )

    // expose addListBtn and addTodoBtn
    document.querySelector('.addListBtn').style.display = 'block'
    document.querySelector('.addTodo').style.display = 'block'
  }

  const handleDeleteTodo = (e, index) => {
    // remove the expandedTodo
    e.target.parentNode.parentNode.remove()

    // remove associated shortTodo and todo
    Array.from(document.querySelectorAll('.shortTodo'))[index].remove()
    todos.splice(index, 1)

    // reattach eventlisteners on shortTodos
    document
      .querySelectorAll('.shortTodo')
      .forEach((todo) => todo.addEventListener('click', handleOpenTodo))

    // reattach eventlisteners on tabs
    document
      .querySelectorAll('.tab')
      .forEach((tab) => tab.addEventListener('click', handleTabClick))

    // allow completing todos
    document
      .querySelectorAll('.completeCircle')
      .forEach((circle) =>
        circle.addEventListener('click', handleCompleteClick)
      )

    // expose addListBtn and addTodoBtn
    document.querySelector('.addListBtn').style.display = 'block'
    document.querySelector('.addTodo').style.display = 'block'
  }

  const handleCompleteClick = (e) => {
    e.stopPropagation()
    const index = Array.from(document.querySelectorAll('.shortTodo')).indexOf(
      e.currentTarget.parentNode
    )

    if (todos[index].complete === false) {
      // mark todo as completed
      todos[index].markComplete()
      e.currentTarget.parentNode.style['text-decoration'] = 'line-through'
      e.currentTarget.style['border-color'] = 'green'
    } else {
      // mark todo as incomplete
      todos[index].markIncomplete()
      e.currentTarget.parentNode.style['text-decoration'] = 'none'
      e.currentTarget.style['border-color'] = 'var(--txt-clr-prm)'
    }
  }

  // event listeners

  document
    .querySelector('.addListBtn')
    .addEventListener('click', handleOpenNewListForm)

  document
    .querySelector('.addTodo')
    .addEventListener('click', handleOpenNewTodoForm)

  document
    .querySelectorAll('.shortTodo')
    .forEach((todo) => todo.addEventListener('click', handleOpenTodo))

  document
    .querySelectorAll('.tab')
    .forEach((tab) => tab.addEventListener('click', handleTabClick))

  document
    .querySelectorAll('.completeCircle')
    .forEach((circle) => circle.addEventListener('click', handleCompleteClick))
})
