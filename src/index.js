import 'normalize.css'
import './styles/main.css'
import Todo from './todos/createTodo'
import List from './lists/createList'
import Logo from './components/logo'
import Tabs from './components/tabs'
import AddTodo from './components/addTodo'
import Todos from './components/todos'
import NewListModal from './components/newListModal'

const lists = ['inbox', 'personal']

document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('#content')

  content.appendChild(Logo())
  content.appendChild(Tabs(lists))
  content.appendChild(AddTodo())
  content.appendChild(Todos())
  content.appendChild(NewListModal())

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

  const addListBtn = document.querySelector('.addListBtn')
  addListBtn.addEventListener('click', handleOpenNewListForm)

  const canceNewListBtn = document.querySelector('.newListForm .cancel')
  canceNewListBtn.addEventListener('click', handleCloseNewListForm)

  const newListForm = document.querySelector('.newListForm')
  newListForm.addEventListener('submit', handleListSubmit)
})
