export const PublishTools = {
  extend: 'Flex',
  props: {
    gap: 'A',
    flow: 'y',
    margin: '- -Z2',
  },
  childExtend: 'DomainItem',
  Custom: {
    Hgroup: {
      H: {
        text: 'Version 2.0.0',
      },
      P: {
        text: 'Update Major',
      },
    },
  },
  Lookup: {
    Icon: {
      name: 'sf search',
    },
    Hgroup: {
      H: {
        text: 'Version 1.2.0',
      },
      P: {
        text: 'Update Minor',
      },
    },
  },
  Current: {
    Icon: null,
    Hgroup: {
      H: {
        text: (el) => 'Version ' + el.getRootState('version'),
        IconButton: {
          extends: [
            'CanvasButton',
            'IconButton',
          ],
          theme: null,
          padding: 'Y',
          margin: '- - -Z X',
          icon: 'search oval dotted',
          onClick: (ev, el, s) => {
              el.getRootState().toggle('isVersionsOpen', {
                preventUpdate: true
              })
              el.getVersionsAside()?.update()
            },
        },
      },
      P: {
        text: 'Autosaved',
      },
    },
    Upgrade: null,
    Span: {
      margin: '- - - auto',
      text: 'Latest',
    },
  },
};