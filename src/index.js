import 'normalize.css'
import './styles/main.css'
import Todo from './todos/createTodo'
import List from './lists/createList'
import Logo from './components/logo'
import Tabs from './components/tabs'
import AddTodo from './components/addTodo'
import Todos from './components/todos'

document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('#content')
  content.appendChild(Logo())
  content.appendChild(Tabs())
  content.appendChild(AddTodo())
  content.appendChild(Todos())
})
