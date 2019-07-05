
export const incrementAction = amount => ({
    type: 'INCREMENT',
    payload: amount,
})
export const decrementAction = amount => ({
    type: 'DECREMENT',
    payload: amount,
})
export const resetAction = {
    type: 'RESET'
}