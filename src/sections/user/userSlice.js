import { combineReducers } from "@reduxjs/toolkit";
import userInfoSlice from "sections/user/info/userInfoSlice";
import progressSlice from "sections/user/progress/progressSlice";

const userSlice = combineReducers({
    info: userInfoSlice,
    progress: progressSlice,
})

export default userSlice;