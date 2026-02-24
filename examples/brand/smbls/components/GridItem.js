export const GridItem = {
  extends: [
    'DropdownItem',
    'SquareButton',
  ],
  padding: 'Z2',
  Icon: {
    name: (el, s) => s.key || el.key,
  },
  text: null,
};