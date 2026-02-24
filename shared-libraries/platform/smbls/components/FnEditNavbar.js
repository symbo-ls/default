export const FnEditNavbar = {
  extends: [
    'MicroNavbar',
    'Navbar',
  ],
  width: '100%',
  padding: 'W1 X X1',
  IconText: {
    icon: 'fn outline',
    gap: 'X',
    padding: 'X Z1',
    text: '{{ key }}',
    Icon: {
      color: 'dim',
    },
  },
  EditorPositionNavbar: {
    margin: '- - - auto',
  },
  NavbarButtonSet: {
    NavbarButton_docs: {
      tag: 'button',
      isActive: false,
      theme: 'transparent',
      icon: 'question mark',
      color: 'dim',
      onClick: (ev, el) => {
        el.setWindow('docs', '/functions')
      },
    },
    NavbarButton_close: {
      icon: 'crossmark',
      isActive: false,
      onClick: (ev, el) => {
        el.activateFunction(null)
      },
    },
  },
};