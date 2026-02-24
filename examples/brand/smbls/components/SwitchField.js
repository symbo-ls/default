export const SwitchField = {
  tag: 'label',
  boxSize: 'A2 B2',
  position: 'relative',
  Input: {
    type: 'checkbox',
    display: 'none',
    ':checked + span': {
      background: 'white .2',
      ':before': {
        left: '68%',
        background: 'white .85',
      },
    },
    onChange: (ev, el, s) => {
      ev.stopPropagation()
      el.parent.props.onChange(ev, el.parent, s)
    },
  },
  Pseudo: {
    tag: 'span',
    boxSize: 'A2 B2',
    position: 'absolute',
    cursor: 'pointer',
    inset: '0 0 0 0',
    background: 'white .06',
    borderRadius: 'C',
    transition: 'B',
    ':before': {
      content: '""',
      position: 'absolute',
      height: 'A',
      width: 'A',
      borderRadius: 'C',
      top: '50%',
      left: '32%',
      transform: 'translate3d(-50%, -50%, 0)',
      bottom: '4px',
      backgroundColor: 'white .1',
      transition: 'B',
    },
  },
};