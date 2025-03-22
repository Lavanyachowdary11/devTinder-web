import { configureStore } from "@reduxjs/toolkit";
import userReduer from "./userSlice"

const appStore = configureStore({
    reducer: {
        user: userReduer
    },
});

export default appStore;