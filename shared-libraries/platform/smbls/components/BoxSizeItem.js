export const BoxSizeItem = {
  Icon: {
    icon: 'gap',
    color: 'gray5',
    boxSize: 'A1 A1',
  },
  SizeUnits: {
    flow: 'column-reverse',
    LetterValue: {
      color: 'white',
      fontSize: 'A1',
      padding: 'X2 X2 0 X2',
    },
    NumberValue: {
      color: 'gray5',
      fontSize: 'Y',
      padding: 'X X2 X2 X2',
    },
  },
  Span: {
    title: 'paragraph',
    text: 'Min',
    fontSize: 'Y',
    alignSelf: 'flex-end',
    margin: '- - -Y -',
  },
  extend: 'Flex',
  props: {
    padding: 'Z Y1',
    gap: 'C',
    margin: '-1px',
  },
};