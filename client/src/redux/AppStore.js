/*
 *   Copyright (c) 2025 RCUBE PLANET PVT LTD
 *   All rights reserved.
 */

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const AppStore = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default AppStore;
