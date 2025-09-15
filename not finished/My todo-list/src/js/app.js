

let todos = [
    {
        id: 1,
        text: "John and billie",
        isChecked: true,
    },
    {
        id: 2,
        text: "Alex and Tim",
        isChecked: false,
    }
]

let id = 3
let todoListEl = document.querySelector('.todo-list')

function renderTodos() {
    const todosCountEl = document.querySelector('.todo-footer__count')

    todoListEl.innerHTML = ''
    todos.reduceRight((_, todo) => {
        todoListEl.innerHTML += `
        <li class="todo-list__item">
             <div class="todo-list__task">
                 <input type="checkbox" ${todo.isChecked ? 'checked' : ""}>
                 <span>${todo.text}</span>
             </div>
             <button class="todo-list__delete-btn">
                 <img src="src/assets/icons/x-icon.svg" alt="x-icon">
             </button>
         </li>
        `
    }, true);
    let todosCount = todos.filter((todo) => !todo.isChecked).length
    if (todosCount == 1 || todosCount == 0) {
        todosCountEl.innerHTML = todosCount + ` item left`
    } else {
        todosCountEl.innerHTML = todosCount + ' items left'
    }
}

function createTodo() {
    let todoForm = document.querySelector('.todo-form')
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const newTodo = Object.fromEntries(new FormData(todoForm).entries())
        if (newTodo.text) {
            newTodo.id = id
            newTodo.isChecked = false
            id++
            todos.push(newTodo)
            todoForm.reset()
            renderTodos()
        } else {
            alert('inputga malumot kiritilmadi')
        }
    })
}

createTodo()
renderTodos()





