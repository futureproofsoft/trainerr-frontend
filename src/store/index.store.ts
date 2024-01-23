import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { homeReducer } from '@modules/home/store/homeSlice.store';
import { authReducer } from '@modules/auth/store/authSlice.store';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';

// Persist Config
const persistConfig = {
  key: 'root',
  storage,
};

// Persisted Reducers
const persistedHomeReducer = persistReducer(persistConfig, homeReducer);
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Configure Store
export const store = configureStore({
  reducer: {
    home: persistedHomeReducer,
    auth: persistedAuthReducer,
  },
});

// Create Persistor
export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
