export const IntegrationsItem = {
  extend: 'DomainItem',
  props: {
    align: 'start',
  },
  state: {
    icon: 'plus',
    title: 'Custom',
    descr: 'Add custom endpoint as data source',
  },
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
  Button: {
    extends: [
      'CanvasButton',
      'Button',
    ],
    margin: '-Y -Z2 - auto',
    icon: 'plus oval',
    text: 'Connect',
    gap: 'Y1',
    padding: 'Y2 Z2',
    fontSize: 'Z2',
    Icon: {
      order: 2,
      color: 'blue',
    },
    onClick: (ev, el, s) => s.onAdd?.(el, s),
  },
  Upgrade: null,
};