const initialState = {
    count: 0
}
export default (state = initialState, action) => {
    switch(action.type){
        case 'INCREMENT': return { count: state.count + action.payload };
        case 'DECREMENT': return { count: state.count - action.payload };
        case 'RESET' : return { count: 0 };
        default: return state
    }
}