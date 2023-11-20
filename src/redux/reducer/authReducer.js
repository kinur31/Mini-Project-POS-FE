import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  user: {
    id: null,
    roleId: null,
    fullname: "",
    address: "",
    username: "",
    email: "",
    avatar: "",
  },
  isLogin: false,
};

export const AuthReducer = createSlice({
  name: "AuthReducer",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, roleId, fullname, address, username, email, avatar } =
        action.payload;

      state.user = {
        id,
        roleId,
        fullname,
        address,
        username,
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
      if (!state.isLogin) {
        state.isLogin = true;
      }
    },
  },
});

export const loginAdmin = (username, password) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8080/auth/login", {
        username,
        password,
      });

      const { token, user } = res?.data?.data;

      localStorage.setItem("token", token);
      dispatch(setUser(user));
      dispatch(loginSuccess());
      toast.success("Log out succes");
    } catch (err) {
      toast.error("Error logging in. Please check your credentials.");
    }
  };
};

export const loginCashier = (username, password) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8080/auth/login", {
        username,
        password,
      });

      const { token, user } = res?.data?.data;

      if (user?.role_id === 2) {
        localStorage.setItem("token", token);
        dispatch(setUser(user));
        dispatch(loginSuccess());
        toast.success("Logged in");
      } else {
        toast.error("You are not an cashier.");
      }
    } catch (err) {
      toast.error("Error logging in. Please check your credentials.");
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
