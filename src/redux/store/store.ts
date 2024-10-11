import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from '../features/counter/counterSlice';
import logger from '../middleware/logger';
//import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    counter: counterSliceReducer
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  //devTools: false //for production
})


export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch