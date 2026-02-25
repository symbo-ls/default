export const QuickAccessInNavbar = {
  Add: {
    extends: [
      'CanvasButton',
      'Button',
      'DropdownParentFocus'
    ],
    icon: 'sf plus',
    padding: 'Y1 Z Y1 Z1',
    align: 'center',
    gap: 'Y',
    opacity: 1,
    DropdownArrow: {},
    Dropdown: {
      left: '0',
      onClick: () => {},
      'Dropdown.QuickAdd': {}
    }
  },
  props: {
    gap: 'W2',
    align: 'center'
  }
}
