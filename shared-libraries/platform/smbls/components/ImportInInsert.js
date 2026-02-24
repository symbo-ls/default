export const ImportInInsert = {
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: 'A',
  },
  CaptionTitle: {
    Text: {
      text: 'Import',
    },
  },
  Flex: {
    gap: 'A',
    flow: 'y',
    margin: '- -Z2',
    childExtends: 'DomainItem',
    childrenAs: 'state',
    childProps: {
      Hgroup: {
        H: {
          text: '{{ title }}',
        },
        P: {
          text: '{{ descr }}',
        },
      },
      Icon: {
        name: '{{ icon }}',
      },
      Button: {
        margin: '-Y -Z2 - auto',
        text: 'Connect',
        icon: 'plus oval',
        gap: 'Y1',
        Icon: {
          order: 2,
          color: 'blue',
        },
        extends: [
          'CanvasButton',
          'Button',
        ],
        padding: 'Y2 Z2',
        fontSize: 'Z2',
        onClick: (ev, el, s) => s.onAdd?.(el, s),
      },
      align: 'start',
      Upgrade: null,
    },
    children: [
      {
        icon: 'globe',
        title: 'Live website',
        descr: 'Open any website and select what to import',
      },
      {
        icon: 'figma',
        title: 'Figma',
        descr: 'Import tokens, layers and artboards',
      },
      {
        icon: 'terminal',
        title: 'Local Files',
        descr: 'Import your local starter-kit using CLI',
      },
    ],
  },
};