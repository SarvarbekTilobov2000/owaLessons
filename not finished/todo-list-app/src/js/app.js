let todos = []
let deletedTodos = []
let id = 1
const todoListEl = document.querySelector('.todo-list')
const todoListEmptyEl = document.querySelector('.todo-list__empty')
const filterEls = document.querySelectorAll('.filter-btn')
const clearTodosBtn = document.querySelector('.todo-footer__clear-completed')

function createTodo() {
	const todoForm = document.querySelector('.todo-form')

	todoForm.addEventListener('submit', (e) => {
		e.preventDefault()
		const newTodo = Object.fromEntries(new FormData(todoForm).entries())

		if (newTodo.text) {
			newTodo.id = id
			newTodo.isChecked = false
			id++
			todos.push(newTodo)
			todoForm.reset()
			hideFilterTabs()
			showFilterTab(0)
			renderTodos()
		} else {
			alert("Input bo'sh")
		}
	})
}

function deleteTodo() {
	const todoListItemsEl = todoListEl.querySelectorAll(".todo-list__item")

	todoListItemsEl.forEach((todoItem) => {
		const todoItemDeleteBtn = todoItem.querySelector('.todo-list__delete-btn')
		const todoId = Number(todoItem.dataset.todoId)

		const handleClick = (e) => {
			let todoItemIndex = todos.findIndex((todo) => todo.id === todoId)
			let deletedTodo = todos.splice(todoItemIndex, 1)
			deletedTodos.push(...deletedTodo)

			todoItemDeleteBtn.removeEventListener('click', handleClick)
			renderTodos()
		}

		todoItemDeleteBtn.addEventListener('click', handleClick)
	})
}

function editTodo() {
	const todoItemEditForm = todoListEl.querySelector(".todo-form.edit")
	const todoItemCancelBtn = todoItemEditForm.querySelector('.cancel-btn')

	todoItemEditForm.addEventListener('submit', (e) => {
		e.preventDefault()
		const editInput = todoItemEditForm.querySelector('input')

		if (editInput.value) {
			const todoId = Number(todoItemEditForm.dataset.todoId)
			const editedTodoIndex = todos.findIndex((todo) => todo.id === todoId)

			todos[editedTodoIndex].text = editInput.value

			renderTodos()

		} else {
			alert("Input is empty")
		}
	})

	function handleCancelClick() {
		renderTodos()
		todoItemCancelBtn.removeEventListener('click', handleCancelClick)
	}

	todoItemCancelBtn.addEventListener('click', handleCancelClick)
}

function toggleEditTodoForm() {
	const todoListItemsEl = todoListEl.querySelectorAll(".todo-list__item")

	todoListItemsEl.forEach((todoItem) => {
		const todoItemEditBtn = todoItem.querySelector('.todo-list__edit-btn')
		const todoId = Number(todoItem.dataset.todoId)
		const todo = todos.find((todo) => todo.id === todoId)

		const handleEditClick = (e) => {
			document.querySelectorAll('.todo-form.edit').forEach((todoForm) => {
				todoForm.parentElement.remove()
			})
			todoItem.insertAdjacentHTML("afterend", `
				<li>
					<form class="todo-form edit" data-todo-id="${todoId}">
							<input type="text" name='text' placeholder="Edit a todo…" 
								value="${todo.text}"/>
							<button class="todo-form__btn edit-btn">Edit</button>
							<button class="todo-form__btn cancel-btn" type="button">Cancel</button>
					</form>
				</li>
			`)
			todoListItemsEl.forEach(item => {
				item.classList.remove('hide')
			})
			todoItem.classList.add('hide')
			todoItemEditBtn.removeEventListener('click', handleEditClick)
			editTodo()
		}

		if (todoItemEditBtn) {
			todoItemEditBtn.addEventListener('click', handleEditClick)
		}
	})

}

function restoreTodo() {
	const todoListItemsEl = todoListEl.querySelectorAll(".todo-list__item")

	todoListItemsEl.forEach((todoItem) => {
		const todoItemRestoreBtn = todoItem.querySelector('.todo-list__restore-btn')
		const todoId = Number(todoItem.dataset.todoId)

		const handleClick = (e) => {
			let todoItemIndex = deletedTodos.findIndex((todo) => todo.id === todoId)
			let restoredTodo = deletedTodos.splice(todoItemIndex, 1)

			todos.push(...restoredTodo)

			todoItemRestoreBtn.removeEventListener('click', handleClick)
			renderTodos(deletedTodos, "archive")
		}

		todoItemRestoreBtn.addEventListener('click', handleClick)
	})
}

function toggleTodosCheckbox() {
	const todoListItemsEl = todoListEl.querySelectorAll(".todo-list__item")

	todoListItemsEl.forEach((todoItem) => {
		const todoItemCheckbox = todoItem.querySelector('input[type="checkbox"]')
		const todoId = Number(todoItem.dataset.todoId)

		const handleCheckbox = (e) => {
			let todoItemIndex = todos.findIndex((todo) => todo.id === todoId)
			todos[todoItemIndex].isChecked = e.target.checked

			todoItemCheckbox.removeEventListener('change', handleCheckbox)
			renderTodos()
		}

		todoItemCheckbox.addEventListener('change', handleCheckbox)
	})
}

function clearCompletedTodos() {
	clearTodosBtn.addEventListener('click', () => {
		deletedTodos.push(...todos.filter((todo) => todo.isChecked))
		todos = todos.filter((todo) => !todo.isChecked)

		renderTodos()
	})
}

function renderTodos(todosData = todos, type) {
	const todosCountEl = document.querySelector('.todo-footer__count')
	todoListEl.innerHTML = ""

	if (todosData.length === 0) {
		todoListEmptyEl.classList.remove('hide')
	} else {
		todoListEmptyEl.classList.add('hide')
	}

	function renderButtons(type, isChecked) {
		return type === "archive" ?
			`<button class="todo-list__btn todo-list__restore-btn">
				<img src="./src/assets/icons/reload.svg" alt="restore" />
		</button>`
			:
			type === "completed" || isChecked ?
				`<button class="todo-list__btn todo-list__delete-btn">
					<img src="./src/assets/icons/x-icon.svg" alt="x-icon" />
				</button>` :
				`<button class="todo-list__btn todo-list__edit-btn">
					<img src="./src/assets/icons/edit-icon.svg" alt="edit-icon" />
				</button>	
				<button class="todo-list__btn todo-list__delete-btn">
					<img src="./src/assets/icons/x-icon.svg" alt="x-icon" />
				</button>`
	}

	todosData.reduceRight((_, todo) => {
		todoListEl.innerHTML += `
			<li class="todo-list__item" data-todo-id="${todo.id}">
				<div class="todo-list__task">
						<input class="${todo.isChecked ? "checked" : ""}" type="checkbox" ${todo.isChecked ? "checked" : ""} />
						<span>${todo.text}</span>
				</div>
				<div class="todo-item__btns">
					${renderButtons(type, todo.isChecked)}
				</div>
			</li>
		`
	}, true)

	let todosCount = todosData.filter((todo) => !todo.isChecked).length

	if (todosCount === 1 || todosCount === 0) {
		todosCountEl.innerText = todosCount + " item left"
	} else {
		todosCountEl.innerText = todosCount + " items left"
	}

	if (type !== "archive") {
		toggleTodosCheckbox()
		deleteTodo()
		toggleEditTodoForm()
	} else {
		restoreTodo()
	}

}

function toggleFilters() {
	filterEls.forEach((filterBtn, index) => {
		filterBtn.addEventListener('click', () => {
			hideFilterTabs()
			showFilterTab(index)

			switch (filterBtn.dataset.type) {
				case "active":
					renderTodos(todos.filter(item => !item.isChecked), "active")
					break
				case "completed":
					renderTodos(todos.filter(item => item.isChecked), "completed")
					break
				case "archive":
					renderTodos(deletedTodos, "archive")
					break
				case "all":
				default:
					renderTodos()
					break
			}
		})
	})
}

function hideFilterTabs() {
	filterEls.forEach(item => {
		item.classList.remove('filter-btn--active')
	})
}

function showFilterTab(index) {
	filterEls[index].classList.add("filter-btn--active")
}

renderTodos()
createTodo()
clearCompletedTodos()
toggleFilters()
