export const ExampleItemInLearn = {
  extend: 'LibraryItemInLearn',
  props: {
    href: null,
    onClick: (ev, el) => {
        el.setWindow('docs', '/examples')
      },
  },
  state: {
    poster: 'example_clock.png',
    descr: 'Increment and decrement a number.',
    title: 'Counter',
  },
  Box: {
    position: 'relative',
    width: 'E',
    borderColor: 'line',
    borderStyle: 'solid',
    borderWidth: '1px',
    round: 'Z2',
    Img: {
      display: 'block',
      round: 'Z2',
      position: 'relative',
      width: '100%',
      src: '{{ poster }}',
    },
  },
  Flex: {
    Strong: {},
    Span: {
      text: '{{ descr }}',
    },
    Span_2: null,
  },
};