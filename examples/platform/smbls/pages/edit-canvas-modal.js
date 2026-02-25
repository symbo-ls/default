export const editCanvasModal = {
  extends: '/add-canvas-modal',
  onInit: async (el, s) => {
    const key = s.key || el.call('getLastLocationPath').slice(1)

    const canvasPageData = el.call('getCanvasPage', key)
    if (!canvasPageData) {
      return
    }

    await s.quietReplace(canvasPageData)
  },
  onSubmit: async (e, el, s, ctx) => {
    e.preventDefault()
    await el.call('addCanvasPage', s, {
      preventNameCheck: true
    })
    await el.call('closeModal')
  },
  ModalHeader: {
    title: 'Edit {{ title }} canvas',
    p: 'Edit custom canvas page'
  },
  Flex: {
    InputField: {
      pointerEvents: 'none',
      Input: {
        opacity: '.65',
        disabled: 'disabled'
      }
    }
  },
  ModalFooter: {
    CheckButton: {},
    IconButton: {
      icon: 'trash outline',
      onClick: async (ev, el, s) => {
        await el.call('deleteCanvasPage', s.key)
      }
    }
  }
}
