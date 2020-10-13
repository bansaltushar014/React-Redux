const initialState = {
    Avalue: 1
}

const reducerA = (state= initialState, action) => {
    const newState = {...state}
    
    if(action.type == "UpdateA"){
        return {
            ...state,
            Avalue: state.Avalue + action.Bvalue
        }
    }

    return newState;
}

export default reducerA;