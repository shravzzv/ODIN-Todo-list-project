import ShortTodo from './shortTodo'

const Todos = (todos) => {
  const element = document.createElement('div')
  element.className = 'todosContainer'

  todos.forEach((todo) => {
    element.appendChild(ShortTodo(todo))
  })

  return element
}

export default Todos
