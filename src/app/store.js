import { configureStore } from '@reduxjs/toolkit'
import { docProfileSlice } from '../counter/docprofileSlice'

export const store = configureStore({
  reducer: {
    [docProfileSlice.reducerPath]: docProfileSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(docProfileSlice.middleware),
})