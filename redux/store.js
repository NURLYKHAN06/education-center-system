import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";

let sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
