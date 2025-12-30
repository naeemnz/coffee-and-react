import { createSlice, nanoid } from '@reduxjs/toolkit'


24
// Store ek single source of truth hota hai jisme application ka state rakha jata hai.
// reducers asal men state ko update karne ke liye functions hote hain aur controllers ki tarah kaam karte hain jo actions ko handle karte hain.

// useSelector hook ka use karke hum Redux store se state ko access kar sakte hain.
// useDispatch hook ka use karke hum actions ko dispatch kar sakte hain jo state ko update karte hain.

const initialState = {
    todos: [{id: 1, text: "Learn Redux Toolkit"}],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload
            const existingTodo = state.todos.find(todo => todo.id === id)
            if (existingTodo) {
                state.todos = state.todos.map(todo => todo.id === id ? { ...todo, text } : todo)
            }
        }
    }
})