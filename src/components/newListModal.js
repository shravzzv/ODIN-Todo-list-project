const NewListModal = () => {
  const form = document.createElement('form')
  form.className = 'newListForm'

  const input = document.createElement('input')
  input.type = 'text'
  input.placeholder = 'new List (3-20 characters)'
  input.maxLength = '20'
  input.minLength = '3'
  input.required = true
  input.autofocus = true

  const submitBtn = document.createElement('button')
  submitBtn.type = 'submit'
  submitBtn.className = 'submit'
  submitBtn.textContent = 'submit'

  const cancelBtn = document.createElement('button')
  cancelBtn.type = 'button'
  cancelBtn.className = 'cancel'
  cancelBtn.textContent = 'cancel'

  form.appendChild(input)
  form.appendChild(submitBtn)
  form.appendChild(cancelBtn)

  return form
}

export default NewListModal
