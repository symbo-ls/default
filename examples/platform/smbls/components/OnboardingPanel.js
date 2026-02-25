export const OnboardingPanel = {
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: 'Z1'
  },
  CaptionTitle: {
    Text: {
      text: 'Quick checklist'
    }
  },
  Flex: {
    flow: 'y',
    gap: 'Z2',
    childExtends: [
      'Flex',
      {}
    ],
    childProps: {
      fontWeight: '400',
      isActive: false,
      isCurrent: false,
      gap: 'Z',
      align: 'center',
      ':hover': {
        textDecoration: 'underline'
      },
      Circle: {
        order: '-1',
        boxSize: 'A',
        border: '1px, solid, --color-line',
        Icon: {
          name: 'checkmark'
        }
      },
      Text: {
        '.isDone': {
          fontWeight: '200',
          color: 'paragraph',
          textDecoration: 'line-through'
        }
      }
    },
    childrenAs: 'props',
    children: () => [{
      Text: {
        text: 'Create a component'
      },

      isDone: (el) =>
        Object.keys(el.getSchema('components') || {}).length > 0,

      onClick: async (ev, el) => {
        ev.stopPropagation()
        await el.call('openModal', '/add-component')
      }
    },

    {
      Text: {
        text: 'Reuse a component'
      },

      isDone: (el) =>
        Object.keys(el.getSchema('components') || {}).length > 1,

      onClick: async (ev, el) => {
        ev.stopPropagation()
        const componentFound = Object.values(el.getSchema('components'))[0]
        if (!componentFound?.key) {
          return el.call('openNotification', {
            title: 'No component to reuse',
            message: 'Please add a component first',
            type: 'transparentPattern'
          })
        }
        await el.call('openModal', '/add-component', {
          key: componentFound.key + 'Reused',
          title: (componentFound.title || componentFound.key) + ' Reused',
          type: 'components',
          value: {
            [componentFound.key]: {}
          },
          code: `export default {\n  // Reusable component:\n  ${componentFound.key}: {\n    // Overwrite properties... \n  },\n}`,
          advanced: true
        })
      }
    },

    {
      Text: {
        text: 'Create a main page'
      },

      isDone: (el) => (el.getSchema('pages') || {})['/'],

      onClick: async (ev, el) => {
        ev.stopPropagation()
        await el.call('openModal', '/add-page', {
          title: 'Main page',
          key: '/',
          type: 'pages',
          value: {
            '/': {
              H1: {
                text: 'Hello Symbols'
              }
            }
          },
          code: 'export default {\n  \'/\': {\n    H1: { text: \'Hello Symbols\' } \n  },\n}',
          advanced: true
        })
      }
    },

    {
      Text: {
        text: 'Open your page'
      },

      isDone: (el) =>
        el.call('getCookie', el.getAppKey() + '_projectRemotePageWasViewed'),

      onClick: (ev, el) => {
        ev.stopPropagation()
        const pageFound = Object.values(el.getSchema('pages'))[0]
        if (!pageFound?.key) {
          return el.call('openNotification', {
            title: 'No page to open',
            message: 'Please add a page first',
            type: 'transparentPattern'
          })
        }

        const url = `https://${el.getAppKey()}/${pageFound.key}`
        window.open(url, 'Symbols preview')

        el.call(
          'setCookie',
          el.getAppKey() + '_projectRemotePageWasViewed',
          true
        )
      }
    },

    {
      Text: {
        text: 'Import from Library'
      },

      // add flag to confirm component was added
      isDone: el =>
        Object.keys(el.getSchema('components')).length > 1,

      onClick: (ev, el) => {
        ev.stopPropagation()
        el.setWindow('explorer', 'insert:library')
      }
    },

    {
      Text: {
        text: 'Upload a logo'
      },

      isDone: (el) => Object.keys(el.getData('files')).length > 0,

      onClick: async (ev, el) => {
        ev.stopPropagation()
        await el.call('openModal', '/add-file')
      }
    },

    {
      Text: {
        text: 'Add a color'
      },

      isDone: (el) =>
        Object.keys(el.getData('designSystem').COLOR || {}).length > 2,

      onClick: (ev, el) => {
        ev.stopPropagation()
        el.call('activeAddingFloatingPanel', ev, 'color')
      }
    },

    // {
    //   Text: {
    //     text: 'Setup a global theme'
    //   },

    //   isDone: el =>
    //     Boolean(
    //       el.getData('designSystem').THEME?.document[
    //         '@' + el.call('getSystemGlobalTheme')
    //       ]
    //     ),

    //   onClick: (ev, el) => {
    //     ev.stopPropagation()
    //     el.call('activeAddingFloatingPanel', ev, 'global_theme')
    //   }
    // }

    {
      Text: {
        text: 'Publish'
      },

      isDone: (el) =>
        el.call('getCookie', el.getAppKey() + '_projectWasPublished'),

      onClick: async (ev, el) => {
        ev.stopPropagation()
        await el.call('openModal', '/publish')
      }
    }
    ]
  }
}
