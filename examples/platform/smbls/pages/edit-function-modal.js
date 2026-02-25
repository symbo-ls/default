export const editFunctionModal = {
  extends: '/add-function-modal',
  onInit: (el, s) => {
    const key = s.key || el.call('getLastLocationPath').slice(1)
    const item = el.getItem(key, s.type)
    return item && s.quietReplace(item)
  },
  onSubmit: async (e, el, s) => {
    e.preventDefault()
    el.call('updateItem', s.type, s.key, s)
    await el.call('closeModal')
  },
  ModalHeader: {
    title: 'Edit {{ key }} function'
  },
  Flex: {
    'Flex.info': {
      'InputField.title': {},
      'InputField.key': {
        pointerEvents: 'none',
        Input: {
          opacity: '.65',
          disabled: 'disabled'
        }
      }
    },
    'Group.code': {
      minWidth: '100%',
      Title: {
        text: 'Function code'
      },
      CodePreviewWidget: {
        props: (el, s) => ({
          minWidth: '100%',
          widthRange: null,
          theme: 'field-static',
          round: 'X2',
          padding: 'X2 X2 X2 -',
          minHeight: 'G1',
          Monaco: {
            foldLevel: false,
            opacity: 1,
            fileTab: {
              code: el.call('stringifyCode', s.value),
              type: 'javascript',
              filename: 'function.js',
              fileTabKey: 'function'
            },
            onCodeEditCallback: editor => {
              const code = editor.getValue()
              const value = el.call('evalStringCodeUnsafe', code, {
                onError: err => {
                  s.update({
                    err
                  })
                }
              })

              if (!value) {
                return
              }

              s.quietReplace({
                code: el.call('encodeNewlines', code),
                value
              }, {
                hoistUpdate: true
              })
            }
          }
        })
      }
    }
  },
  ModalFooter: {
    CheckButton: {
      type: 'submit',
      icon: 'checkmark',
      text: 'Save'
    },
    IconButton: {
      icon: 'trash outline',
      onClick: async (ev, el, s) => {
        el.call('removeItem', 'function', s.key)
        el.call('closeModal')
      }
    }
  }
}
