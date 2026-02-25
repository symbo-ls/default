export const BoxModelMiddle = {
  style: {
    border: '.5px solid rgba(139, 147, 92, .25)'
  },
  Flex_lineHeight: {
    position: 'absolute',
    alignSelf: 'flex-start',
    style: {
      borderLeft: '.8px solid rgba(58, 90, 127, .4)'
    },
    padding: '- - - Y2',
    height: '70%',
    align: 'center center',
    Icon: {
      icon: 'textLineHeight',
      color: '#3A5A7F'
    }
  },
  SizeUnits: {
    LetterValue: null,
    NumberValue: {
      text: '140%',
      color: '#3A5A7F',
      '::after': '%',
      onInput: (ev, el, s) => {
        el.call('updateNumberStateValue', 0, 'lineHeight')
      },
      value: (el, s) => el.call('getNumberValueFromState', 0, 'lineHeight')
    }
  },
  extend: 'Flex',
  props: {
    flow: 'column',
    align: 'center center',
    position: 'relative',
    height: 'C1',
    border: 'solid, yellow .15',
    borderWidth: '.8px',
    padding: '- - - Y',
    round: 'Y2',
    minWidth: 'E3'
  }
}
