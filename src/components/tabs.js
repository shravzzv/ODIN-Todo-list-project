const lists = ['inbox', 'personal', 'work', 'grocery']

const Tabs = () => {
  const element = document.createElement('div')
  element.className = 'tabs'

  lists.forEach((list) => {
    const tab = document.createElement('button')
    tab.className = 'tab'
    tab.textContent = list
    element.appendChild(tab)
  })

  const addList = document.createElement('button')
  addList.className = 'addBtn'
  addList.textContent = '+'
  element.appendChild(addList)

  return element
}

export default Tabs
