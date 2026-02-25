export const findModal = function findModal (path) {
  const el = this
  const pathname = path || window.parent.location.pathname
  if (!pathname) return {}

  const pathArray = pathname.slice(1).split('/')
  const Modal = el.getModal()

  const lastRoute = pathArray.pop()
  const beforeLastRoute = pathArray.pop()
  const isLastModal = Modal?.routes[`/${lastRoute}`]
  const isLastBeforeModal = Modal?.routes[`/${beforeLastRoute}`]

  return {
    index: (isLastModal && 1) || (isLastBeforeModal && 2) || 0,
    FoundModal: isLastModal || isLastBeforeModal,
    lastRoute,
    beforeLastRoute
  }
}
