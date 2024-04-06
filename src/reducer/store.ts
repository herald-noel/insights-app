import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
    }),
});

export const persistor = persistStore(store)

