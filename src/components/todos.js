const todosList = [
  {
    title: 'Take out Trash',
    desc: 'asfdasfd',
    due: 'now',
    complete: false,
    priority: '⭐⭐⭐',
    checklist: '',
    notes: '',
    list: 'inbox',
  },
  {
    title: 'Clear Gmail',
    desc: 'Remove everything with the tag pending.',
    due: 'now',
    complete: false,
    priority: '⭐⭐⭐',
    checklist: '',
    notes: '',
    list: 'inbox',
  },
  {
    title: 'Take out Trash',
    desc: 'asfdasfd',
    due: 'now',
    complete: false,
    priority: '⭐⭐⭐',
    checklist: '',
    notes: '',
    list: 'inbox',
  },
  {
    title: 'Take out Trash',
    desc: 'asfdasfd',
    due: 'now',
    complete: false,
    priority: '⭐⭐⭐',
    checklist: '',
    notes: '',
    list: 'inbox',
  },
  {
    title: 'Take out Trash',
    desc: 'asfdasfd',
    due: `${new Date().getDate()}/${new Date().getDay()}`,
    complete: false,
    priority: '⭐⭐⭐',
    checklist: '',
    notes: '',
    list: 'inbox',
  },
  {
    title: 'Take out Trash',
    desc: 'asfdasfd',
    due: 'now',
    complete: false,
    priority: '⭐⭐⭐',
    checklist: '',
    notes: '',
    list: 'inbox',
  },
]
import ShortTodo from './shortTodo'

const Todos = () => {
  const element = document.createElement('div')
  element.className = 'todosContainer'

  todosList.forEach((todo) => {
    element.appendChild(ShortTodo(todo))
  })

  return element
}

export default Todos
