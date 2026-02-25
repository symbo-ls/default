export const editSecretModal = {
  extends: '/add-secret-modal',
  ModalHeader: {
    title: 'Edit a secret',
    p: 'Edit secret hide keys while reusing in your functions'
  },
  Flex: {
    'InputField.key': {
      Input: {
        opacity: '.35',
        disabled: true,
        value: 'hidden'
      }
    }
  },
  ModalFooter: {
    CheckButton: {},
    IconButton: {
      icon: 'trash outline',
      onClick: async (ev, el, s, ctx) => {
        el.call('removeItem', 'secret', s.key)
        el.call('closeModal')
      }
    }
  }
}
