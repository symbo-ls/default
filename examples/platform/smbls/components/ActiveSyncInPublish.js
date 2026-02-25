export const ActiveSyncInPublish = {
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: 'A',
    margin: '- -Z2'
  },
  Website: {
    extends: 'DomainItem',
    Icon: {
      name: 'globe'
    },
    Hgroup: {
      H: {
        text: 'Your website'
      },
      P: {
        text: 'Last version 1.2.1'
      }
    },
    Upgrade: null,
    Span: {
      margin: '- - - auto',
      fontSize: 'Y2',
      text: 'Synced 6 mins ago'
    },
    align: 'start'
  },
  Figma: {
    extends: 'DomainItem',
    Icon: {
      name: 'figma'
    },
    Hgroup: {
      H: {
        text: 'Figma'
      },
      P: {
        text: 'Last version 1.2.1'
      }
    },
    Upgrade: null,
    Span: {
      margin: '- - - auto',
      fontSize: 'Y2',
      text: '6 updates'
    },
    Sync: {
      extends: [
        'CanvasButton',
        'Button'
      ],
      padding: 'Y2 Z2',
      margin: '-Y1 -Z2 - -',
      fontSize: 'Z2',
      text: 'Sync',
      icon: 'syncOvalFill',
      gap: 'Y1',
      Icon: {
        order: 2,
        color: 'blue'
      }
    },
    align: 'start'
  },
  Autosync: {
    extends: 'DomainItem',
    Icon: null,
    Hgroup: {
      H: {
        text: 'Autosync'
      },
      P: {
        text: 'Enable auto syncing during publishing'
      }
    },
    Upgrade: null,
    Toggle: {
      margin: '- - - auto'
    },
    align: 'start'
  }
}
