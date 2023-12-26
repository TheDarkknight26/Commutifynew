import { configureStore } from "@reduxjs/toolkit";
import digitalboardInformation from "./slices/digitalBoardDetailsSlice";

const store = configureStore({
    reducer: {
        digitalBoard: digitalboardInformation.reducer
    }
})



export default store