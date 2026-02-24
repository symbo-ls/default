export const ExamplesInLearn = {
  state: {
    limit: 5,
  },
  tag: 'form',
  CaptionTitle: {
    width: '100%',
    align: 'center',
    Text: {
      text: 'Quick examples',
    },
    ExpandButton: {
      extends: [
        'CanvasButton',
        'IconButton',
      ],
      margin: '- - - auto',
      icon: 'expand',
      onClick: (ev, el) => {
          el.setWindow('docs', '/examples')
        },
    },
  },
  Flex: {
    flow: 'y',
    gap: 'A',
    margin: '- - - -X',
    childExtends: 'ExampleItemInLearn',
    childrenAs: 'state',
    children: (el, s) => [{
          poster: 'example_counter.png',
          descr: 'Increment and decrement a number.',
          title: 'Counter'
        },
        {
          poster: 'example_conditional.png',
          descr: 'Show or hide based on state.',
          title: 'Conditional Rendering'
        },
        {
          poster: 'example_toggling-state.png',
          descr: 'Switch a boolean and update UI.',
          title: 'Toggling State'
        },
        {
          poster: 'example_fetch.png',
          descr: 'Fetch data and update state.',
          title: 'Async Fetch'
        },
        {
          poster: 'example_form-input.png',
          descr: 'Capture input and reflect in UI.',
          title: 'Form Input'
        },
        {
          poster: 'example_clock.png',
          descr: 'Auto update every second.',
          title: 'Clock'
        },
        {
          poster: 'example_tabs.png',
          descr: 'Switch content via active state.',
          title: 'Tabs'
        },
        {
          poster: 'example_accordion.png',
          descr: 'Expand and collapse sections.',
          title: 'Accordion'
        },
        {
          poster: 'example_progress.png',
          descr: 'Fill dynamically with state.',
          title: 'Progress Bar'
        },
        {
          poster: 'example_dynamic.png',
          descr: 'Add and remove list items dynamically.',
          title: 'Dynamic List'
        },
      ].slice(0, s.limit || 30),
  },
  InsertSectionShadow: {
    left: '-C1',
    right: '-C1',
    bottom: 'C',
  },
  Flex_buttons: {
    childExtends: [
      'CanvasButton',
      'Button',
    ],
    margin: '- - - -Y2',
    zIndex: 2,
    Button: {
      icon: (el, s) => 'arrow angle ' + (s.limit === 5 ? 'down' : 'up'),
      text: (el, s) => (s.limit === 5 ? 'More' : 'Less') + ' examples',
      gap: 'Y1',
      padding: 'Y2 Z2',
      color: 'caption',
      fontSize: 'Z2',
      Icon: {
        order: 2,
      },
      onClick: (ev, el, s) => {
          s.update({
            limit: s.limit === 5 ? 30 : 5
          })
        },
    },
  },
  extend: 'Flex',
  props: {
    flow: 'y',
    align: 'start',
    gap: 'A',
    position: 'relative',
  },
};