import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name: "connection",
    initialState: null,
    reducers: {
        addConnetions: (state, action) => action.payload,
        removeConnections: (state, action) => null
    }
})

export const {addConnetions, removeConnections} = connectionSlice.actions

export default connectionSlice.reducer;