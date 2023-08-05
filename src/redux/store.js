import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { deliveryServiceApi } from "/src/redux/api/deliveryServiceApi";
import { delivertServiceReducer } from "/src/redux/slices/deliveryService/deliveryServiceSlice";

const delivertServicePersistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  delivertService: delivertServiceReducer,
});

const delivertServicePersistReducer = persistReducer(
  delivertServicePersistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: {
    [deliveryServiceApi.reducerPath]: deliveryServiceApi.reducer,
    delivertService: delivertServicePersistReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    deliveryServiceApi.middleware,
  ],
});

export const persistStor = persistStore(store);
