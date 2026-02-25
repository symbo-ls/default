export const editColorModal = {
  extends: '/add-color-modal',
  onInit: (el, s) => {
    const path = window.location.pathname
    const pathArray = path.split('edit-color/')
    const COLOR = el.getDesignSystem('COLOR')
    if (!COLOR) return
    const key = pathArray[1]
    const value = COLOR[key] || el.getRootState().DEFAULT_DESIGN_SYSTEM.COLOR[key]
    if (!key || !value) return
    s.update({
      key,
      value: value || key
    }, {
      preventUpdate: true,
      preventContentUpdate: true
    })
  },
  ModalHeader: {
    title: 'Edit "{{ key }}" color'
  },
  Flex: {},
  ModalFooter: {
    props: {
      gap: 'A'
    },
    CheckButton: {
      icon: 'checkmark',
      text: 'Save'
    },
    'IconButton.copy': {
      extends: [
        'Link',
        'IconButton'
      ],
      margin: '- - - auto',
      icon: 'copy outline',
      href: (el, s) => '/color/add-color/' + s.value
    },
    'IconButton.trash': {
      if: (el, s) => el.getDesignSystem('COLOR')[s.key],
      icon: 'trash outline',
      onClick: (ev, el, s) => {
        const {
          key
        } = s
        const text = 'Do you want to remove the color?'
        if (key && window.confirm(text)) {
          const COLOR = el.getDesignSystem('COLOR')
          delete COLOR[key]
          el.getRootState().update({
            designSystem: {
              COLOR
            }
          })
          el.call('closeModal', el, s)
        }
      }
    }
  }
}
