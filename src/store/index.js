import { configureStore } from '@reduxjs/toolkit';
import loreReducer from './loreReducer';

export default configureStore({
    reducer: {
        loreReducer,
    }
})