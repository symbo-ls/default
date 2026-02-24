export const EditNavbarCopy = {
  extends: 'Navbar',
  position: 'sticky',
  top: '0',
  width: '100%',
  fontSize: '1rem',
  padding: 'W X W Z2',
  round: '--canvas-round --canvas-round 0 0',
  onDblclick: (ev, el) => {
    el.getRootState().codeMinimized = !el.getRootState().codeMinimized
  },
  NavbarButtonSet_title: {
    padding: '0',
    Text: {
      ignoreChildExtend: true,
      text: '{{ key }}',
    },
    CopyButton: {
      title: 'Copy title',
      value: (el, s) => s.parent.key,
    },
  },
  EditorTools: {
    hide: true,
    margin: '- auto - C3',
    color: 'dim',
    fontSize: 'Z1',
  },
  NavbarButtonSet_meta: {
    class: 'close',
    opacity: '0',
    padding: '0',
    gap: '0',
    Que: {
      title: 'Documentation',
      icon: 'questionMark',
      isActive: false,
      margin: '- - - auto',
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