export const BoxSizeRow = {
  Flex: {
    zIndex: 2,
    backgroundColor: 'document-background',
    border: '1px, solid, gray3',
    round: 'Z1',
    margin: '-1px',
    childProps: {
      ':first-child': {
        border: '.7px, dashed, gray3',
        round: 'Z1',
      },
    },
    childExtends: 'BoxSizeItem',
    children: [
      {
        SizeUnits: {
          LetterValue: {},
          NumberValue: {},
        },
      },
      {
        Icon: {
          opacity: '0',
        },
        SizeUnits: {
          LetterValue: {},
          NumberValue: {},
        },
        Span: {
          opacity: '0',
        },
      },
    ],
  },
  BoxSizeItem: {
    border: '.7px, dashed, gray3',
    round: 'Z1',
    margin: '-1px 0 -1px -B',
    padding: 'Z Y1 Z B',
    Icon: {
      opacity: '0',
    },
    SizeUnits: {
      LetterValue: {
        value: (el, s) => {
          const type = s.type
          const key = `max${type}`
          return s[key] && s[key] !== 'none' ?
            el.call('getLetterValueFromState', 0, key) :
            ''
        },
        onInput: (ev, el, s) => {
          const type = s.type
          const key = `max${type}`
          el.call('updateLetterStateValue', 0, key)
        },
      },
      NumberValue: {
        value: (el, s) => {
          const type = s.type
          const key = `max${type}`
          return s[key] && s[key] !== 'none' ?
            el.call('getNumberValueFromState', 0, key) :
            'none'
        },
        onInput: (ev, el, s) => {
          const type = s.type
          const key = `max${type}`
          el.call('updateNumberStateValue', 0, key)
        },
      },
    },
    Span: {
      text: 'Max',
    },
  },
  extend: 'Flex',
};