export const addFunctionModal = {
  extends: 'ModalWindow',
  width: '100%',
  maxWidth: 'I3',
  maxHeight: '90dvh',
  onSubmit: async (e, el, s, ctx) => {
    e.preventDefault()

    const exists = el.getFunctions(s.key)

    if (s.value) {
      try {
        const res = exists
          ? await el.call('updateItem', s.type, s.key, s)
          : await el.call('createItem', s.type, s.key)

        if (res?.success) {
          await el.call('closeModal')
        } else {
          el.call('openNotification', {
            title: 'Error message',
            message: `Could not create function ${s.key}`,
            type: 'error'
          })
        }
      } catch (err) {
        console.log('in addFunctionModal catch', err.message)
        el.call('openNotification', {
          title: 'Error message',
          message: err.message,
          type: 'error'
        })
      }
    } else {
      el.call('openNotification', {
        title: 'Error message',
        message: 'There might be an error with the function code. Please check the code and try again.',
        type: 'error'
      })
    }
  },
  tag: 'form',
  state: {
    key: '',
    title: '',
    type: 'functions',
    value: () => {
      // Do nothing
    }
  },
  ModalHeader: {
    title: 'Add a new function'
  },
  Flex: {
    overflow: 'auto',
    padding: 'A C3 0',
    minHeight: 'G3',
    minWidth: '100%',
    flow: 'column',
    flexAlign: 'flex-start space-between',
    gap: 'C1',
    'Flex.info': {
      flow: 'column',
      gap: 'B3',
      width: '50%',
      'InputField.title': {
        Title: {
          text: 'Function title'
        },
        Input: {
          value: '{{ title }}',
          required: true,
          placeholder: 'e.g. Fetching example data',
          onKeyup: (e, el, s) => {
            const val = el.node.value
            const obj = {
              title: val
            }
            const canApplyKey = !s.touched && window.location.pathname.includes('/add-function')
            if (canApplyKey) {
              obj.key = el
                .call('toCamelCase', val.toLowerCase())
                .replace(/[^a-zA-Z]/gu, '')
            }
            s.update(obj)
          }
        }
      },
      'InputField.key': {
        Title: {
          text: 'Key'
        },
        Input: {
          value: '{{ key }}',
          required: true,
          placeholder: 'fetchExample',
          onKeydown: (e, el) => {
            const val = el.node.value
            const NOT_ALLOWED = ['&', '*', '-', ':', '@', '.', '/', '!', ' ']
            const preventChars = el.call('stringIncludesAny', val, NOT_ALLOWED)
            if (preventChars) {
              e.preventDefault()
            }
          },
          onKeyup: (e, el, s) => {
            const val = el.node.value
            s.update({
              touched: true,
              key: val.replace(/[^a-zA-Z]/gu, '')
            })
          }
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
              s.quietReplace({
                value: el.call('evalStringCodeUnsafe', editor.getValue())
              })
            }
          }
        })
      }
    },
    'Button.showAdvanced': {
      margin: '- -Z2',
      gap: 'X',
      background: 'transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      theme: 'common-card-outline-interactive',
      icon: (el, s) => `arrow angle ${s.advanced ? 'up' : 'down'}`,
      text: (el, s) => `${s.advanced ? 'Hide' : 'Show'} advanced settings`,
      onClick: (ev, el, s) =>
        s.update({
          advanced: !s.advanced
        })
    },
    'Flex.advanced': {
      hide: ({
        state
      }) => !state.advanced,
      flow: 'column',
      align: 'flex-start space-between',
      gap: 'C1',
      width: '100%',
      'Group.description': {
        width: '100%',
        Title: {
          text: 'Description'
        },
        TextareaField: {
          width: '100%',
          Textarea: {
            value: (el, s) => s[el.key.split('.')[1]],
            height: 'auto',
            minWidth: '100%',
            placeholder: 'Function Description',
            onKeyup: (e, el, s) => {
              s.update({
                description: el.node.value
              })
            }
          }
        }
      }
    }
  },
  ModalFooter: {
    CheckButton: {
      type: 'submit',
      reverse: true,
      icon: 'arrow right',
      text: 'Next'
    }
  }
}
