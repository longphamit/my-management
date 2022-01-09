import { createSlice } from "@reduxjs/toolkit";
import { Token } from "../../models/token";
import { UserInfo } from "../../models/user-info";
import { loginAction } from "../actions/auth-action";

interface State {
  token: Token | null;
  tokenExpiredTime: Date | null;
  isLoading: boolean;
  userInfo: UserInfo | null;
}
const initialState: State = {
  token: null,
  tokenExpiredTime: null,
  isLoading: false,
  userInfo: null,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(loginAction.fulfilled, (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
      };
    });
  },
});
export default authSlice.reducer;
