export const addCanvasModal = {
  extends: 'ModalWindow',
  width: '100%',
  maxWidth: 'I',
  onSubmit: async (e, el, s) => {
    e.preventDefault()
    await el.call('addCanvasPage', s)
    await el.call('closeModal')
  },
  tag: 'form',
  state: {
    title: '',
    freeform: true
  },
  ModalHeader: {
    title: 'Add new canvas',
    p: 'Add custom canvas pages to manage your components in isolation'
  },
  Flex: {
    overflow: 'auto',
    padding: 'A C1 C1',
    minWidth: '100%',
    flow: 'column',
    flexAlign: 'flex-start space-between',
    gap: 'B3',
    childProps: {
      width: '50%'
    },
    InputField: {
      Title: {
        text: 'Title'
      },
      Input: {
        value: '{{ title }}',
        required: true,
        placeholder: 'My notes',
        onKeyup: (e, el, s) =>
          s.update({
            title: el.node.value
          })
      }
    },
    Group: {
      margin: 'A - -',
      Title: {
        text: 'Freeform'
      },
      SwitchFieldWithCaption: {
        width: 'max-content',
        align: 'start start',
        onChange: (ev, el, s) => {
          s.toggle('freeform')
        },
        Input: {
          checked: ({
            state
          }) => !state.freeform
        },
        SwitchField: {},
        Caption: {
          padding: '0',
          opacity: '.65',
          color: 'gray7',
          text: 'Gravity'
        }
      }
    }
  },
  ModalFooter: {
    CheckButton: {
      type: 'submit',
      reverse: true,
      text: 'Save'
    }
  }
}
