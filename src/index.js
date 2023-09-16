import 'normalize.css'
import './styles/global.css'
import Todo from './todos/createTodo'
import List from './lists/createList'
import sidebar from './components/sidebar'
import panel from './components/panel'

const content = document.querySelector('#content')

document.addEventListener('DOMContentLoaded', () => {
  content.appendChild(sidebar())
  content.appendChild(panel())
})
