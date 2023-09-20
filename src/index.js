import 'normalize.css'
import './styles/main.css'
import Todo from './todos/createTodo'
import List from './lists/createList'
import Logo from './components/logo'
import Tabs from './components/tabs'
import AddTodo from './components/addTodo'
import Todos from './components/todos'
import NewListModal from './components/newListModal'

const lists = ['inbox', 'personal', 'work', 'family', 'apartment']

document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('#content')
  content.appendChild(Logo())

  content.appendChild(Tabs(lists))

  content.appendChild(AddTodo())

  content.appendChild(Todos())

  content.appendChild(NewListModal())

  const addListBtn = document.querySelector('.addListBtn')

  const handleAddList = (e) => {
    lists.push(new List('new').title)
    // console.log(lists)
    // content.appendChild(Tabs(lists))
  }

  const handleCancelNewList = (e) => {
    console.log(e)
  }

  addListBtn.addEventListener('click', handleAddList)
})
