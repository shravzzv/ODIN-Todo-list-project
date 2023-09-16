import '../styles/panel.css'
import todosList from './todosList'
import todo from './todo'

const panel = () => {
  const element = document.createElement('main')
  element.className = 'panel'

  element.appendChild(todosList())
  element.appendChild(todo())

  return element
}

export default panel
