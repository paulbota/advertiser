import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from './redux/reducer';
import sagas from './sagas';

export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = applyMiddleware(logger, sagaMiddleware);

    const store = createStore(reducer, middleware);
    sagaMiddleware.run(sagas);
    return store;
};
