
import { createStore, applyMiddleware, AnyAction, } from 'redux'
import { MakeStore, Context,HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'

import rootReducer from "./reducers";

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const reducer = (state, action: AnyAction) => {
    if (action.type === HYDRATE) {
        console.log(state)
        return {
            ...state,
            ...action.payload,
        }
    } else {
        return rootReducer(state, action)
    }
}


const makeStore: MakeStore = (context: Context) => createStore(reducer, bindMiddleware([thunkMiddleware]));


export const wrapper = createWrapper(makeStore)