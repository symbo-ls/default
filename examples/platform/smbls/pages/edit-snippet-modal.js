export const editSnippetModal = {
  extends: '/add-snippet-modal',
  onInit: (el, s, ctx) => {
    const key = el.call('getLastLocationPath').slice(1)
    const item = el.getItem(key)
    return item && s.quietReplace(item)
  },
  onSubmit: (e, el, s, ctx) => {
    e.preventDefault()
    el.updateItem(s.parse())
    ctx.utils.closeModal(el, s, ctx)
  },
  ModalHeader: {
    title: 'Edit {{ key }} snippet'
  },
  Flex: {},
  ModalFooter: {
    CheckButton: {
      type: 'submit',
      icon: 'checkmark',
      text: 'Save'
    },
    IconButton: {
      icon: 'trash outline',
      onClick: (ev, el, s, ctx) => {
        const text = 'Do you want to remove the snippet?'
        if (key && window.confirm(text)) {
          el.removeItem(s.parse())
          el.call('closeModal', el, s, ctx)
        }
      }
    }
  }
}
