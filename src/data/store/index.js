import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from '../reducers';
import initialState from '../initial-states';

const sagaMiddleware = createSagaMiddleware();

// redux sagas is a middleware that we apply to the store
const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
