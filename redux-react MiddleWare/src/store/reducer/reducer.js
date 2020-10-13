const initialState = {
    age:21,
    history: []
}

const reducer = (state= initialState, action) => {
    const newState = {...state}
    
    if(action.type == "Age_Up"){
        return {
            ...state,
            age: state.age + 1,
            history: state.history.concat({age: state.age + 1})
        }
    }

    if(action.type == "Age_Down")
    return {
        ...state,
        age: state.age -1,
        history: state.history.concat({age: state.age - 1})
    }

    return newState;
}

export default reducer;