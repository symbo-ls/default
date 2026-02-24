export const MainCanvasNavbar = {
  extends: 'Navbar',
  gap: 'A2',
  round: 'C1',
  padding: 'V Z',
  fontSize: 'Z',
  userSelect: 'none',
  theme: 'common-box',
  borderColor: 'line',
  borderWidth: '1px',
  borderStyle: 'solid',
  MainNav: {
    extends: 'Flex',
    align: 'center',
    gap: 'X',
    LogoDropdown: {},
    TextNavbar: {},
  },
  ModesInNavbar: {
    margin: '- -Z',
  },
  CanvasPagesDropdown: {
    margin: '- -Z',
  },
  CanvasSearch: {
    flex: 1,
  },
  History: {
    extends: 'NavbarButtonSet',
    gap: 'X2',
    margin: '- -Z - -Y2',
    Undo: {
      title: 'Undo',
      icon: 'undo',
      onClick: (ev, el, s) => {
        el.sdk.undo()
      },
    },
    Redo: {
      title: 'Redo',
      icon: 'redo',
      onClick: (ev, el, s) => {
        el.sdk.redo()
      },
    },
    History: {
      title: 'History',
      icon: 'sf history',
      onClick: (ev, el, s) => {
        el.getRootState().toggle('isVersionsOpen', {
          preventUpdate: true
        })
        el.getVersionsAside()?.update()
      },
    },
  },
  EnvsNavbar: {
    if: () => false,
  },
  PublishNavbar: {},
  MembersNavbar: {
    margin: '- -Z2 - -',
  },
  SharingNavbar: {},
};