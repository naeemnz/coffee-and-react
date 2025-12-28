import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
function TodoItem({ todoObject }) {
    const [isTodoTitleEditable, setIsTodoTitleEditable] = useState(false);
    const [todoNewMsg, setNewTodoMsg] = useState(todoObject.todoTitle);
    
    const { deleteTodoTitle, updateTodoTitle, toggleChecked} = useTodo();
    // humne sb se pehle context se deleteTodoTitle or updateTodoTitle ko import kiya he kuki hume in functions ki zarurat he
    const editTodo = () => {
        // pehle humne totoObject jo k hume return me milraha tha uski hum ne id  property li he pohir ise spread kiya he aur spread karne k bad humne is object ki sirf ek property ko overwrite kiya he jo k todoTitle he aur iski value humne todoNewMsg se di he jo k state he aur jisme hum new value store karenge
        updateTodoTitle(todoObject.id, { ...todoObject, todoTitle: todoNewMsg });
        setIsTodoTitleEditable(false);
    }

    const toggleCheck = () => {
        toggleChecked(todoObject.id); //yahan ka jo toggle ka method he he wo context men define he kiya gaya he, aur wo context se arha he
    }


    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todoObject.checked ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todoObject.checked}
                onChange={toggleCheck}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoTitleEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todoObject.checked ? "line-through" : ""}`}
                value={todoNewMsg}
                onChange={(e) => setNewTodoMsg(e.target.value)}
                readOnly={!isTodoTitleEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todoObject.checked) return;

                    if (isTodoTitleEditable) {
                        editTodo();
                    } else setIsTodoTitleEditable((prev) => !prev);
                }}
                disabled={todoObject.checked}
            >
                {isTodoTitleEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodoTitle(todoObject.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
