export const QuickEditorNavbar = {
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
    icon: 'crossmark',
    onClick: (ev, el) => {
      el.getCanvasScope().editorActive = false
    },
  },
  extend: 'NavbarButtonSet',
  props: {
    padding: '0',
    childProps: {
      padding: 'Y',
    },
    gap: 'W',
    fontSize: 'Z2',
  },
};