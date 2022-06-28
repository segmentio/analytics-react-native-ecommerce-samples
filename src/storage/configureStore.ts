import {configureStore} from '@reduxjs/toolkit';
import productReducer from './product';
import optionsReducer from './options';
import cartReducer from './cart';

export const store = configureStore({
  reducer: {
    product: productReducer,
    options: optionsReducer,
    cart: cartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
