import {applyMiddleware, combineReducers, createStore} from 'redux'
import {createWrapper} from 'next-redux-wrapper'
import {composeWithDevTools} from 'redux-devtools-extension'
import updateUserReducer from './user/reducer'

const combinedReducers = combineReducers({
    user: updateUserReducer,
})

const makeStore = () => {
    return createStore(combinedReducers, composeWithDevTools(
        applyMiddleware()
    ))
}

export const wrapper = createWrapper(makeStore)