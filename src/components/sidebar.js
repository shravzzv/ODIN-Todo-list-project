import '../styles/sidebar.css'
const listsData = ['Inbox', 'Personal', 'Work']

const sidebar = () => {
  const element = document.createElement('aside')
  element.className = 'sidebar'

  const heading = document.createElement('h3')
  heading.textContent = 'My lists'
  element.appendChild(heading)

  const list = document.createElement('ul')
  listsData.forEach((item) => {
    const listItem = document.createElement('li')
    listItem.textContent = item
    list.appendChild(listItem)
  })
  element.appendChild(list)

  return element
}

export default sidebar
