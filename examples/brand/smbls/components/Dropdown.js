export const Dropdown = {
  tag: 'section',
  attr: {
    dropdown: true
  },
  isDropdownRoot: true,
  theme: 'common-box',
  round: 'Z2',
  minWidth: 'F',
  maxHeight: 'H',
  transition: 'A defaultBezier',
  transitionProperty: 'visibility, transform, opacity',
  overflow: 'hidden auto',
  boxSizing: 'border-box',
  zIndex: 1000,
  borderColor: 'line',
  borderWidth: '1px',
  borderStyle: 'solid',
  left: '50%',
  transform: 'translate3d(0, -10px, 0)',
  position: 'absolute',
  opacity: '0',
  visibility: 'hidden',
  forcedVisible: false,
  '.preventAbsolute': {
    position: 'static'
  },
  '.forcedVisible': {
    opacity: '1',
    visibility: 'visible'
  },
  '@dark': {
    boxShadow: 'black .20, 0px, 5px, 10px, 5px'
  },
  '@light': {
    boxShadow: 'gray5 .20, 0px, 5px, 10px, 5px'
  },
  onRender: el => {
    const dropdown = el.node
    const dropdownParentNode = el.parent?.node

    if (!dropdown || !dropdownParentNode) {
      return
    }

    const yOffset = el.props.yOffset || '115%'

    const calculateDirection = () => {
      const dropdownParentRect = dropdownParentNode.getBoundingClientRect()
      const dropdownRect = dropdown.getBoundingClientRect()
      const dropdownHeight = dropdownRect.height

      const spaceBelow = window.innerHeight - dropdownParentRect.bottom
      const spaceAbove = dropdownParentRect.top

      const shouldOpenUp =
      spaceBelow < dropdownHeight && spaceAbove > dropdownHeight

      if (shouldOpenUp && el.props.bottom !== yOffset) {
        el.setProps({
          top: '',
          bottom: yOffset
        })
      } else if (!shouldOpenUp && el.props.top !== yOffset) {
        el.setProps({
          bottom: '',
          top: yOffset
        })
      }
    }

    dropdownParentNode.addEventListener('mouseenter', calculateDirection)

    return () => {
      dropdownParentNode.removeEventListener('mouseenter', calculateDirection)
    }
  },
  preventAbsolute: false
}
