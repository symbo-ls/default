export const SyncSuggestionsInPublish = {
  extend: 'Flex',
  props: {
    gap: 'A',
    flow: 'y',
    margin: '- -Z2',
    childExtends: 'DomainItem',
    childProps: {
      Icon: {
        name: '{{ icon }}',
      },
      Hgroup: {
        H: {
          text: '{{ title }}',
        },
        P: {
          text: '{{ descr }}',
        },
      },
      Upgrade: null,
      Button: {
        extends: [
          'CanvasButton',
          'Button',
        ],
        padding: 'Y2 Z2',
        margin: '-Y -Z2 - auto',
        text: 'Connect',
        icon: 'plus oval',
        gap: 'Y1',
        Icon: {
          order: 2,
          color: 'blue',
        },
        fontSize: 'Z2',
      },
      align: 'start',
    },
    children: [
      {
        icon: 'globe',
        title: 'Your website',
        descr: 'Import tokens, layers and artboards',
      },
      {
        icon: 'figma',
        title: 'Figma',
        descr: 'Import tokens, layers and artboards',
      },
      {
        icon: 'wordpress',
        title: 'Wordpress',
        descr: 'Sync Symbols components',
      },
      {
        icon: 'github',
        title: 'Github',
        descr: 'Sync with your repository',
      },
    ],
    childrenAs: 'state',
  },
};