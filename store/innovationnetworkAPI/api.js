import axios from "axios"
const innovationnetworkAPI = axios.create({
  baseURL: "https://cyberone-38287.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return innovationnetworkAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return innovationnetworkAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return innovationnetworkAPI.post(`/api/v1/signup/`, payload.data)
}
function modules_contact_us_contact_us_create(payload) {
  return innovationnetworkAPI.post(`/modules/contact-us/contact_us/`)
}
function modules_files_uploads_list(payload) {
  return innovationnetworkAPI.get(`/modules/files/uploads/`)
}
function modules_files_uploads_create(payload) {
  return innovationnetworkAPI.post(`/modules/files/uploads/`, payload.data)
}
function modules_files_uploads_retrieve(payload) {
  return innovationnetworkAPI.get(`/modules/files/uploads/${payload.id}/`)
}
function modules_files_uploads_update(payload) {
  return innovationnetworkAPI.put(
    `/modules/files/uploads/${payload.id}/`,
    payload.data
  )
}
function modules_files_uploads_partial_update(payload) {
  return innovationnetworkAPI.patch(
    `/modules/files/uploads/${payload.id}/`,
    payload.data
  )
}
function modules_files_uploads_destroy(payload) {
  return innovationnetworkAPI.delete(`/modules/files/uploads/${payload.id}/`)
}
function modules_payments_get_payments_history_retrieve(payload) {
  return innovationnetworkAPI.get(`/modules/payments/get_payments_history/`)
}
function modules_payments_get_payments_methods_retrieve(payload) {
  return innovationnetworkAPI.get(`/modules/payments/get_payments_methods/`)
}
function modules_payments_payment_sheet_create(payload) {
  return innovationnetworkAPI.post(`/modules/payments/payment_sheet/`)
}
function modules_signature_signature_list(payload) {
  return innovationnetworkAPI.get(`/modules/signature/signature/`)
}
function modules_signature_signature_retrieve(payload) {
  return innovationnetworkAPI.get(`/modules/signature/signature/${payload.id}/`)
}
function modules_signature_upload_signature_create(payload) {
  return innovationnetworkAPI.post(`/modules/signature/upload_signature/`)
}
function rest_auth_login_create(payload) {
  return innovationnetworkAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return innovationnetworkAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return innovationnetworkAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return innovationnetworkAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return innovationnetworkAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return innovationnetworkAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_create(payload) {
  return innovationnetworkAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return innovationnetworkAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_retrieve(payload) {
  return innovationnetworkAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return innovationnetworkAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return innovationnetworkAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_contact_us_contact_us_create,
  modules_files_uploads_list,
  modules_files_uploads_create,
  modules_files_uploads_retrieve,
  modules_files_uploads_update,
  modules_files_uploads_partial_update,
  modules_files_uploads_destroy,
  modules_payments_get_payments_history_retrieve,
  modules_payments_get_payments_methods_retrieve,
  modules_payments_payment_sheet_create,
  modules_signature_signature_list,
  modules_signature_signature_retrieve,
  modules_signature_upload_signature_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
