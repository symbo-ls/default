export const addCaseModal = {
  extends: 'ModalWindow',
  width: '100%',
  maxWidth: 'I3',
  maxHeight: '90dvh',
  onInit: (el, s) => {
    const key = el.call('getLastLocationPath').slice(1)
    const value = el.getDesignSystem('CASES')?.[key]
    if (!value || !key) {
      return
    }
    s.update({
      value,
      key
    }, {
      overwrite: true,
      preventUpdate: true
    })
  },
  onSubmit: async (e, el, s, ctx) => {
    e.preventDefault()

    const key = s.key || {}
    const {
      value
    } = s

    const t = setTimeout(async () => {
      await el.updateDesignSystem(`CASES.${key}`, value)
      clearTimeout(t)
    }, 75)
    await el.call('closeModal')
  },
  tag: 'form',
  state: {
    key: '',
    value: () => {
      // Do nothing
    },
  },
  ModalHeader: {
    title: 'Add a case',
    p: 'Add case and use it across component properties',
  },
  Flex: {
    padding: 'A C3 0',
    minHeight: 'G2',
    flow: 'column',
    gap: 'B3',
    width: '100%',
    'InputField.key': {
      maxWidth: '50%',
      Title: {
        text: 'Key',
      },
      Input: {
        value: '{{ key }}',
        required: true,
        placeholder: 'isSafari',
        onkeydown: ev => {
          // prevent space
          if (ev.keyCode === 32) {
            ev.preventDefault()
          }
        },
        onKeyup: (e, el, s) => {
          const val = el.node.value
          s.update({
            key: val
          })
        },
      },
    },
    'Group.code': {
      minWidth: '100%',
      Title: {
        text: 'Case value',
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
            debounceDuration: 0,
            fileTab: {
              code: el.call('isString', s.value) ?
                s.value : el.stringifyCode(s.value) || 'export default {}',
              type: 'javascript',
              filename: 'case.js',
              fileTabKey: 'function'
            },
            onCodeEditCallback: editor => {
              const value = el.call('evalStringCodeUnsafe', editor.getValue())
              s.value = value
            }
          }
        }),
      },
    },
  },
  ModalFooter: {
    CheckButton: {
      type: 'submit',
      reverse: true,
      icon: 'checkmark',
      text: 'Save',
    },
  },
};