export const EnvsNavbar = {
  extend: [
    'CanvasButton',
    'DropdownParentFocus',
    'Button',
  ],
  props: {
    padding: 'Y1 Y2 Y1 Z2',
    align: 'center',
    gap: 'Y1',
    margin: '- -Y1',
    lineHeight: 1,
  },
  ConnectionLabel: {
    Circle: {
      boxSize: 'Y1',
      isActive: true,
      position: 'relative',
      isLoading: false,
      animationIterationCount: 'infinite',
      '.isLoading': {
        animation: 'blinking',
        animationDuration: 'G2',
      },
      '!isLoading': {
        animation: null,
      },
      onRender: (el, s) => {
        const handler = ({
          origin
        }) => {
          if (origin === 'auto') {
            el.setProps({
              isLoading: true
            })
            setTimeout(() => el.setProps({
              isLoading: false
            }), 1000)
          }
        }
        el.sdk.rootBus.on('checkpoint:done', handler)
      },
    },
    Text: {
      maxWidth: '100%',
      text: el => 'development',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      padding: '- - .1em',
    },
    CopyButton: null,
    onMouseover: (ev, el, s) => {
      if (!s.hover) {
        s.hover = true
        el.call('setNavbarTooltipPosition', {
          visible: true
        })
      }
    },
    onMouseleave: (ev, el, s) => {
      if (s.hover) {
        s.hover = false
        const Tooltip = el.lookup('NavbarTooltip')
        if (Tooltip) {
          Tooltip.setProps({
            opacity: '0',
            visibility: 'hidden'
          })
        }
      }
    },
    title: 'Environments',
  },
  DropdownArrow: {},
  Dropdown: {
    left: '0',
    onClick: () => {},
    'Dropdown.Envs': {},
  },
};