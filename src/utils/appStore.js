import { configureStore } from "@reduxjs/toolkit";
import userReduer from "./userSlice"
import feedReducer from "./feedSlice"
import connectionReducer from "./connectionSlice"
import requestReducer from "./requestSlice"

const appStore = configureStore({
    reducer: {
        user: userReduer,
        feed: feedReducer,
        connections: connectionReducer,
        requests: requestReducer,
    },
});

export default appStore;