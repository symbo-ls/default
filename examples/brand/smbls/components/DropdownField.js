export const DropdownField = {
  extends: [
    'FocusableComponent',
  ],
  tag: 'button',
  theme: 'field',
  align: 'center space-between',
  padding: 'Y Y Y A',
  minWidth: 'F1',
  round: 'Z',
  gap: 'Y',
  tabindex: '-1',
  StartButtons: {
    extends: 'Flex',
    gap: 'X1',
    align: 'center',
    childExtends: 'IconButton',
    childProps: {
      tabindex: '-1',
      theme: 'field-highlight',
      round: 'Y1',
      padding: 'Y1',
    },
  },
  Value: {
    extends: 'Flex',
    align: 'center flex-start',
    padding: '0 B 0 0',
    gap: 'Y2',
    Text: {
      text: (el, s) => s.value || s.defaultValue || 'default',
    },
    Suffix: null,
  },
  Buttons: {
    extends: 'Flex',
    gap: 'X1',
    align: 'center',
    childExtends: 'IconButton',
    childProps: {
      tabindex: '-1',
      theme: 'field-highlight',
      round: 'Y1',
      padding: 'Y1',
    },
    Arrow: {
      icon: 'arrow angle mirroring vertical',
    },
  },
  Dropdown: {
    top: '110%',
    left: '0',
  },
};