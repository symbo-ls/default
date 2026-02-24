export const Zoombar = {
  if: (el, s) => el.getUserSettings('allowZoombar'),
  ZoomInNavbar: {},
  Box: {
    boxSize: 'A1',
    round: 'C',
    onInit: (el, s) => {
      const globalTheme = el.call('getGlobalTheme')
      const colorFromCookie = el.call('getCookie', `canvas_${globalTheme}_background`)
      const initValue = colorFromCookie || {
        dark: '#A3ADB6',
        light: '#bac1c9'
      } [globalTheme || 'dark']
      el.props.background = el.props.value = initValue
    },
    onDblclick: (ev, el, s) => {
      const globalTheme = el.call('getGlobalTheme')
      const value = {
        dark: '#A3ADB6',
        light: '#bac1c9'
      } [globalTheme]
      el.Input.node.value = value
      el.setNodeStyles({
        background: value
      })
      el.getCanvasScope('frameRootElement').setNodeStyles({
        background: value
      })
      el.call('removeCookie', `canvas_${globalTheme}_background`)
    },
    Input: {
      opacity: 0,
      value: el => el.parent.props.value,
      border: '0',
      width: 'none',
      minWidth: 'none',
      textAlign: 'start',
      padding: '0',
      type: 'color',
      theme: null,
      onInput: (ev, el, s) => {
        const value = el.node.value || "#A3ADB6";
        const globalTheme = el.call('getGlobalTheme')
        el.parent.setNodeStyles({
          background: value
        })
        el.getCanvasScope('frameRootElement').setNodeStyles({
          background: value
        })
        el.call('setCookie', `canvas_${globalTheme}_background`, value)
      },
    },
  },
  NavbarButtonSet: {
    padding: '0',
    Settings: {
      icon: 'sf settings',
      onClick: (ev, el) => {
        el.call('openModal', '/settings', {
          key: '/settings'
        })
      },
      title: 'Settings',
    },
    Keyboard: {
      title: 'Keyboard shortcuts (soon)',
      icon: 'sf keyboard',
    },
    Question: {
      title: 'Docs',
      icon: 'sf question',
      onClick: (ev, el, s) => {
        el.call('setWindow', 'explorer', 'onboarding')
      },
    },
    Chat: {
      title: 'Support',
      icon: 'support',
      onClick: (ev, el, s) => {
        el.call('loadIntercom')
      },
    },
  },
  NavbarTooltip: {
    top: '-65%',
    tooltipPosition: 'top',
    shapeDirection: 'bottom',
  },
  extend: 'Navbar',
  props: {
    gap: 'A',
    padding: 'V Z',
    round: 'C1',
    fontSize: 'Z',
    userSelect: 'none',
  },
};