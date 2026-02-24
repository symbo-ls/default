export const ModalWindowCopy = {
  tag: 'section',
  state: {},
  theme: 'modal',
  padding: 'A B',
  round: 'A',
  gap: 'C',
  flow: 'y',
  overflow: 'auto',
  width: 'fit-content',
  height: 'fit-content',
  animationDuration: 'C',
  position: 'relative',
  IconButton: {
    icon: 'crossmark',
    padding: 'Y2',
    position: 'absolute',
    top: 'Z2',
    right: 'Z2',
    color: 'dim',
    onClick: (ev, el, s, ctx) => ctx.utils.closeModal(el, s, ctx),
  },
  ModalHeader: {
    onDrag: (event, element, state) => {
      state.dragging = true
    },
  },
};