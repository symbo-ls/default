export const StateEditNavbar = {
  extends: 'FnEditNavbar',
  IconText: {
    icon: 'state outline',
    text: '{{ key }}'
  },
  NavbarButtonSet: {
    NavbarButton_docs: {
      onClick: (ev, el) => {
        el.setWindow('docs', '/state')
      }
    },
    NavbarButton_close: {
      onClick: (ev, el) => {
        el.activateState(null)
      }
    }
  }
}
