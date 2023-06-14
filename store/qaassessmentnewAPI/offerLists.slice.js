import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_offerlist_list = createAsyncThunk(
  "offerLists/api_v1_offerlist_list",
  async payload => {
    const response = await apiService.api_v1_offerlist_list(payload)
    return response.data
  }
)
export const api_v1_offerlist_create = createAsyncThunk(
  "offerLists/api_v1_offerlist_create",
  async payload => {
    const response = await apiService.api_v1_offerlist_create(payload)
    return response.data
  }
)
export const api_v1_offerlist_retrieve = createAsyncThunk(
  "offerLists/api_v1_offerlist_retrieve",
  async payload => {
    const response = await apiService.api_v1_offerlist_retrieve(payload)
    return response.data
  }
)
export const api_v1_offerlist_update = createAsyncThunk(
  "offerLists/api_v1_offerlist_update",
  async payload => {
    const response = await apiService.api_v1_offerlist_update(payload)
    return response.data
  }
)
export const api_v1_offerlist_partial_update = createAsyncThunk(
  "offerLists/api_v1_offerlist_partial_update",
  async payload => {
    const response = await apiService.api_v1_offerlist_partial_update(payload)
    return response.data
  }
)
export const api_v1_offerlist_destroy = createAsyncThunk(
  "offerLists/api_v1_offerlist_destroy",
  async payload => {
    const response = await apiService.api_v1_offerlist_destroy(payload)
    return response.data
  }
)
export const api_v1_offerlist_my_offer_retrieve = createAsyncThunk(
  "offerLists/api_v1_offerlist_my_offer_retrieve",
  async payload => {
    const response = await apiService.api_v1_offerlist_my_offer_retrieve(
      payload
    )
    return response.data
  }
)
export const api_v1_offerlist_my_offer_partial_update = createAsyncThunk(
  "offerLists/api_v1_offerlist_my_offer_partial_update",
  async payload => {
    const response = await apiService.api_v1_offerlist_my_offer_partial_update(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const offerListsSlice = createSlice({
  name: "offerLists",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_offerlist_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_offerlist_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_offerlist_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_offerlist_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_offerlist_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_offerlist_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_offerlist_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_offerlist_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_offerlist_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_offerlist_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_offerlist_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_offerlist_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_offerlist_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_offerlist_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_offerlist_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_offerlist_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_offerlist_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_offerlist_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_offerlist_my_offer_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_offerlist_my_offer_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_offerlist_my_offer_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_offerlist_my_offer_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_offerlist_my_offer_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_offerlist_my_offer_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_offerlist_list,
  api_v1_offerlist_create,
  api_v1_offerlist_retrieve,
  api_v1_offerlist_update,
  api_v1_offerlist_partial_update,
  api_v1_offerlist_destroy,
  api_v1_offerlist_my_offer_retrieve,
  api_v1_offerlist_my_offer_partial_update,
  slice: offerListsSlice
}
