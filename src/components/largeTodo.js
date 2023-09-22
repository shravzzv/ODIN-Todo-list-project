const LargeTodo = ({ title, desc, due, priority, list }) => {
  const element = document.createElement('div')
  element.className = 'largeTodo show'

  const header = document.createElement('header')

  const listEl = document.createElement('button')
  listEl.textContent = list

  const editBtn = document.createElement('button')
  editBtn.textContent = '📝'

  const delBtn = document.createElement('button')
  delBtn.textContent = '❌'

  const main = document.createElement('main')
  const completeCircle = document.createElement('div')
  completeCircle.className = 'completeCircle'

  const textContent = document.createElement('div')
  const titleEl = document.createElement('h1')
  titleEl.textContent = title
  titleEl.className = 'title'

  const descEl = document.createElement('p')
  descEl.textContent = desc
  descEl.className = 'desc'

  const section = document.createElement('section')
  section.className = 'section'

  const dateEl = document.createElement('button')
  dateEl.textContent = `${due.getDate()}:${due.getMonth()}`
  dateEl.className = 'date'

  const priorityEl = document.createElement('button')
  priorityEl.textContent = priority
  priorityEl.className = 'priority'

  element.appendChild(header)
  element.appendChild(main)
  element.appendChild(section)

  header.appendChild(listEl)
  header.appendChild(editBtn)
  header.appendChild(delBtn)

  main.appendChild(completeCircle)
  main.appendChild(textContent)

  textContent.appendChild(titleEl)
  textContent.appendChild(descEl)

  section.appendChild(dateEl)
  section.appendChild(priorityEl)

  return element
}

export default LargeTodo
