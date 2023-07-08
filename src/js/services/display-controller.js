import domCreator from './dom-creator'
import Todo from '../models/todo'
import pm from './initialPM'
import Project from '../models/project'
import { setTimeZone } from '../services/utility.js'

const projUl = document.querySelector('#project-list')
const todoUl = document.querySelector('#todo-list')
const addProjBtn = document.querySelector('#add-project')
const projFormOverlay = document.querySelector('#project-form-overlay')
const projForm = document.querySelector('#project-form')
const projNameField = document.querySelector('#project-name')
const clearProjBtn = document.querySelector('#clear-all-projects')
const addTodoBtn = document.querySelector('#add-todo')
const clearTodosBtn = document.querySelector('#clear-all-todos')
const todoFormOverlay = document.querySelector('#todo-form-overlay')
const todoForm = document.querySelector('#todo-form')
const todoTitleField = document.querySelector('#todo-title')
const todoDescField = document.querySelector('#todo-desc')
const todoDateField = document.querySelector('#todo-date')
const todoPriorityField = document.querySelector('#todo-priority')
const cancelProjForm = document.querySelector('#cancel-proj-btn')
const cancelTodoForm = document.querySelector('#cancel-todo-btn')
const sidebar = document.querySelector('#sidebar')
const sidebarBtn = document.querySelector('#sidebar-btn')
const projectContainer = document.querySelector('#project-container')
const showCompletedBtn = document.querySelector('#show-completed')
const currProjName = document.querySelector('#current-project-name')
const searchField = document.querySelector('#search-bar')
const dropdownMenu = document.querySelector('#dropdown-menu')
const sortMenu = document.querySelector('#sort-menu')
const sortBtn = document.querySelector('#sort-todo')

const sortFunctions = new Map([
  ['Due Date - New to Old', () => pm.sortByDateAsc()],
  ['Due Date - Old to New', () => pm.sortByDateDesc()],
  ['Priority - Low to High', () => pm.sortByPriorityAsc()],
  ['Priority - High to Low', () => pm.sortByPriorityDesc()],
  ['Title - A to Z', () => pm.sortByTitleAsc()],
  ['Title - Z to A', () => pm.sortByTitleDesc()],
  ['Date Created - Old to New', () => pm.sortByAddDateAsc()],
  ['Date Created - New to Old', () => pm.sortByAddDateDesc()],
])

const EDIT = 0,
  ADD = 1

// projectMode and todoMode are state variables
// I would create a state object to hold all the state variables

let state = {
  projectMode: ADD,
  todoMode: ADD,
  selectedTodo: null,
  projToEdit: null,
  showCompleted: false,
  sortMode: 'Date Created - Oldest First',
}

const clearProjects = () => {
  if (projUl) {
    projUl.textContent = ''
  }
}

const clearTodos = () => {
  if (todoUl) {
    todoUl.textContent = ''
  }
}

const showProjects = () => {
  if (pm.isEmpty()) {
    currProjName.textContent = ''
    return
  }
  for (const project of pm.projects) {
    projUl.appendChild(domCreator.createProject(project, pm))
  }
  if (pm.currProject) currProjName.textContent = pm.currProject.name
}

const showTodos = (todos) => {
  if (!todoUl) return
  for (let todo of todos) {
    todoUl.appendChild(domCreator.createTodo(todo))
  }
}

const refreshProjects = () => {
  clearProjects()
  showProjects()
}

const refreshTodos = () => {
  clearTodos()
  if (pm.currProject) {
    if (state.showCompleted) showTodos(pm.currProject.allTodos)
    else showTodos(pm.currProject.uncheckedTodos)
  }
}

const activateAddProj = () => {
  addProjBtn.addEventListener('click', (e) => {
    if (sidebar.classList.contains('close')) {
      sidebarBtn.click()
    }
    state.projectMode = ADD
    // Usually you would want to use a class to style this.
    // Have a class with display: flex, and add that class to the element
    // That way styling logic is separated from the logic of the program
    projFormOverlay.classList.add('flex')
    projNameField.value = ''
  })
}

const handleProjFormSubmit = () => {
  let projName = projNameField.value
  if (state.projectMode === ADD) {
    if (projName !== '') {
      pm.addProject(new Project(null, projName))
    } else {
      pm.addProject(new Project())
    }
  } else if (state.projectMode === EDIT) {
    if (state.projToEdit) {
      pm.editProject(state.projToEdit.id, projName)
      state.projToEdit = null
    }
  }
  projFormOverlay.classList.remove('flex')
  refreshProjects()
  refreshTodos()
}

const activateProjForm = () => {
  projForm.addEventListener('submit', (e) => {
    e.preventDefault()
    handleProjFormSubmit()
  })

  projForm.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      handleProjFormSubmit()
    }
  })
}

const activateCancelProjForm = () => {
  cancelProjForm.addEventListener('click', (e) => {
    e.preventDefault()
    projFormOverlay.classList.remove('flex')
  })
}

const activateProjEvent = () => {
  projUl.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('project') && target.id) {
      pm.currProject = pm.getProject(target.id)
      refreshProjects()
      refreshTodos()
    }
  })
}

const activateClearAllProj = () => {
  clearProjBtn.addEventListener('click', (e) => {
    pm.clearAllProjects()
    refreshProjects()
    refreshTodos()
  })
}

const activateClearProj = () => {
  projUl.addEventListener('click', (e) => {
    const target = e.target
    if (
      target.classList.contains('clear-project') ||
      (target.parentNode !== null &&
        target.parentNode.classList.contains('clear-project'))
    ) {
      if (target.classList.contains('clear-project')) {
        pm.removeProject(target.parentNode.parentNode.id)
      } else {
        pm.removeProject(target.parentNode.parentNode.parentNode.id)
      }
      refreshProjects()
      refreshTodos()
    }
  })
}

const activateEditProj = () => {
  projUl.addEventListener('click', (e) => {
    const target = e.target
    if (
      target.classList.contains('edit-project') ||
      (target.parentNode !== null &&
        target.parentNode.classList.contains('edit-project'))
    ) {
      if (target.classList.contains('edit-project')) {
        state.projToEdit = pm.getProject(target.parentNode.parentNode.id)
      } else {
        state.projToEdit = pm.getProject(
          target.parentNode.parentNode.parentNode.id
        )
      }
      state.projectMode = EDIT
      projFormOverlay.classList.add('flex')
      let oldName = state.projToEdit.name
      projNameField.value = oldName
    }
  })
}

const showTodoDetail = (todoLi) => {
  todoLi.querySelector('.todo-lower').classList.toggle('flex')
}

const activateTodoEvent = () => {
  todoUl.addEventListener('click', (e) => {
    const target = e.target
    const todo = target.closest('.todo')
    const todoTitle = target.classList.contains('.todo-title')
    const isCheckbox = target.type === 'checkbox'
    const isButton = target.tagName === 'BUTTON'
    const isSVG = target.classList.contains('material-symbols-outlined')

    if ((todo || todoTitle) && !isCheckbox && !isButton && !isSVG) {
      let todoLi = todo || todoTitle.parentNode.parentNode.parentNode
      showTodoDetail(todoLi)
    }
  })
}

const activateCheckTodo = () => {
  todoUl.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('check-todo')) {
      pm.toggleCheckTodo(target.parentNode.parentNode.parentNode.id)
      refreshTodos()
    }
  })
}

const activateClearTodo = () => {
  todoUl.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('clear-todo')) {
      pm.removeTodo(target.parentNode.parentNode.parentNode.id)
      refreshTodos()
    } else if (target.parentNode.classList.contains('clear-todo')) {
      pm.removeTodo(target.parentNode.parentNode.parentNode.parentNode.id)
      refreshTodos()
    }
  })
}

const activateAddTodo = () => {
  addTodoBtn.addEventListener('click', (e) => {
    state.todoMode = ADD
    todoFormOverlay.classList.add('flex')
    todoTitleField.value = ''
    todoDescField.value = ''
    todoDateField.value = setTimeZone().slice(0, 10)
    todoPriorityField.value = 'None'
  })
}

const activateEditTodo = () => {
  todoUl.addEventListener('click', (e) => {
    const target = e.target
    if (
      target.classList.contains('edit-todo') ||
      target.parentNode.classList.contains('edit-todo')
    ) {
      state.todoMode = EDIT
      todoFormOverlay.classList.add('flex')
      if (target.classList.contains('edit-todo'))
        state.selectedTodo = pm.getTodo(
          target.parentNode.parentNode.parentNode.id
        )
      else {
        state.selectedTodo = pm.getTodo(
          target.parentNode.parentNode.parentNode.parentNode.id
        )
      }
      const oldTitle = state.selectedTodo.title
      const oldDesc = state.selectedTodo.desc
      const oldDate = state.selectedTodo.date
      const oldPriority = state.selectedTodo.priority
      todoTitleField.value = oldTitle
      if (oldDesc !== 'None') {
        todoDescField.value = oldDesc
      } else {
        todoDescField.value = ''
      }
      todoDateField.value = oldDate
      todoPriorityField.value = oldPriority
    }
  })
}

const handleTodoFormSubmit = () => {
  let title = todoTitleField.value
  let desc = todoDescField.value
  let date = todoDateField.value
  let priority = todoPriorityField.value
  if (state.todoMode === ADD) {
    let newTodo = new Todo(null, title, desc, date, priority)
    pm.addTodo(newTodo)
  } else if (state.todoMode === EDIT) {
    if (state.selectedTodo) {
      desc = desc === '' ? 'None' : desc
      pm.editTodo(state.selectedTodo.id, title, desc, date, priority)
      state.selectedTodo = null
    }
  }
  refreshTodos()
  todoFormOverlay.classList.remove('flex')
}

const activateTodoForm = () => {
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    handleTodoFormSubmit()
  })
  todoForm.addEventListener('keydown', (e) => {
    if (!e.shiftKey && e.keyCode === 13) {
      e.preventDefault()
      handleTodoFormSubmit()
    }
  })
}

const activateCancelTodoForm = () => {
  cancelTodoForm.addEventListener('click', (e) => {
    e.preventDefault()
    todoFormOverlay.classList.remove('flex')
  })
}

const activateTodoFormTextbox = () => {
  todoDescField.addEventListener('keydown', function (e) {
    if (e.shiftKey && e.keyCode === 13) {
      const currentVal = this.value
      const cursorPos = this.selectionStart
      const newVal =
        currentVal.substring(0, cursorPos) +
        '\n' +
        currentVal.substring(cursorPos)
      this.value = newVal
      this.selectionStart = this.selectionEnd = cursorPos + 1

      e.preventDefault()
    }
  })
}

const activateClearAllTodos = () => {
  clearTodosBtn.addEventListener('click', (e) => {
    pm.clearCurrentProject()
    refreshTodos()
  })
}

const activateSidebarBtn = () => {
  sidebarBtn.addEventListener('click', (e) => {
    projectContainer.classList.toggle('flex')
    sidebar.classList.toggle('open')
    sidebar.classList.toggle('close')
  })
}

const toggleShowCompletedbtn = () => {
  if (state.showCompleted) {
    showCompletedBtn.textContent = 'Hide Completed'
  } else {
    showCompletedBtn.textContent = 'Show Completed'
  }
}

const activateShowCompleted = () => {
  showCompletedBtn.addEventListener('click', (e) => {
    state.showCompleted = !state.showCompleted
    toggleShowCompletedbtn()
    refreshTodos()
  })
}

const activateSearchBar = () => {
  searchField.addEventListener('input', () => {
    dropdownMenu.textContent = ''
    const searchStr = searchField.value
    if (searchStr) {
      let matches = pm.searchTodoByTitle(searchStr)
      if (matches.length !== 0) {
        for (let match of matches) {
          dropdownMenu.appendChild(domCreator.createResultDiv(match))
        }
        dropdownMenu.classList.add('flex')
      } else {
        dropdownMenu.classList.remove('flex')
      }
    } else {
      dropdownMenu.classList.remove('flex')
    }
  })
}

const activateDropdownMenu = () => {
  dropdownMenu.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('search-result')) {
      let projId = target.value.split(':')[0]
      let todoId = target.value.split(':')[1]
      pm.currProject = pm.getProject(projId)
      if (pm.getTodo(todoId).check) {
        state.showCompleted = true
      }
      toggleShowCompletedbtn()
      refreshProjects()
      refreshTodos()
      const todoLi = document.querySelector(`#${todoId}`)
      showTodoDetail(todoLi)
    }
    dropdownMenu.classList.remove('flex')
    searchField.value = ''
  })
}

const hideDropDownMenu = () => {
  document.addEventListener('click', (e) => {
    const target = e.target
    if (
      !target.classList.contains('search-result') &&
      target.id !== 'search-bar' &&
      target.id !== 'dropdown-menu'
    )
      dropdownMenu.classList.remove('flex')
    searchField.value = ''
  })
}

const activateSortMenu = () => {
  sortMenu.addEventListener('change', (e) => {
    state.sortMode = e.target.value
  })
}

const activateSortBtn = () => {
  sortBtn.addEventListener('click', (e) => {
    sortFunctions.get(state.sortMode)()
    refreshTodos()
  })
}

const activateUI = () => {
  activateAddProj()
  activateCancelProjForm()
  activateProjForm()
  activateProjEvent()
  activateClearAllProj()
  activateClearProj()
  activateEditProj()
  activateTodoEvent()
  activateCheckTodo()
  activateClearTodo()
  activateAddTodo()
  activateEditTodo()
  activateTodoForm()
  activateCancelTodoForm()
  activateClearAllTodos()
  activateSidebarBtn()
  activateShowCompleted()
  activateSearchBar()
  activateDropdownMenu()
  hideDropDownMenu()
  activateTodoFormTextbox()
  activateSortMenu()
  activateSortBtn()
}

export default {
  refreshProjects,
  refreshTodos,
  activateUI,
}
