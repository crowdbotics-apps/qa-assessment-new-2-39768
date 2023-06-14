import axios from "axios"
const qaassessmentnewAPI = axios.create({
  baseURL: "https://qa-assessment-new-2-39768.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_coin_list(payload) {
  return qaassessmentnewAPI.get(`/api/v1/coin/`)
}
function api_v1_coin_create(payload) {
  return qaassessmentnewAPI.post(`/api/v1/coin/`, payload.data)
}
function api_v1_login_create(payload) {
  return qaassessmentnewAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_offer_list(payload) {
  return qaassessmentnewAPI.get(`/api/v1/offer/`)
}
function api_v1_offer_create(payload) {
  return qaassessmentnewAPI.post(`/api/v1/offer/`, payload.data)
}
function api_v1_signup_create(payload) {
  return qaassessmentnewAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_company_list(payload) {
  return qaassessmentnewAPI.get(`/api/v1/company/`)
}
function api_v1_company_create(payload) {
  return qaassessmentnewAPI.post(`/api/v1/company/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return qaassessmentnewAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return qaassessmentnewAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return qaassessmentnewAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return qaassessmentnewAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return qaassessmentnewAPI.post(`/rest-auth/login/`, payload.data)
}
function api_v1_coin_retrieve(payload) {
  return qaassessmentnewAPI.get(`/api/v1/coin/${payload.id}/`)
}
function api_v1_coin_update(payload) {
  return qaassessmentnewAPI.put(`/api/v1/coin/${payload.id}/`, payload.data)
}
function api_v1_coin_partial_update(payload) {
  return qaassessmentnewAPI.patch(`/api/v1/coin/${payload.id}/`, payload.data)
}
function api_v1_coin_destroy(payload) {
  return qaassessmentnewAPI.delete(`/api/v1/coin/${payload.id}/`)
}
function api_v1_metaltype_list(payload) {
  return qaassessmentnewAPI.get(`/api/v1/metaltype/`)
}
function api_v1_metaltype_create(payload) {
  return qaassessmentnewAPI.post(`/api/v1/metaltype/`, payload.data)
}
function api_v1_offerlist_list(payload) {
  return qaassessmentnewAPI.get(`/api/v1/offerlist/`)
}
function api_v1_offerlist_create(payload) {
  return qaassessmentnewAPI.post(`/api/v1/offerlist/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return qaassessmentnewAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return qaassessmentnewAPI.post(`/rest-auth/logout/`)
}
function api_v1_offer_retrieve(payload) {
  return qaassessmentnewAPI.get(`/api/v1/offer/${payload.id}/`)
}
function api_v1_offer_update(payload) {
  return qaassessmentnewAPI.put(`/api/v1/offer/${payload.id}/`, payload.data)
}
function api_v1_offer_partial_update(payload) {
  return qaassessmentnewAPI.patch(`/api/v1/offer/${payload.id}/`, payload.data)
}
function api_v1_offer_destroy(payload) {
  return qaassessmentnewAPI.delete(`/api/v1/offer/${payload.id}/`)
}
function api_v1_company_retrieve(payload) {
  return qaassessmentnewAPI.get(`/api/v1/company/${payload.id}/`)
}
function api_v1_company_update(payload) {
  return qaassessmentnewAPI.put(`/api/v1/company/${payload.id}/`, payload.data)
}
function api_v1_company_partial_update(payload) {
  return qaassessmentnewAPI.patch(
    `/api/v1/company/${payload.id}/`,
    payload.data
  )
}
function api_v1_company_destroy(payload) {
  return qaassessmentnewAPI.delete(`/api/v1/company/${payload.id}/`)
}
function api_v1_metaltype_retrieve(payload) {
  return qaassessmentnewAPI.get(`/api/v1/metaltype/${payload.id}/`)
}
function api_v1_metaltype_update(payload) {
  return qaassessmentnewAPI.put(
    `/api/v1/metaltype/${payload.id}/`,
    payload.data
  )
}
function api_v1_metaltype_partial_update(payload) {
  return qaassessmentnewAPI.patch(
    `/api/v1/metaltype/${payload.id}/`,
    payload.data
  )
}
function api_v1_metaltype_destroy(payload) {
  return qaassessmentnewAPI.delete(`/api/v1/metaltype/${payload.id}/`)
}
function api_v1_offerlist_retrieve(payload) {
  return qaassessmentnewAPI.get(`/api/v1/offerlist/${payload.id}/`)
}
function api_v1_offerlist_update(payload) {
  return qaassessmentnewAPI.put(
    `/api/v1/offerlist/${payload.id}/`,
    payload.data
  )
}
function api_v1_offerlist_partial_update(payload) {
  return qaassessmentnewAPI.patch(
    `/api/v1/offerlist/${payload.id}/`,
    payload.data
  )
}
function api_v1_offerlist_destroy(payload) {
  return qaassessmentnewAPI.delete(`/api/v1/offerlist/${payload.id}/`)
}
function api_v1_createsuperuser_create(payload) {
  return qaassessmentnewAPI.post(`/api/v1/createsuperuser/`, payload.data)
}
function modules_privacy_policy_list(payload) {
  return qaassessmentnewAPI.get(`/modules/privacy-policy/`)
}
function modules_privacy_policy_create(payload) {
  return qaassessmentnewAPI.post(`/modules/privacy-policy/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return qaassessmentnewAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return qaassessmentnewAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function api_v1_offerlist_my_offer_retrieve(payload) {
  return qaassessmentnewAPI.get(`/api/v1/offerlist/my_offer/`)
}
function api_v1_offerlist_my_offer_partial_update(payload) {
  return qaassessmentnewAPI.patch(`/api/v1/offerlist/my_offer/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return qaassessmentnewAPI.post(`/rest-auth/password/change/`, payload.data)
}
function modules_privacy_policy_retrieve(payload) {
  return qaassessmentnewAPI.get(`/modules/privacy-policy/${payload.id}/`)
}
function modules_privacy_policy_update(payload) {
  return qaassessmentnewAPI.put(
    `/modules/privacy-policy/${payload.id}/`,
    payload.data
  )
}
function modules_privacy_policy_partial_update(payload) {
  return qaassessmentnewAPI.patch(
    `/modules/privacy-policy/${payload.id}/`,
    payload.data
  )
}
function modules_privacy_policy_destroy(payload) {
  return qaassessmentnewAPI.delete(`/modules/privacy-policy/${payload.id}/`)
}
function modules_profile_user_profile_list(payload) {
  return qaassessmentnewAPI.get(`/modules/profile/user-profile/`)
}
function modules_profile_user_profile_create(payload) {
  return qaassessmentnewAPI.post(`/modules/profile/user-profile/`, payload.data)
}
function modules_terms_and_conditions_list(payload) {
  return qaassessmentnewAPI.get(`/modules/terms-and-conditions/`)
}
function modules_terms_and_conditions_create(payload) {
  return qaassessmentnewAPI.post(`/modules/terms-and-conditions/`, payload.data)
}
function modules_contact_us_contact_us_create(payload) {
  return qaassessmentnewAPI.post(`/modules/contact-us/contact_us/`)
}
function rest_auth_password_reset_confirm_create(payload) {
  return qaassessmentnewAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function modules_profile_user_profile_retrieve(payload) {
  return qaassessmentnewAPI.get(`/modules/profile/user-profile/${payload.id}/`)
}
function modules_profile_user_profile_partial_update(payload) {
  return qaassessmentnewAPI.patch(
    `/modules/profile/user-profile/${payload.id}/`,
    payload.data
  )
}
function modules_profile_user_profile_destroy(payload) {
  return qaassessmentnewAPI.delete(
    `/modules/profile/user-profile/${payload.id}/`
  )
}
function modules_terms_and_conditions_retrieve(payload) {
  return qaassessmentnewAPI.get(`/modules/terms-and-conditions/${payload.id}/`)
}
function modules_terms_and_conditions_update(payload) {
  return qaassessmentnewAPI.put(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload.data
  )
}
function modules_terms_and_conditions_partial_update(payload) {
  return qaassessmentnewAPI.patch(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload.data
  )
}
function modules_terms_and_conditions_destroy(payload) {
  return qaassessmentnewAPI.delete(
    `/modules/terms-and-conditions/${payload.id}/`
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return qaassessmentnewAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_coin_list,
  api_v1_coin_create,
  api_v1_login_create,
  api_v1_offer_list,
  api_v1_offer_create,
  api_v1_signup_create,
  api_v1_company_list,
  api_v1_company_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  api_v1_coin_retrieve,
  api_v1_coin_update,
  api_v1_coin_partial_update,
  api_v1_coin_destroy,
  api_v1_metaltype_list,
  api_v1_metaltype_create,
  api_v1_offerlist_list,
  api_v1_offerlist_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_offer_retrieve,
  api_v1_offer_update,
  api_v1_offer_partial_update,
  api_v1_offer_destroy,
  api_v1_company_retrieve,
  api_v1_company_update,
  api_v1_company_partial_update,
  api_v1_company_destroy,
  api_v1_metaltype_retrieve,
  api_v1_metaltype_update,
  api_v1_metaltype_partial_update,
  api_v1_metaltype_destroy,
  api_v1_offerlist_retrieve,
  api_v1_offerlist_update,
  api_v1_offerlist_partial_update,
  api_v1_offerlist_destroy,
  api_v1_createsuperuser_create,
  modules_privacy_policy_list,
  modules_privacy_policy_create,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  api_v1_offerlist_my_offer_retrieve,
  api_v1_offerlist_my_offer_partial_update,
  rest_auth_password_change_create,
  modules_privacy_policy_retrieve,
  modules_privacy_policy_update,
  modules_privacy_policy_partial_update,
  modules_privacy_policy_destroy,
  modules_profile_user_profile_list,
  modules_profile_user_profile_create,
  modules_terms_and_conditions_list,
  modules_terms_and_conditions_create,
  modules_contact_us_contact_us_create,
  rest_auth_password_reset_confirm_create,
  modules_profile_user_profile_retrieve,
  modules_profile_user_profile_partial_update,
  modules_profile_user_profile_destroy,
  modules_terms_and_conditions_retrieve,
  modules_terms_and_conditions_update,
  modules_terms_and_conditions_partial_update,
  modules_terms_and_conditions_destroy,
  rest_auth_registration_verify_email_create
}
