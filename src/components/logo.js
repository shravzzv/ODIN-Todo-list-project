const Logo = () => {
  const element = document.createElement('div')
  element.className = 'logo'
  const image = new Image()
  const text = document.createElement('p')

  image.src =
    'https://res.cloudinary.com/dmt9s5xlh/image/upload/v1694771941/todo-list_lcdefm.svg'
  image.alt = 'Logo'

  text.textContent = 'Todos'

  element.appendChild(image)
  element.appendChild(text)
  return element
}

export default Logo
