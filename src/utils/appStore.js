import { configureStore } from "@reduxjs/toolkit";
import userReduer from "./userSlice"
import feedReducer from "./feedSlice"
import connectionReducer from "./connectionSlice"

const appStore = configureStore({
    reducer: {
        user: userReduer,
        feed: feedReducer,
        connections: connectionReducer
    },
});

export default appStore;