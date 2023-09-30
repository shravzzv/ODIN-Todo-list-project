import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ShortTodo = ({ title, desc, due, priority, list, complete }) => {
  const element = document.createElement('div')
  element.className = 'shortTodo'
  if (complete) {
    element.style['text-decoration'] = 'line-through'
  }

  const compCircle = document.createElement('div')
  compCircle.className = 'completeCircle'
  if (complete) {
    compCircle.style['border-color'] = 'green'
  }

  const contents = document.createElement('div')
  contents.className = 'contents'

  const titleEl = document.createElement('h2')
  titleEl.textContent = title
  titleEl.className = 'title'

  const shortDesc = document.createElement('p')
  if (desc.length < 1) {
    shortDesc.style.visibility = 'hidden'
  } else {
    shortDesc.textContent = desc.length > 55 ? desc.slice(0, 55) + '...' : desc
  }
  shortDesc.className = 'desc'

  const subContainer = document.createElement('div')
  subContainer.className = 'subContainer'

  const dateEl = document.createElement('button')
  dateEl.textContent = formatDistanceToNow(new Date(due), {
    addSuffix: true,
  })
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
