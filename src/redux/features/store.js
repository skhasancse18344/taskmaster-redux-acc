import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasks/taskSlice";

const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
});
export default store;
