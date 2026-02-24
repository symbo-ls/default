export const addMethodModal = {
  extends: 'ModalWindow',
  width: '100%',
  maxWidth: 'I3',
  maxHeight: '90dvh',
  onSubmit: (e, el, s, ctx) => {
    e.preventDefault()

    const key = s.key
    if (el.getData('methods')[key]) {
      return window.alert(`${key} method already exists`)
    }

    el.call('closeModal', el, s, ctx)

    setTimeout(() => {
      const item = el.setItem(s.parse())
      el.addItemOnCanvasPage(item)
    }, 75)
  },
  tag: 'form',
  state: {
    key: '',
    title: '',
    type: 'method',
    value: () => {},
  },
  ModalHeader: {
    title: 'Add a new method',
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
          text: 'Method title',
        },
        Input: {
          value: '{{ title }}',
          required: true,
          placeholder: 'Fetching example data',
          onKeyup: (e, el, s, ctx) => {
            const val = el.node.value
            const obj = {
              title: val
            }
            const canApplyKey = !s.touched && window.location.pathname.includes('/add-method')
            if (canApplyKey) obj.key = el.call('toCamelCase', val.toLowerCase()).replace(/[^a-zA-Z]/g, '')
            s.update(obj)
          },
        },
      },
      'InputField.key': {
        Title: {
          text: 'Key',
        },
        Input: {
          value: '{{ key }}',
          required: true,
          placeholder: 'fetchExample',
          onKeydown: (e, el, s, ctx) => {
            const val = el.node.value
            const NOT_ALLOWED = ['&', '*', '-', ':', '@', '.', '/', '!', ' ']
            const preventChars = el.call('stringIncludesAny', val, NOT_ALLOWED)
            if (preventChars) e.preventDefault()
          },
          onKeyup: (e, el, s) => {
            const val = el.node.value
            s.update({
              touched: true,
              key: val.replace(/[^a-zA-Z]/g, '')
            })
          },
        },
      },
    },
    'Group.code': {
      minWidth: '100%',
      Title: {
        text: 'Method code',
      },
      CodePreviewWidget: {
        props: (el, s, ctx) => ({
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
              filename: 'method.js',
              fileTabKey: 'method'
            },
            onCodeEditCallback: editor => {
              s.quietReplace({
                value: el.call('evalStringCodeUnsafe', editor.getValue())
              })
            }
          }
        }),
      },
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
      onClick: (ev, el, s) => s.update({
        advanced: !s.advanced
      }),
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
          text: 'Description',
        },
        TextareaField: {
          width: '100%',
          Textarea: {
            value: (el, s) => s[el.key.split('.')[1]],
            height: 'auto',
            minWidth: '100%',
            placeholder: 'Method Description',
            onKeyup: (e, el, s) => {
              s.update({
                description: el.node.value
              })
            },
          },
        },
      },
    },
  },
  ModalFooter: {
    CheckButton: {
      type: 'submit',
      reverse: true,
      icon: 'arrow right',
      text: 'Next',
    },
  },
};