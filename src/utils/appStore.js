import { configureStore } from "@reduxjs/toolkit";
import userReduer from "./userSlice"
import feedReducer from "./feedSlice"

const appStore = configureStore({
    reducer: {
        user: userReduer,
        feed: feedReducer
    },
});

export default appStore;