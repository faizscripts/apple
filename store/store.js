import {applyMiddleware, combineReducers, createStore} from 'redux'
import {createWrapper} from 'next-redux-wrapper'
import {composeWithDevTools} from 'redux-devtools-extension'
import updateAdminReducer from './admin/reducer'

const combinedReducers = combineReducers({
    admin: updateAdminReducer,
})

export const makeStore = () => {
    return createStore(combinedReducers, composeWithDevTools(
        applyMiddleware()
    ))
}

export const wrapper = createWrapper(makeStore)
