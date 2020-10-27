import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from "redux-saga";
import  watcherSaga  from "./sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
  // applyMiddleware(sagaMiddleware)
)

// run the saga
sagaMiddleware.run(watcherSaga);

export default store