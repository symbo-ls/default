export const resetModal = {
  extends: 'ModalWindow',
  onSubmit: async (e, el, s, ctx) => {
    e.preventDefault()
    await el.call('closeModal')
  },
  tag: 'form',
  state: null,
  ModalHeader: {
    title: 'Reset',
    p: 'Do you want to revert to the latest release?',
  },
  cnt: {
    props: {
      padding: '- B1 - -',
    },
    P: {
      props: {
        color: 'paragraph',
      },
      text: el => 'Reverting to v1.' + el.getRootState().version,
    },
  },
  ModalFooter: {
    CheckButton: {
      theme: 'primary',
      type: 'submit',
      text: 'Reset',
    },
  },
};