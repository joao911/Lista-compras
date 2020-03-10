import {createStore, applyMiddleware, compose} from  'redux'
import createSagaMiddeware from 'redux-saga'

import reducers from './reducers'
import sagas from './saga'
import {loadState, savestate}  from './localStorage'

const localStorageState = loadState();
const sagaMiddleware = createSagaMiddeware();
const middewares = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;
const store = createStore(reducers, localStorageState, composeEnhancers(
    applyMiddleware(...middewares)
));

sagaMiddleware.run(sagas)

store.subscribe(() =>{
    savestate({list: store.getState().list})
})

export default store;