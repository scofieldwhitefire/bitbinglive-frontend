import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../config";
import { v4 as uuidv4 } from "uuid";

const headers = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access")}`,
  },
};

export const getBalance = createAsyncThunk(
  "users/getBalance",
  async (_, thunkAPI) => {
    try {
      const { data, status } = await axios.get(
        `${API_URL}/api/v1/balance`,
        headers
      );

      if (status === 200) {
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

export const getActivities = createAsyncThunk(
  "users/getActivities",
  async (_, thunkAPI) => {
    try {
      const { data, status } = await axios.get(
        `${API_URL}/api/v1/activities`,
        headers
      );

      if (status === 200) {
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

export const postActivities = createAsyncThunk(
  "users/postActivities",
  async ({ message }, thunkAPI) => {
    const body = {
      message,
    };
    try {
      const { data, status } = await axios.post(
        `${API_URL}/api/v1/activities`,
        body,
        headers
      );

      if (status === 201) {
        const { dispatch } = thunkAPI;

        dispatch(getActivities());
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

export const postTrade = createAsyncThunk(
  "users/postTrade",
  async ({ coin, amount, text_msg }, thunkAPI) => {
    const body = {
      coin,
      amount,
      text_msg,
    };
    try {
      const { data, status } = await axios.post(
        `${API_URL}/api/v1/trades`,
        body,
        headers
      );

      if (status === 201) {
        const { dispatch } = thunkAPI;

        dispatch(getTrade());
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

export const getTrades = createAsyncThunk(
  "users/getTrades",
  async (_, thunkAPI) => {
    try {
      const { data, status } = await axios.get(
        `${API_URL}/api/v1/trades`,
        headers
      );

      if (status === 200) {
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

export const postOpenTrade = createAsyncThunk(
  "users/postOpenTrade",
  async ({ coin, amount, text_msg }, thunkAPI) => {
    const body = {
      coin,
      amount,
      text_msg,
    };
    try {
      const { data, status } = await axios.post(
        `${API_URL}/api/v1/trades`,
        body,
        headers
      );

      if (status === 201) {
        const { dispatch } = thunkAPI;

        dispatch(getOpenTrades());
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

export const getOpenTrades = createAsyncThunk(
  "users/getOpenTrades",
  async (_, thunkAPI) => {
    try {
      const { data, status } = await axios.get(
        `${API_URL}/api/v1/trades/opened`,
        headers
      );

      if (status === 200) {
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

export const getTraders = createAsyncThunk(
  "users/getTraders",
  async (_, thunkAPI) => {
    try {
      const { data, status } = await axios.get(
        `${API_URL}/api/v1/traders`,
        headers
      );

      if (status === 200) {
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

export const deleteTraders = createAsyncThunk(
  "users/deleteTraders",
  async ({ uid }, thunkAPI) => {
    const body = {
      data: { uid },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    };
    try {
      const { data, status } = await axios.delete(
        `${API_URL}/api/v1/traders/copy`,
        body
      );

      if (status === 200) {
        const { dispatch } = thunkAPI;

        dispatch(getTraders());
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

export const copyTraders = createAsyncThunk(
  "users/copyTraders",
  async ({ uid }, thunkAPI) => {
    const body = { uid };
    try {
      const { data, status } = await axios.post(
        `${API_URL}/api/v1/traders/copy`,
        body,
        headers
      );

      if (status === 201) {
        const { dispatch } = thunkAPI;

        dispatch(getTraders());
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

export const getDeposits = createAsyncThunk(
  "users/getDeposits",
  async (_, thunkAPI) => {
    try {
      const { data, status } = await axios.get(
        `${API_URL}/api/v1/deposits`,
        headers
      );

      if (status === 200) {
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

export const postDeposit = createAsyncThunk(
  "users/postDeposit",
  async ({ uid, amount, coin_price, coin_rate, currency }, thunkAPI) => {
    const body = { uid, amount, coin_price, coin_rate, currency };
    try {
      const { data, status } = await axios.post(
        `${API_URL}/api/v1/deposits`,
        body,
        headers
      );

      if (status === 201) {
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

export const depositExpired = createAsyncThunk(
  "users/depositExpired",
  async ({ uid }, thunkAPI) => {
    const body = { uid };
    try {
      const { data, status } = await axios.post(
        `${API_URL}/api/v1/deposits/expired`,
        body,
        headers
      );

      if (status === 200) {
        const { dispatch } = thunkAPI;

        dispatch(getDeposits());
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

export const getWithdraws = createAsyncThunk(
  "users/getWithdraws",
  async (_, thunkAPI) => {
    try {
      const { data, status } = await axios.get(
        `${API_URL}/api/v1/withdraw`,
        headers
      );

      if (status === 200) {
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

export const postWithdraw = createAsyncThunk(
  "users/postWithdraw",
  async ({ uid,
      amount,
      payment_type,
      address,
      account,
      currency,
      bank_name,
      account_name,
      account_number,
      routing_number,
      ssn,
      ppemail }, thunkAPI) => {
    const body = { uid,
      amount,
      payment_type,
      address,
      account,
      currency,
      bank_name,
      account_name,
      account_number,
      routing_number,
      ssn,
      ppemail };
    try {
      const { data, status } = await axios.post(
        `${API_URL}/api/v1/withdraw`,
        body,
        headers
      );

      if (status === 201) {
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

const initialState = {
  balance: 0,
  profit: 0,
  deposit: 0,
  loading: !1,
  activities: ["No recent activities"],
  trades: ["No trade"],
  openTrade: ["No opened trade"],
  Trade: [],
  traders: ["No traders found"],
  copiedTrades: ["No copied trader found"],
  deposits: ["No deposit"],
  depositDetails: null,
  withdraws: ["No withdrawal history"],
  withdrawDetail: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    resetRegistered: (state) => {
      state.registered = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBalance.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBalance.fulfilled, (state, action) => {
        state.loading = false;
        state.balance = action.payload.balance.balance;
        state.profit = action.payload.balance.profit;
        state.deposit = action.payload.balance.deposit;
      })
      .addCase(getBalance.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getActivities.pending, (state) => {
        state.loading = true;
      })
      .addCase(getActivities.fulfilled, (state, action) => {
        state.loading = false;
        state.activities = action.payload.activities;
      })
      .addCase(getActivities.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getTrades.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTrades.fulfilled, (state, action) => {
        state.loading = false;
        state.trades = action.payload.trades;
      })
      .addCase(getTrades.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getOpenTrades.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOpenTrades.fulfilled, (state, action) => {
        state.loading = false;
        state.openTrade = action.payload.trades;
      })
      .addCase(getOpenTrades.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getTraders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTraders.fulfilled, (state, action) => {
        state.loading = false;
        state.traders = action.payload.traders;
        state.copiedTrades = action.payload.copied;
      })
      .addCase(getTraders.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getDeposits.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDeposits.fulfilled, (state, action) => {
        state.loading = false;
        state.deposits = action.payload.deposits;
      })
      .addCase(getDeposits.rejected, (state) => {
        state.loading = false;
      })
      .addCase(postDeposit.pending, (state) => {
        state.loading = true;
      })
      .addCase(postDeposit.fulfilled, (state, action) => {
        state.loading = false;
        state.depositDetails = action.payload;
      })
      .addCase(postDeposit.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getWithdraws.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWithdraws.fulfilled, (state, action) => {
        state.loading = false;
        state.withdraws = action.payload.withdraws;
      })
      .addCase(getWithdraws.rejected, (state) => {
        state.loading = false;
      })
      .addCase(postWithdraw.pending, (state) => {
        state.loading = true;
      })
      .addCase(postWithdraw.fulfilled, (state, action) => {
        state.loading = false;
        state.withdrawDetail = action.payload;
      })
      .addCase(postWithdraw.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { resetRegistered } = dashboardSlice.actions;
export default dashboardSlice.reducer;
