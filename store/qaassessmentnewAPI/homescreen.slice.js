import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { Alert } from "react-native"
import { api } from "./homeApis"

export const getSpotList = createAsyncThunk("home/spotList", async () => {
  try {
    const response = await api.getSpotList()
    return response.data
  } catch (error) {
    Alert.alert("Error", error.message)
    throw new Error()
  }
})

export const getRetailList = createAsyncThunk(
  "home/getRetailList",
  async () => {
    try {
      const response = await api.getRetailList()
      return response.data
    } catch (error) {
      Alert.alert("Error", error.message)
      throw new Error()
    }
  }
)

export const getOffers = createAsyncThunk("home/getOffers", async () => {
  try {
    const response = await api.getOffer()
    return response.data
  } catch (error) {
    Alert.alert("Error", error.message)
    throw new Error()
  }
})

export const getUserDetails = createAsyncThunk(
  "profile/getUserDetails",
  async () => {
    try {
      const response = await api.getUserDetails()
      return response.data
    } catch (error) {
      Alert.alert("Error", error.message)
      throw new Error()
    }
  }
)

export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async data => {
    try {
      const response = await api.updateProfile(data)
      return response.data
    } catch (error) {
      Alert.alert("Error", error.message)
      throw new Error()
    }
  }
)

export const getUserRequests = createAsyncThunk(
  "profile/getUserRequests",
  async () => {
    try {
      const response = await api.getUserRequests()
      return response.data
    } catch (error) {
      Alert.alert("Error", error.message)
      throw new Error()
    }
  }
)

const initialState = {
  token: null,
  spotList: {
    entities: [],
    api: {
      loading: "idle",
      error: null
    }
  },
  retailList: {
    entities: [],
    api: {
      loading: "idle",
      error: null
    }
  },
  offerList: {
    entities: [],
    api: {
      loading: "idle",
      error: null
    }
  },
  userDetails: {
    entities: {},
    api: {
      loading: "idle",
      error: null
    }
  },
  updateProfile: {
    entities: false,
    api: {
      loading: "idle",
      error: null
    }
  },
  userRequestList: {
    entities: [],
    api: {
      loading: "idle",
      error: null
    }
  }
}
const homescreenSlice = createSlice({
  name: "homescreen",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getSpotList.pending]: (state, action) => {
      if (state.spotList.api.loading === "idle") {
        state.spotList.api.loading = "pending"
        state.spotList.api.error = null
      }
    },
    [getSpotList.fulfilled]: (state, action) => {
      if (state.spotList.api.loading === "pending") {
        state.spotList.entities = action.payload
        state.spotList.api.loading = "idle"
      }
    },
    [getSpotList.rejected]: (state, action) => {
      if (state.spotList.api.loading === "pending") {
        state.spotList.api.error = action.error
        state.spotList.api.loading = "idle"
      }
    },
    [getRetailList.pending]: (state, action) => {
      if (state.retailList.api.loading === "idle") {
        state.retailList.api.loading = "pending"
        state.retailList.api.error = null
      }
    },
    [getRetailList.fulfilled]: (state, action) => {
      if (state.retailList.api.loading === "pending") {
        state.retailList.entities = action.payload
        state.retailList.api.loading = "idle"
      }
    },
    [getRetailList.rejected]: (state, action) => {
      if (state.retailList.api.loading === "pending") {
        state.retailList.api.error = action.error
        state.retailList.api.loading = "idle"
      }
    },

    [getOffers.pending]: (state, action) => {
      if (state.offerList.api.loading === "idle") {
        state.offerList.api.loading = "pending"
        state.offerList.api.error = null
      }
    },
    [getOffers.fulfilled]: (state, action) => {
      if (state.offerList.api.loading === "pending") {
        state.offerList.entities = action.payload
        state.offerList.api.loading = "idle"
      }
    },
    [getOffers.rejected]: (state, action) => {
      if (state.offerList.api.loading === "pending") {
        state.offerList.api.error = action.error
        state.offerList.api.loading = "idle"
      }
    },
    [getUserDetails.pending]: (state, action) => {
      if (state.userDetails.api.loading === "idle") {
        state.userDetails.api.loading = "pending"
        state.userDetails.api.error = null
      }
    },
    [getUserDetails.fulfilled]: (state, action) => {
      if (state.userDetails.api.loading === "pending") {
        state.userDetails.entities = action.payload[0]
        state.userDetails.api.loading = "idle"
      }
    },
    [getUserDetails.rejected]: (state, action) => {
      if (state.userDetails.api.loading === "pending") {
        state.userDetails.api.error = action.error
        state.userDetails.api.loading = "idle"
      }
    },

    [updateProfile.pending]: (state, action) => {
      if (state.updateProfile.api.loading === "idle") {
        state.updateProfile.api.loading = "pending"
        state.updateProfile.api.error = null
      }
    },
    [updateProfile.fulfilled]: (state, action) => {
      if (state.updateProfile.api.loading === "pending") {
        state.updateProfile.entities = action.payload
        state.updateProfile.api.loading = "idle"
      }
    },
    [updateProfile.rejected]: (state, action) => {
      if (state.updateProfile.api.loading === "pending") {
        state.updateProfile.api.error = action.error
        state.updateProfile.api.loading = "idle"
      }
    },

    [getUserRequests.pending]: (state, action) => {
      if (state.userRequestList.api.loading === "idle") {
        state.userRequestList.api.loading = "pending"
        state.userRequestList.api.error = null
      }
    },
    [getUserRequests.fulfilled]: (state, action) => {
      if (state.userRequestList.api.loading === "pending") {
        state.userRequestList.entities = action.payload
        state.userRequestList.api.loading = "idle"
      }
    },
    [getUserRequests.rejected]: (state, action) => {
      if (state.userRequestList.api.loading === "pending") {
        state.userRequestList.api.error = action.error
        state.userRequestList.api.loading = "idle"
      }
    }
  }
})

export default {
  getSpotList,
  getRetailList,
  getOffers,
  slice: homescreenSlice
}
