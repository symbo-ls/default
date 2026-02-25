export const updateApplicationState = function updateApplicationState ({
  authToken,
  userData,
  projectData
}) {
  const state = this.getRootState()
  this.call('overwrite', state, {
    authToken
  })
  this.call('overwrite', state, userData)
  return this.call('overwrite', state, this.call('deepDestringifyFunctions', projectData))
}
