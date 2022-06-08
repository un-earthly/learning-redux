const { createStore } = require("redux")

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"
const initalState = {
    count: 0
}

const incrementAction = () => {
    return {
        type: INCREMENT
    }
}
const decrementAction = () => {
    return {
        type: DECREMENT
    }
}
const reset = () => {
    return {
        type: RESET
    }
}



const counterAppReducer = (state = initalState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }

        default: state
    }
}


const store = createStore(counterAppReducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(decrementAction())
store.dispatch(decrementAction())
store.dispatch(reset())