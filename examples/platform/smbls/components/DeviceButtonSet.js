export const DeviceButtonSet = {
  extend: 'NavbarButtonSet',
  props: {
    gap: 'A',
    childProps: (el, state) => {
      const isActive = el.getCanvasScope('previewSize') === state.key
      const isThreeDots = (state.icon === 'threeDotsVertical') && 'threeDotsVertical'
      const isResize = (state.icon === 'dimensionsAlt') && (isActive ? state.icon + ' colored outline' : state.icon)

      return {
        isActive,
        isThreeDots,
        theme: null,
        background: 'transparent 0',
        color: 'gray7',
        icon: isResize || isThreeDots || isActive
          ? state.icon
          : state.icon + ' outline',

        '.isThreeDots': {
          order: -15
        },

        ':hover': {
          background: 'gray4',
          color: 'gray10'
        },

        '.isActive': {
          opacity: 1,
          theme: 'secondary-highlight'
        },

        onClick: (ev, el, s, ctx) => {
          const previewSize = s.key !== el.getCanvasScope('previewSize') ? s.key : 'unset'
          el.getCanvasScope().previewSize = previewSize
          el.parent.update()
          ctx.utils.setCookie('previewSize', previewSize)
          el.syncCanvas()
        }
      }
    },
    childrenAs: 'state',
    children: () => [{
      key: 'custom',
      icon: 'threeDotsVertical'
    }, {
      key: 'mobileXS',
      icon: 'deviceMobile'
    }, {
      key: 'tabletS',
      icon: 'deviceTabletPortrait'
    }, {
      key: 'tabletL',
      icon: 'deviceTabletLandscape'
    }, {
      key: 'screenM',
      icon: 'deviceSmallScreen'
    }, {
      key: 'screenL',
      icon: 'deviceBigScreen'
    }, {
      key: 'resizable',
      icon: 'dimensionsAlt'
    }, {
      key: 'canvas',
      icon: 'columns'
    }]
  }
}
