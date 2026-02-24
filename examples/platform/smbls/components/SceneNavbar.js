export const SceneNavbar = {
  extends: 'Navbar',
  width: 'max-content',
  padding: 'W X W Z2',
  position: 'relative',
  round: 'Z2 Z2 X2 X2',
  backdropFilter: 'none',
  alignSelf: 'start',
  borderWidth: '0',
  zIndex: 1001,
  height: 'auto',
  margin: '0',
  transform: 'translate3d(0, 0, 1px)',
  align: 'center space-between',
  fontSize: 'Y1',
  onClick: ev => ev.stopPropagation(),
  style: {
    minWidth: '-webkit-fill-available',
  },
  Space: {
    if: el => el.isEmbed(),
    width: 'B2',
    height: 'A',
  },
  NavbarButtonSet_copy: {
    padding: '0',
    Text: {
      ignoreChildExtend: true,
      text: '{{ key }}',
    },
    CopyButton: {
      value: (el, s) => s.parent.key,
    },
  },
  EditorTools: {
    margin: '- - - C3',
    color: 'dim',
    fontSize: 'Z1',
  },
  ResponsiveSwitching: {
    margin: '0 auto',
    color: 'dim',
    fontSize: 'Z1',
    align: 'center',
  },
  EditorPositionNavbar: {
    margin: '- A - -',
    isDisabled: el => !Boolean(el.getCanvasScope('componentEditor')),
    '.isDisabled': {
      opacity: '.35',
      pointerEvents: 'none',
    },
  },
  NavbarButtonSet: {
    color: 'dim',
    fontSize: 'Z1',
    Fullscreen: {
      title: 'Fullscreen',
      icon: el => !el.getRootState('isFullscreen') ?
        'fullscreen' : 'fullscreen exit',
      onClick: async (ev, el) => {
        const Canvas = el.getCanvas()
        await Canvas.call('toggleFullscreen')
        el.getRootState().isFullscreen = Boolean(document.fullscreenElement)
        el.update()
      },
    },
    Minimize: {
      title: 'Minimize',
      icon: 'minus',
      onClick: (ev, el) => {
        el.activateChosen(null)
      },
    },
    Close: {
      title: 'Close',
      icon: 'crossmark',
      onClick: (ev, el, s) => {
        el.activateChosen(null)
      },
    },
  },
  NavbarTooltip: {
    '&': {
      pointerEvents: 'none',
    },
  },
};