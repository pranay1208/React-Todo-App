let nextId = 0;
export const addTodo = (text) => ({
    type: "ADD",
    text: text,
    id: nextId++
})

export const toggleTodo = (id) => ({
    type: "TOGGLE",
    id
})

export const removeTodo = (id) => ({
    type: "REMOVE",
    id
})