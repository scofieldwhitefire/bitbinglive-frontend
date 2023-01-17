import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../config";
import { v4 as uuidv4 } from "uuid";


const NewRoom = () => {
  return uuidv4();
};

const headers = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access")}`,
  },
};

// const room = sessionStorage.getItem("chat") || NewRoom();

export const login = createAsyncThunk(
  "users/login",
  async ({ username, password }, thunkAPI) => {
    const body = {
      username,
      password,
    };

    try {
      const { data, status } = await axios.post(`${API_URL}/api/token/`, body);

      if (status === 200) {
        const { dispatch } = thunkAPI;

        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);

        dispatch(getUser());
        dispatch(lastlogin());

        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      if (err?.response?.status === 401) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      } else if (err?.message === "Network Error") {
        const errors = {
          status: 0,
          statusText: null,
          detail:
            "Unable to precess your request, we are working to Fix this issue.",
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: null,
          statusText: null,
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

export const lastlogin = createAsyncThunk(
  "users/lastlogin",
  async ({ location, ip, vpn }, thunkAPI) => {
    const body = {
      location,
      ip,
      vpn
    };

    try {
      const { data, status } = await axios.post(`${API_URL}/api/accounts/lastlogin`, body, headers);

      if (status === 201) {
        const { dispatch } = thunkAPI;

        dispatch(getLastLogin)

      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      if (err?.response?.status === 401) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      } else if (err?.message === "Network Error") {
        const errors = {
          status: 0,
          statusText: null,
          detail:
            "Unable to precess your request, we are working to Fix this issue.",
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: null,
          statusText: null,
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

export const getLastLogin = createAsyncThunk(
  "users/getLastLogin",
  async (_, thunkAPI) => {
    try {
      const { data, status } = await axios.post(
        `${API_URL}/api/accounts/lastlogin`,
        headers
      );

      if (status === 200) {

        localStorage.setItem("last-login", data.last_login);

        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      if (err?.response?.status === 401) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      } else if (err?.message === "Network Error") {
        const errors = {
          status: 0,
          statusText: null,
          detail:
            "Unable to precess your request, we are working to Fix this issue.",
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: null,
          statusText: null,
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

export const Register = createAsyncThunk(
  "users/register",
  async (
    {
      first_name,
      last_name,
      username,
      email,
      password,
      address,
      address2,
      city,
      state,
      country,
      zip_code,
    },
    thunkAPI
  ) => {
    const body = {
      first_name,
      last_name,
      username,
      email,
      password,
      address,
      address2,
      city,
      state,
      country,
      zip_code,
    };

    try {
      const { data, status } = await axios.post(
        `${API_URL}/api/accounts/register`,
        body
      );

      if (status === 201) {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);

        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      if (err?.response?.status === 400) {
        let detail;
        if (err?.response?.data.username) {
          detail = err?.response?.data.username;
        } else if (err?.response?.data.password) {
          detail = err?.response?.data.password;
        }
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail,
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: null,
          statusText: null,
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

export const getUser = createAsyncThunk("app/me", async (_, thunkAPI) => {
  try {
    const { data, status } = await axios.get(`${API_URL}/api/accounts/me`, headers);

    if (status === 200) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const checkAuth = createAsyncThunk(
  "users/verify",
  async (_, thunkAPI) => {
    const body = {
      token: localStorage.getItem("access"),
    };
    try {
      const { data, status } = await axios.post(
        `${API_URL}/api/token/verify/`,
        body
      );

      if (status === 200) {
        const { dispatch } = thunkAPI;

        dispatch(getUser());
        // dispatch(getKey());

        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const logout = createAsyncThunk("users/logout", async (_, thunkAPI) => {
  try {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    const data = { message: "Successfully Logged out", status: 200 };

    return data;
  } catch (err) {
    const data = { message: "Error occurred logging you out", status: 500 };
    return thunkAPI.rejectWithValue(data);
  }
});

export const checkEmaila = createAsyncThunk(
  "users/checkEmail",
  async ({ email }, thunkAPI) => {
    const body = {
      email,
    };
    try {
      const { data, status } = await axios.post(
        `${API_URL}/api/accounts/check_email`,
        body
      );

      if (status === 200) return data;
    } catch (err) {
      const data = {
        message: "Error occurred fetching your account details",
        status: 500,
      };
      return thunkAPI.rejectWithValue(data);
    }
  }
);

export const LastLoging = createAsyncThunk(
  "users/loging",
  async (_, thunkAPI) => {
    try {
      const { data, status } = await axios.get(`${API_URL}/api/v1/login`, headers);

      if (status === 200) return data;
    } catch (err) {
      const data = {
        message: "Error occurred fetching your account details",
        status: 500,
      };
      return thunkAPI.rejectWithValue(data);
    }
  }
);

export const LastLoginp = createAsyncThunk(
  "users/loginp",
  async (_, thunkAPI) => {
    // const body = {
    //   location,
    //   ip,
    //   vpn,
    // };
    try {
      const { data, status } = await axios.post(
        `${API_URL}/api/v1/login`,
        {},
        headers
      );

      if (status === 201) return data;
    } catch (err) {
      const data = {
        message: "Error occurred fetching your account details",
        status: 500,
      };
      return thunkAPI.rejectWithValue(data);
    }
  }
);

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  registered: false,
  account: [
    {
      account_no: null,
      account_type: null,
      history: [],
      bar_chart: [],
      balance: [
        {
          total_balance: 0,
          available_balance: 0,
          due_balance: 0,
        },
      ],
      external_accounts: [],
      pay_due: null,
      allow_transfer_to: null,
      allow_transfer_from: null,
      can_add_account: null,
    },
  ],
  last_login: null,
  chatInit: {
    messages: [],
    agent: {
      name: "",
      position: "",
      is_online: !1,
      img: 1,
    },
    room: null,
  },
  subLoading: false,
  cplan: {
    is_active: false,
    plan: "",
    payment_info: null,
    status: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetRegistered: (state) => {
      state.registered = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = !0;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = !1;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuth.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.loading = false;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = !1;
      })
      .addCase(logout.rejected, (state) => {
        state.loading = false;
      })
      .addCase(Register.pending, (state) => {
        state.loading = !0;
      })
      .addCase(Register.fulfilled, (state) => {
        state.loading = !1;
        state.registered = !0;
      })
      .addCase(Register.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(checkEmaila.pending, (state) => {
        state.loading = !0;
      })
      .addCase(checkEmaila.fulfilled, (state, action) => {
        state.loading = !1;
        // state.account = action.payload;
      })
      .addCase(checkEmaila.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(LastLoginp.pending, (state) => {
        state.loading = !0;
      })
      .addCase(LastLoginp.fulfilled, (state, action) => {
        state.loading = !1;
        state.chatInit = action.payload;
      })
      .addCase(LastLoginp.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(LastLoging.pending, (state) => {
        state.loading = !0;
      })
      .addCase(LastLoging.fulfilled, (state, action) => {
        state.loading = !1;
        // state.last_login = action.payload;
      })
      .addCase(LastLoging.rejected, (state) => {
        state.loading = !1;
      });
  },
});

export const { resetRegistered } = userSlice.actions;
export default userSlice.reducer;
