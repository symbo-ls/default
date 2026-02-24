export const shareModal = {
  extends: 'ModalWindow',
  onSubmit: (e, el, s, ctx) => {
    e.preventDefault()
  },
  tag: 'form',
  ModalHeader: {
    title: 'Share',
    p: 'Share?',
  },
  Flex: {},
  ModalFooter: {
    CheckButton: {
      theme: 'primary',
      type: 'submit',
      text: 'Share',
    },
  },
};