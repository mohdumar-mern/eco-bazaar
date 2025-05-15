import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger"; 
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage for web

import userReducer from "../features/user/UserSlice";
import cartReducer from "../features/cart/CartSlice";
import directoryReducer from "../features/directory-menu/DirectorySlice";
import shopReducer from "../features/shop/ShopSlice";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // Only persist the 'cart' reducer
};

const DEVELOPMENTMODE = import.meta.env.MODE === "development";

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,  // User reducer (NOT persisted)
  cart: cartReducer,  // Cart reducer (Persisted)
  directory: directoryReducer,  // Directory reducer (NOT persisted)
  shop: shopReducer,  // Shop reducer (NOT persisted)
});

// Wrap the rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = configureStore({
  reducer: persistedReducer, 
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({ serializableCheck: false });
    
    // Conditionally add logger middleware based on the environment
    if (DEVELOPMENTMODE) {
      middlewares.push(logger);
    }

    return middlewares;
  },
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };
