export const CanvasPagesDropdown = {
  extend: [
    'CanvasButton',
    'DropdownParentFocus',
    'Button',
  ],
  Text: {
    lineHeight: 0.9,
    width: 'D',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    text: el => el.call('getActiveCanvasPage') || 'Default',
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
    title: 'Selected Canvas',
  },
  Dropdown: {
    left: '0',
    ChooseCanvas: {
      padding: 'X',
    },
  },
  DropdownArrow: {},
  props: {
    padding: 'Y2 Y2 Y2 Z2',
    align: 'center',
    gap: 'Y',
    aspectRatio: 'none',
  },
};