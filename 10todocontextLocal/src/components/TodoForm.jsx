import React, {useState} from "react";
import { useTodo } from "../contexts";
function TodoForm() {
    //ye individual todo k liye he 
    const [todo, setTodo] = useState("");

    //hum ne functionality app men define kar rakhi he isliye hum yahan context se use karenge, aur context men ye variables ya methods sirf hote hen ya exist karte hen bas
    const { addTodoTitle } = useTodo();

    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        // addTodoTitle(todo) //ye ghalat he kuki humne context men function ka structure define kar rakha he jo ek object lega isliye hume yahan bhi ek object pass karna hoga, ye todo ek string he isliye hum ise as a string direct pass nahi karsakte

        // hum ne yahan ek object pass kiya he kuk array men objects hen
        addTodoTitle({ todoTitle: todo, checked: false })
        // {id: Date.now(), todoTitle: todo, checked: false }// hum chahe to yahan id aur iski value desakte hen aur chahe to app.jsx men in dono men se koi bhi ek jaga chale gi, kisi ek jagah par likh sakte hen,
        // aur naye syntax men agar apki field ka naam aur value ka naam same he to ap sirf field ka naam likh sakte hen jaise yahan todoTitle: todoTitle ko humne todoTitle likh diya he kuk dono same hen
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

