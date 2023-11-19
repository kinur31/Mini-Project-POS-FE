import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {
    id: null,
    email: "",
    username: "",
    roleId: null,
    point: null,
    avatar: "",
  },
  isLogin: false,
};

export const AuthReducer = createSlice({
  name: "AuthReducer",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, fullname, address, email, avatar } = action.payload;

      state.user = {
        id,
        fullname,
        address,
        email,
        avatar,
      };
    },
    loginSuccess: (state, action) => {
      state.isLogin = true;
    },
    logoutSuccess: (state, action) => {
      state.isLogin = false;
      localStorage.removeItem("token");
    },
    keepLoginSuccess: (state) => {
      state.isLogin = true;
    },
  },
});

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8080/auth/login", {
        username,
        password,
      });

      localStorage.setItem("token", res?.data?.data?.token);
      dispatch(setUser(res?.data?.data?.user));
      dispatch(loginSuccess());
    } catch (err) {
      alert(err?.response?.data);
    }
  };
};

export const keepLogin = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const res = await axios.get("http://localhost:8080/auth/keep-login", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(setUser(res?.data?.data));
        dispatch(keepLoginSuccess());
      }
    } catch (err) {
      localStorage.removeItem("token");
      alert(err?.response?.data);
    }
  };
};

export const forgotPassword = (email) => {
  return async () => {
    try {
      await axios.patch("http://localhost:8080/auth/forgot-password", {
        email,
      });
    } catch (err) {
      alert(err?.response?.data);
    }
  };
};

export const resetPassword = (password) => {
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  const token = getQueryParam("token");

  return async () => {
    try {
      await axios.patch(
        `http://localhost:8080/auth/reset-password?token=${encodeURIComponent(
          token
        )}`,
        {
          password,
        }
      );
    } catch (err) {
      alert(err?.response?.data);
    }
  };
};

export const { loginSuccess, logoutSuccess, setUser, keepLoginSuccess } =
  AuthReducer.actions;

export default AuthReducer.reducer;
