export const SelectDropdown = {
  extends: [
    'DropdownField',
    'DropdownParent',
  ],
  Dropdown: {
    minWidth: 'F3',
    left: '0',
    width: '100%',
    top: '110%',
    DropdownHeader: {},
    ListInDropdown: {
      childProps: {
        align: 'center flex-start',
        text: '{{ key }}',
      },
      children: (el, s) => el.parent.props.options || s.list,
      childrenAs: 'state',
    },
  },
};