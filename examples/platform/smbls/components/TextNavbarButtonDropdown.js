export const TextNavbarButtonDropdown = {
  props: {
    key: 'insert',
    isActive: (el) => {
      const explorer = el.getWindow('explorer')
      return explorer?.startsWith?.(el.props.key)
    },
    '.isActive': {
      '@dark': {
        color: 'white',
        backgroundColor: 'gray5'
      },
      '@light': {
        color: 'black',
        backgroundColor: 'gray11'
      },
      ':hover': {
        '@dark': {
          backgroundColor: 'gray5 .9'
        },
        '@light': {
          backgroundColor: 'gray12 .95'
        }
      }
    }
  },
  Button: {
    extends: 'TextNavbarButton',
    text: 'Insert',
    icon: null,
    isActive: null,
    padding: 'Y2 Y1 Y2 Z2'
  },
  IconButton: {
    padding: 'Z Y2 Z Y',
    DropdownParentFocus: {
      inset: '0',
      position: 'absolute',
      Dropdown: {
        left: '-D2',
        onClick: () => {},
        theme: 'common-box'
      }
    }
  },
  extend: 'DropdownButton'
}
