const ExpandedTodo = ({ title, desc, due, priority, list, complete }) => {
  const element = document.createElement('div')
  element.className = 'expTodo'
  if (complete) element.classList.add('complete')

  const header = document.createElement('header')

  const listEl = document.createElement('button')
  listEl.textContent = list

  const delBtn = document.createElement('button')
  delBtn.textContent = '🗑️'
  delBtn.className = 'delete'

  const closeBtn = document.createElement('button')
  closeBtn.textContent = '❌'
  closeBtn.className = 'close'

  const main = document.createElement('main')

  const textContent = document.createElement('div')
  const titleEl = document.createElement('h1')
  titleEl.textContent = title
  titleEl.className = 'title'

  const descEl = document.createElement('p')
  if (desc.length < 1) {
    descEl.style.visibility = 'hidden'
  } else {
    descEl.textContent = desc
  }
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
  // header.appendChild(editBtn)
  header.appendChild(delBtn)
  header.appendChild(closeBtn)

  main.appendChild(textContent)

  textContent.appendChild(titleEl)
  textContent.appendChild(descEl)

  section.appendChild(dateEl)
  section.appendChild(priorityEl)

  return element
}

export default ExpandedTodo
