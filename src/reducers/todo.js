const todos = (state=[], action) => {
    switch(action.type){
        case "ADD":
            return [
                ...state, {
                    id:state.length==0?0:state[state.length-1].id+1,
                    text: action.text,
                    completed: false
                }
            ];
        case "TOGGLE":
            return state.map(todo =>
                (todo.id === action.id)
                ? {...todo, completed: !todo.completed}
                : todo)
        case "REMOVE":
            return state.filter((todo)=>{
                return todo.id!=action.id
            });
        default:
            return state;
    }
}

export default todos;