const Tabs = (lists) => {
  const element = document.createElement('div')
  element.className = 'tabs'

  const tabsContainer = document.createElement('div')
  tabsContainer.className = 'tabsContainer'
  element.appendChild(tabsContainer)

  lists.forEach(({ title }) => {
    const tab = document.createElement('button')
    tab.className = 'tab'
    tab.textContent = title
    tabsContainer.appendChild(tab)
  })

  const addListBtn = document.createElement('button')
  addListBtn.className = 'addListBtn'
  addListBtn.textContent = '+'
  element.appendChild(addListBtn)

  return element
}

export default Tabs
