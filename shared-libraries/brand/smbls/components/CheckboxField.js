export const CheckboxField = {
  flow: 'x',
  tag: 'label',
  gap: 'Y',
  alignItems: 'center',
  Input: {
    type: 'checkbox',
    checked: (el, s) => el.parent.props.checked,
    display: 'none',
    ':checked': {
      '~ span': {
        opacity: '.85',
      },
      '~ svg': {
        color: 'title',
      },
    },
  },
  Icon: {
    name: 'checkmark',
    round: 'X',
    fontSize: 'A',
    padding: 'W',
    boxSizing: 'content-box',
    cursor: 'pointer',
    background: 'line',
    color: 'disabled .35',
  },
  Span: {
    userSelect: 'none',
    text: 'This is variable font',
    opacity: '.5',
    cursor: 'pointer',
  },
};