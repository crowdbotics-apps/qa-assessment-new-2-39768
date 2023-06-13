// @ts-ignore
import { getGlobalOptions } from "@options"
import options from "../options"
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

const global = getGlobalOptions()
const BASE_URL = global.url

const profileAPI = axios.create({
  baseURL: BASE_URL
})

const adduser = async data => {
  const token = await AsyncStorage.getItem("access_token")

  return profileAPI.post("/modules/profile/user-profile/", data, {
    headers: { Authorization: `Token ${token}` }
  })
}

const getUser = async () => {
  const token = await AsyncStorage.getItem("access_token")

  return profileAPI.get("/modules/profile/user-profile/", {
    headers: { Authorization: `Token ${token}` }
  })
}

const deleteUser = async () => {
  const token = await AsyncStorage.getItem("access_token")

  return profileAPI.delete("/modules/profile/user-profile/", {
    headers: { Authorization: `Token ${token}` }
  })
}

export const api = {
  adduser: adduser,
  getUser: getUser,
  deleteUser: deleteUser
}
