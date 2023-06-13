import axios from "axios"
import { globalOptions } from "../../options/options"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const getSpotList = async () => {
  const token = await AsyncStorage.getItem("access_token")
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${globalOptions.url}/api/v1/offerlist/spot_price/`,
    headers: {
      Authorization: `Token ${token}`
    }
  }
  return axios.request(config)
}

export const getRetailList = async () => {
  const token = await AsyncStorage.getItem("access_token")
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${globalOptions.url}/api/v1/offerlist/retail_value/`,
    headers: {
      Authorization: `Token ${token}`
    }
  }
  return axios.request(config)
}

export const getOffer = async () => {
  const token = await AsyncStorage.getItem("access_token")
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${globalOptions.url}/api/v1/offerlist/make_offer/`,
    headers: {
      Authorization: `Token ${token}`
    }
  }
  return axios.request(config)
}

export const getUserDetails = async () => {
  const token = await AsyncStorage.getItem("access_token")
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${globalOptions.url}/api/v1/profile/`,
    headers: {
      Authorization: `Token ${token}`
    }
  }
  return axios.request(config)
}

export const updateProfile = async payload => {
  const token = await AsyncStorage.getItem("access_token")
  const config = {
    method: "patch",
    maxBodyLength: Infinity,
    url: `${globalOptions.url}/api/v1/profile/${payload.user}/`,
    headers: {
      Authorization: `Token ${token}`
    },
    data: payload
  }
  return axios.request(config)
}

export const getUserRequests = async () => {
  const token = await AsyncStorage.getItem("access_token")
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${globalOptions.url}/api/v1/coin/`,
    headers: {
      Authorization: `Token ${token}`
    }
  }
  return axios.request(config)
}
export const api = {
  getSpotList,
  getRetailList,
  getOffer,
  getUserDetails, 
  updateProfile,
  getUserRequests
}
