export const TextNavbarButton = {
  props: {
    padding: 'Y1 Z2',
    fontWeight: '400',
    lineHeight: 0.9,
    isActive: (el) => {
        const explorer = el.getWindow('explorer')
        return explorer?.startsWith?.(el.parent.props.key || el.props.key)
      },
    onClick: (ev, el) => {
        const active = el.parent.props.key || el.props.key
        const explorer = el.getWindow('explorer')
        const isSelected = active === explorer
        const hasSelected = explorer?.startsWith?.(active)
        const val = isSelected ? null : active
        el.setWindow('explorer', val)
      },
    text: 'Files',
    key: 'explorer',
  },
  extend: [
    'CanvasButton',
    'Button',
  ],
};