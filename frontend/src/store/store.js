import { configureStore } from '@reduxjs/toolkit'

import counterReducer from "./functions/counterSlice";
import currentUser from "./CurrentUser/CurrentUser";

export default configureStore({
    reducer: {
        counter: counterReducer,
        currentUser,
    },
})