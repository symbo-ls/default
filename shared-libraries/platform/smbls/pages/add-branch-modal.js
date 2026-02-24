export const addBranchModal = {
  extends: 'ModalWindow',
  width: '100%',
  maxWidth: 'I',
  onSubmit: async (e, el, s, ctx) => {
    e.preventDefault()
    if (!s.branch) {
      return
    }
    const res = await el.sdk.createBranch(s.branch)
    if (res.version) {
      await el.call('setActiveBranch', s.branch)
      await el.call('closeModal')
    } else {
      el.call('openNotification', {
        title: 'Error message',
        message: `Could not create a branch ${s.branch}`,
        type: 'error'
      })
    }
  },
  tag: 'form',
  state: {
    branch: '',
  },
  ModalHeader: {
    title: 'Add new branch',
    p: 'Add custom canvas pages to manage your components in isolation',
  },
  Flex: {
    overflow: 'auto',
    padding: 'A C1 C1',
    minWidth: '100%',
    flow: 'column',
    flexAlign: 'flex-start space-between',
    gap: 'B3',
    childProps: {
      width: '50%',
    },
    InputField: {
      Title: {
        text: 'Branch name',
      },
      Input: {
        value: '{{ branch }}',
        required: true,
        placeholder: 'My notes',
        onInput: (ev, el, s) => {
          const {
            node
          } = el
          const {
            value
          } = node
          const start = node.selectionStart
          const end = node.selectionEnd

          const allowedCharacters = /[^a-zA-Z0-9_\-/]/gu
          const cleanedValue = value.replace(allowedCharacters, '')

          if (value !== cleanedValue) {
            el.node.value = cleanedValue
            node.setSelectionRange(start, end)
          }

          s.branch = cleanedValue
        },
      },
    },
  },
  ModalFooter: {
    CheckButton: {
      type: 'submit',
      reverse: true,
      text: 'Save',
    },
  },
};