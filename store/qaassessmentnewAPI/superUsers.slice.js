import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_createsuperuser_create = createAsyncThunk(
  "superUsers/api_v1_createsuperuser_create",
  async payload => {
    const response = await apiService.api_v1_createsuperuser_create(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const superUsersSlice = createSlice({
  name: "superUsers",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_createsuperuser_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_createsuperuser_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_createsuperuser_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default { api_v1_createsuperuser_create, slice: superUsersSlice }
