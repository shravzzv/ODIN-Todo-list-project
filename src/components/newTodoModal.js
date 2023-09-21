const NewTodoModal = () => {
  const element = document.createElement('form')
  element.className = 'newTodoForm'

  const titleInput = document.createElement('input')
  titleInput.placeholder = 'Title'
  titleInput.autofocus = true

  const descInput = document.createElement('textarea')
  descInput.placeholder = 'Description'
  descInput.rows = 2

  const widgetsContainer = document.createElement('div')
  widgetsContainer.className = 'widgetsContainer'

  const dateInput = document.createElement('input')
  dateInput.type = 'datetime-local'
  dateInput.className = 'date'
  dateInput.id = 'dateInput'

  const priorityInput = document.createElement('select')
  priorityInput.name = 'Priority'
  priorityInput.className = 'priority'

  const priorities = [
    { value: '⭐', label: '⭐' },
    { value: '⭐⭐', label: '⭐⭐', selected: true },
    { value: '⭐⭐⭐', label: '⭐⭐⭐' },
  ]

  priorities.forEach((priority) => {
    const option = document.createElement('option')
    option.value = priority.value
    option.text = priority.label
    option.selected = priority.selected
    priorityInput.appendChild(option)
  })

  const buttonsContainer = document.createElement('div')
  buttonsContainer.className = 'buttonsContainer'

  const submitBtn = document.createElement('button')
  submitBtn.textContent = 'submit'
  submitBtn.type = 'submit'

  const cancelBtn = document.createElement('button')
  cancelBtn.textContent = 'cancel'
  cancelBtn.className = 'cancel'
  cancelBtn.type = 'button'

  element.appendChild(titleInput)
  element.appendChild(descInput)
  element.appendChild(widgetsContainer)
  element.appendChild(buttonsContainer)

  widgetsContainer.appendChild(dateInput)
  widgetsContainer.appendChild(priorityInput)
  buttonsContainer.appendChild(submitBtn)
  buttonsContainer.appendChild(cancelBtn)

  return element
}

export default NewTodoModal
