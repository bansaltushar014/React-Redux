const initialState = {
    Bvalue: 1
}

const reducerB = (state= initialState, action) => {
    const newState = {...state}
    
    if(action.type == "UpdateB"){
        return {
            ...state,
            Bvalue: state.Bvalue + action.Avalue
        }
    }
    return newState;
}

export default reducerB;