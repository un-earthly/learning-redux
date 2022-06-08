const { createStore } = require("redux")

const INCREMENT = "INCREMENT"
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE"
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
const incrementByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
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
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
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

// store.dispatch(incrementAction())
// store.dispatch(incrementAction())
// store.dispatch(incrementAction())
// store.dispatch(incrementAction())
// store.dispatch(incrementAction())
// store.dispatch(incrementAction())
// store.dispatch(incrementAction())
// store.dispatch(decrementAction())
// store.dispatch(decrementAction())
store.dispatch(incrementByValue(15))
store.dispatch(incrementByValue(15))
store.dispatch(reset())