export const getPluginSessionFromUrl = function getPluginSessionFromUrl () {
  if (typeof window === 'undefined') {
    return null
  }

  let session = null

  try {
    session = new URL(window.location.href).searchParams.get('session')
  } catch {
    // Ignore URL parsing errors
  }

  return session
}
