
import { createStore, applyMiddleware, AnyAction, } from 'redux'
import { HYDRATE} from 'next-redux-wrapper'
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
        return {
            ...state,
            ...action.payload,
        }
    } else {
        return rootReducer(state, action)
    }
}

export const store = createStore(reducer, bindMiddleware([thunkMiddleware]))

