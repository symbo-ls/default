export const DynamicNavbar = {
  extend: 'Navbar',
  props: {
    position: 'sticky',
    top: '0',
    fontSize: 'Y2',
    margin: '- -Y1',
    padding: 'X2 0 0',
    theme: null,
  },
  NavbarButtonSet: {
    width: '100%',
    childProps: {
      padding: 'Y',
    },
    Back: {
      icon: 'arrow angle left',
      hasBack: (el, s) => {
          return s.recentsIndex < s.recents.length - 1
        },
      '!hasBack': {
        opacity: '0.35',
        pointerEvents: 'none',
      },
      onClick: (ev, el, s) => {
          const recents = s.recents
          s.recentsIndex++
          const prev = recents?.[s.recentsIndex]
          if (prev) {
            el.setWindow('explorer', prev, {
              skipRecentsIndexing: true
            })
          }
        },
    },
    Forward: {
      icon: 'arrow angle right',
      hasForward: (el, s) => {
          return s.recentsIndex > 0
        },
      '!hasForward': {
        opacity: '0.35',
        pointerEvents: 'none',
      },
      onClick: (ev, el, s) => {
          const recents = s.recents
          s.recentsIndex--
          const next = recents?.[s.recentsIndex]
          if (next) {
            el.setWindow('explorer', next, {
              skipRecentsIndexing: true
            })
          }
        },
    },
    Close: {
      margin: '- - - auto',
      icon: 'crossmark',
      onClick: (ev, el) => el.closeWindow('explorer'),
    },
  },
};