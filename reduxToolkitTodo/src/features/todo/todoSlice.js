import { createSlice, nanoid } from '@reduxjs/toolkit'


24
// Store ek single source of truth hota hai jisme application ka state rakha jata hai.
// reducers asal men state ko update karne ke liye functions hote hain aur controllers ki tarah kaam karte hain jo actions ko handle karte hain.

// useSelector hook ka use karke hum Redux store se state ko access kar sakte hain.
// useDispatch hook ka use karke hum actions ko dispatch kar sakte hain jo state ko update karte hain.

const initialState = {
    todos: [{id: 1, text: "Learn Redux Toolkit"}],
}

// createSlice ek reducer he
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {  //reducers me properties aur functions ate hen, aur yahan par functions hum direct define karte hen jo is context api se alag karta he
        addTodo: (state, action) => { //state situation batayega aur action wo cheez he jo hum dispatch karenge jese delete karna ya add karna
            const todo = {
                id: nanoid(), //nanoid unique id generate karta he, ye bhi sahi he id: Date.now(), 
                text: action.payload //payload bhi object he aur iski property he text isliye hum ise action.payloadtext kark nahi likh rahe aur agar koi bhi property access karni he to payload.propertyName likhna he
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
                state.todos =  state.todos.map(todo => 
                    todo.id === id ? { ...todo, text } : todo
                )
            }
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions //ye actions ko export kar raha he jise hum dispatch karenge
export default todoSlice.reducer //ye reducer ko export kar raha he jise hum store me add karenge