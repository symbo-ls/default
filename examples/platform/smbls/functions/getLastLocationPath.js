export const getLastLocationPath = function getLastLocationPath (
  level = 0,
  route = window.location.pathname
) {
  const routeArray = route.split('/')
  const activeRoute = routeArray[routeArray.length - level - 1]
  if (activeRoute) {
    return `/${activeRoute}`
  }
}
