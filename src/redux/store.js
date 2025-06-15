import { configureStore } from "@reduxjs/toolkit";
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
import { carsReducer } from "./carsSlice";
import { favoritesReducer } from "./favorites/favoritesReducer";

const favoritePersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["items"],
};

const persistedFavoritesReducer = persistReducer(
  favoritePersistConfig,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: persistedFavoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
