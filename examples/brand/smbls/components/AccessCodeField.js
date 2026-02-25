export const AccessCodeField = {
  extends: 'GroupField',
  Title: {
    text: 'Invitation code'
  },
  Grid: {
    position: 'relative',
    columns: 'repeat(6, 1fr)',
    width: '100%',
    height: 'C',
    gap: 'X2',
    state: {
      value: [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    },
    childExtends: 'Input',
    childProps: {
      boxSize: 'C',
      required: true,
      round: 'Y2',
      minlength: 1,
      maxlength: 1,
      fontFamily: 'Code',
      value: (el, s) => s.value[el.key] || '',
      onKeyup: (event, element, state) => {
        const {
          target,
          keyCode
        } = event
        const {
          value
        } = target
        const next = element.nextElement()
        const previous = element.previousElement()

        const isNumber = (keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)
        const isBackspace = event.keyCode === 8 || event.keyCode === 46

        target.select()

        if (isNumber && value.length && next) next.node.focus()
        if ((!value.length || isBackspace) && previous) previous.node.focus()

        state.value[element.key] = value
        element.lookup('Input').setProps({
          value: Object.values(state.value).join('')
        })
      },
      onPaste: (event, element, state) => {
        event.preventDefault()
        const paste = (event.clipboardData || window.clipboardData).getData('text')
        if (!paste) return
        const value = paste.split('')
        state.value = value
        state.update()
      }
    },
    children: [
      {},
      {},
      {},
      {},
      {},
      {}
    ],
    Input: {
      ignoreChildExtend: true,
      type: 'hidden',
      required: true,
      placeholder: '••••••',
      pattern: '[0-9]*',
      minlength: 6,
      maxlength: 6,
      round: 'Y2',
      position: 'absolute',
      inset: '0'
    }
  }
}
