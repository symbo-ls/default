export const ModesInNavbar = {
  Default: {
    isActive: (el, s) => el.isCanvasMode('defaultMode'),
    title: 'Default mode',
    icon: 'sf cursor',
    '!isActive': {
      ':not(:hover)': {
        theme: 'transparent'
      }
    },
    onClick: (ev, el, s) => {
      el.setCanvasMode('defaultMode')
    }
  },
  Inspect: {
    isActive: (el, s) => el.isCanvasMode('inspectMode'),
    title: 'Inspect mode',
    icon: 'sf inspect',
    '!isActive': {
      ':not(:hover)': {
        theme: 'transparent'
      }
    },
    onClick: (ev, el, s) => {
      el.setCanvasMode('inspectMode')
    }
  },
  Pan: {
    isActive: (el, s) => el.isCanvasMode('panningMode'),
    title: 'Pan mode',
    icon: 'sf move',
    '!isActive': {
      ':not(:hover)': {
        theme: 'transparent'
      }
    },
    onClick: (ev, el, s) => {
      el.setCanvasMode('panningMode')
    }
  },
  Viewing: {
    isActive: (el, s) => el.isCanvasMode('isViewing'),
    title: 'View mode',
    icon: 'sf eye',
    '!isActive': {
      ':not(:hover)': {
        theme: 'transparent'
      }
    },
    onClick: (ev, el, s) => {
      el.setCanvasMode('isViewing')
    },
    hide: true
  },
  Comment: {
    isActive: (el, s) => el.isCanvasMode('isCommenting'),
    title: 'Comment mode',
    icon: 'sf comment',
    '!isActive': {
      ':not(:hover)': {
        theme: 'transparent'
      }
    },
    onClick: (ev, el, s) => {
      el.setCanvasMode('isCommenting')
    },
    hide: true
  },
  CanvasButton: {
    ignoreChildProps: true,
    ignoreChildExtend: true,
    ignoreChildExtends: true,
    lineHeight: 1,
    padding: 'X',
    round: 'X',
    margin: '- - - -W',
    onClick: async (ev, el) => {
      ev.stopPropagation()
    },
    DropdownArrow: {},
    extends: [
      'CanvasButton',
      'Flex',
      'DropdownParentFocus'
    ],
    Dropdown: {
      top: 'C3',
      left: '-D1',
      'Dropdown.MoreModesMenu': {}
    }
  },
  extend: 'NavbarButtonSet',
  props: {
    gap: 'W2',
    onFrame: (el, s) => {
      const canvasMode = el.getCanvasMode()
      el.variables({
        canvasMode
      })
        .changed(_ => {
          el.update()
        })
    },
    align: 'center',
    onRender: el => el.update()
  }
}
