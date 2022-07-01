import { configureStore } from '@reduxjs/toolkit';
import sportsReducer from './sportSlice';
import detailReducer from './detailsSlice';

const store = configureStore({
  reducer: {
    sports: sportsReducer,
    detail: detailReducer,
  },
});

export default store;
