export const EditNavbar = {
  extends: 'Navbar',
  position: 'sticky',
  top: '0',
  width: '100%',
  padding: 'W X W Z2',
  fontSize: '1rem',
  NavbarButtonSet_title: {
    padding: '0',
    Text: {
      ignoreChildExtend: true,
      text: '{{ key }}',
    },
    CopyButton: {
      title: 'Copy title',
      value: (el, s) => s.key,
    },
  },
  EditorTools: {
    hide: true,
    margin: '- auto - C3',
    color: 'dim',
    fontSize: 'Z1',
  },
  EditorPositionNavbar: {
    margin: '- - - auto',
  },
  NavbarButtonSet_meta: {
    Que: {
      title: 'Documentation',
      icon: 'questionMark',
      isActive: false,
      onClick: (ev, el) => {
        el.setWindow('docs', '/properties')
      },
    },
    Close: {
      title: 'Close',
      icon: 'crossmark',
      isActive: false,
      margin: '- - - X',
      onClick: (ev, el) => {
        el.closeWindow('componentEditor')
      },
    },
  },
};