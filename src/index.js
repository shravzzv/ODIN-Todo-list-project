import 'normalize.css'
import './styles/main.css'
import Todo from './todos/createTodo'
import List from './lists/createList'
import Logo from './components/logo'

document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('#content')
  content.appendChild(Logo())
})
