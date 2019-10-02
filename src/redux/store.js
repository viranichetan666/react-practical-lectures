import { createStore, compose } from "redux";
import createReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: []
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, createReducer());
const store = createStore(persistedReducer, composeEnhancer());
const persistor = persistStore(store);

export { store, persistor };
