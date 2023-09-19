const ShortTodo = ({ title, desc, due, priority, list }) => {
  const element = document.createElement('div')
  element.className = 'shortTodo'

  const compCircle = document.createElement('span')
  const contents = document.createElement('div')

  const titleEl = document.createElement('h2')
  titleEl.textContent = title
  titleEl.className = 'title'

  const shortDesc = document.createElement('p')
  shortDesc.textContent = desc.slice(0, 30) + '...'
  shortDesc.className = 'desc'

  const subContainer = document.createElement('div')
  subContainer.className = 'subContainer'

  const dateEl = document.createElement('button')
  dateEl.textContent = due
  dateEl.className = 'date'

  const priorityEl = document.createElement('button')
  priorityEl.textContent = priority
  priorityEl.className = 'priority'

  const listEl = document.createElement('button')
  listEl.textContent = list
  listEl.className = 'list'

  subContainer.appendChild(dateEl)
  subContainer.appendChild(priorityEl)
  subContainer.appendChild(listEl)

  contents.appendChild(titleEl)
  contents.appendChild(shortDesc)
  contents.appendChild(subContainer)

  element.appendChild(compCircle)
  element.appendChild(contents)
  return element
}

export default ShortTodo
