export const KeyValueColumnFields = {
  extends: [
    'DropdownItem',
    'Button',
  ],
  textAlign: 'start',
  align: 'center flex-start',
  padding: 'A',
  fontSize: 'Z1',
  href: '{{ href }}',
  onClick: async (ev, el, s, ctx) =>
    await el.call('dropdownClick', ev, el, s, ctx),
  Icon: {
    name: 'checkmark',
    opacity: '0',
    transition: 'A opacity',
    margin: '- Y1 - W1',
  },
  Text: {
    color: 'title',
    text: (el, s) => s.text || s.value || s.key || '',
  },
  Caption: {
    marginLeft: 'Z2',
    textTransform: 'capitalize',
    color: 'caption',
    whiteSpace: 'nowrap',
    text: '',
  },
};