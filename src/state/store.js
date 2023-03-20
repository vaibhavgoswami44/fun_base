import { configureStore } from "@reduxjs/toolkit";
import { handleTheme } from "./slices";

export default configureStore({
    reducer:handleTheme
})