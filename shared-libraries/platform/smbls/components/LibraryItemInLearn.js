export const LibraryItemInLearn = {
  extend: [
    'Link',
    'Flex',
  ],
  state: {
    title: 'Default',
    amount: 206,
    poster: 'https://api.symbols.app/core/files/public/68b667ce424350c909ec03f9/download',
    projectPath: 'nikoloza/default',
  },
  props: {
    align: 'stretch',
    padding: '0',
    gap: 'A',
    round: '0',
    overflow: 'visible',
    cursor: 'pointer',
    opacity: '0.8',
    transition: 'A defaultBezier all',
    ':hover': {
      opacity: '1',
      '& .playButton': {
        opacity: '1',
      },
    },
    href: 'https://symbols.app/{{ projectPath }}',
    target: '_blank',
  },
  Box: {
    position: 'relative',
    width: 'E3',
    Img: {
      display: 'block',
      round: 'Z2',
      position: 'relative',
      width: '100%',
      src: '{{ poster }}',
    },
  },
  Flex: {
    flow: 'y',
    gap: 'W2',
    Strong: {
      text: '{{ title }}',
    },
    Span: {
      whiteSpace: 'nowrap',
      fontWeight: '200',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      text: '{{ projectPath }}',
    },
    Span_2: {
      if: (el, s) => !!s.amount,
      margin: 'auto - -',
      fontWeight: '100',
      fontSize: 'Z2',
      text: '{{ amount }} resources',
      color: 'paragraph',
    },
  },
};