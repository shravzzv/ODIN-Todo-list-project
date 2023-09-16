import '../styles/todo.css'

/* 
{
    title: 'clear gmail',
    desc: '',
    due: '',
    priority: 1,
    notes: '',
    checklist: '',
    complete: false,
    list: 'inbox',
  },
*/

const todo = () => {
  const element = document.createElement('div')
  element.className = 'todo'

  const title = document.createElement('h2')
  title.textContent = 'Use UI as Inspiration'
  element.appendChild(title)

  const descHeading = document.createElement('h3')
  descHeading.textContent = 'Description'
  element.appendChild(descHeading)

  const desc = document.createElement('p')
  desc.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo consequuntur atque distinctio, exercitationem quibusdam quidem quis possimus esse ducimus, id eius veritatis! Commodi dolorem nam tempore tenetur voluptas aliquam?'
  element.appendChild(desc)

  return element
}

export default todo
