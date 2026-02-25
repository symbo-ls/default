export const addSecretModal = {
  extends: 'ModalWindow',
  width: '100%',
  maxWidth: 'I3',
  maxHeight: '90dvh',
  onInit: (el, s) => {
    const name = el.call('getLastLocationPath')?.slice(1)
    const key = el.getSecrets(name)
    if (!name || !key) {
      return
    }
    s.quietUpdate({
      name,
      key
    })
  },
  onSubmit: async (e, el, s, ctx) => {
    e.preventDefault()

    const exists = el.getFunctions(s.key)
    const action = exists ? 'updateItem' : 'addItem'
    const res = await el.sdk[action]('functions', s)

    if (res?.version) {
      await el.call('closeModal')
    } else {
      el.call('openNotification', {
        title: 'Error message',
        message: `Could not create a function ${s.key}`,
        type: 'error'
      })
    }
  },
  tag: 'form',
  state: {
    name: ''
  },
  ModalHeader: {
    title: 'Add a secret',
    p: 'Add secret hide keys while reusing in your functions'
  },
  Flex: {
    padding: 'A C3 0',
    minHeight: 'G2',
    flow: 'column',
    gap: 'B3',
    width: '50%',
    'InputField.name': {
      Title: {
        text: 'Key'
      },
      Input: {
        required: true,
        value: '{{ name }}',
        placeholder: 'secretKey',
        onKeyup: (e, el, s) => {
          const val = el.node.value
          s.update({
            name: val
          })
        }
      }
    },
    'InputField.key': {
      Title: {
        text: 'Value'
      },
      Input: {
        required: true,
        value: '{{ key }}',
        placeholder: 'Secret value (xxx)',
        onKeyup: (e, el, s) => {
          const val = el.node.value
          s.update({
            key: val
          })
        }
      }
    }
  },
  ModalFooter: {
    CheckButton: {
      type: 'submit',
      reverse: true,
      icon: 'checkmark',
      text: 'Save'
    }
  }
}
