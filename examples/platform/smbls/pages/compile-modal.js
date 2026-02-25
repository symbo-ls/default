export const compileModal = {
  width: '100%',
  height: '100%',
  padding: 'X X X',
  align: 'stretch',
  gap: 'A',
  theme: 'modal',
  IconButton: {
    icon: 'crossmark',
    padding: 'Y2',
    position: 'absolute',
    top: 'X',
    right: 'X',
    color: 'dim',
    onClick: (ev, el, s, ctx) => el.call('closeModal')
  },
  Compile: {
    extends: '/compile',
    Flex_header: {
      padding: '0 C1 X A'
    }
  }
}
