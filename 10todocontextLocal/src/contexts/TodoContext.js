import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todoTitle: "Learn React",
            checked: false
        }
    ],
    // is me aur redux me yehi farq he k hum yahan functionality define nahin karte, hum App.jsx men functionality define karte he
    //hum sirf function ka structure define karte he, bata te hen k tum ek function ho bas
    addTodoTitle: (todoTitle) => {},
    updateTodoTitle: (id, todoTitle) => {},
    deleteTodoTitle: (id) => {},
    toggleChecked: (id) => {},


});

export const useTodo = () => {
    return useContext(TodoContext);
}
// wrapping provider
export const TodoProvider = TodoContext.Provider;