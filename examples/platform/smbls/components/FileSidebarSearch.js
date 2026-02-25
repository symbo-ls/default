export const FileSidebarSearch = {
  extend: 'CanvasSearch',
  props: {
    position: 'relative',
    zIndex: 'none',
    theme: 'field',
    round: 'C1'
  },
  Form: {
    Icon: {
      top: 'Z1',
      name: 'search outline',
      position: 'absolute',
      left: 'Z2'
    },
    Input: {
      theme: 'field',
      round: 'C1',
      padding: 'Z B2 Z B2+X2',
      placeholder: 'Filter'
    }
  },
  NavbarButton: {
    tag: 'button',
    opacity: '0',
    position: 'absolute',
    top: 'X',
    right: 'X',
    theme: 'transparent',
    color: 'dim',
    icon: 'crossmark',
    fontSize: 'Z2',
    onClick: (ev, el) => {
      const {
        node
      } = el.parent.Form.Input
      if (node.value) {
        el.lookup('FilesSidebar').state.update({
          search: ''
        })
        node.value = ''
        setTimeout(() => {
          node.focus()
        }, 100)
      }
    }
  }
}
