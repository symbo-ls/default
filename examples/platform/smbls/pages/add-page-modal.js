export const addPageModal = {
  extends: '/add-component-modal',
  width: '100%',
  maxWidth: 'I3',
  maxHeight: '90dvh',
  state: {
    type: 'pages',
    settings: {
      gridOptions: {
        w: 3,
        h: 3,
      },
    },
  },
  ModalHeader: {
    title: 'Create a new page',
    p: 'Fill initial settings and choose a template',
  },
  Flex: {
    overflow: 'auto',
    padding: 'A C3 0',
    minHeight: 'G3',
    minWidth: '100%',
    flow: 'column',
    flexAlign: 'flex-start space-between',
    gap: 'C1',
    'Flex.info': {
      'InputField.key': {
        Title: {
          text: 'Path',
        },
        Input: {
          placeholder: 'E.g, /portfolio',
          onKeyup: (e, el, s) => {
            const val = el.node.value
            s.update({
              touched: true,
              key: val.startsWith('/') ? val : `/${val}`
            })
          },
          onKeydown: (e, el) => {
            const val = el.node.value
            const preventChars = el.call('stringIncludesAny', val, [
              '&',
              ':',
              '@',
              '.',
              '!',
              ' '
            ])
            if (preventChars) {
              e.preventDefault()
              return false
            }
            return true
          },
        },
      },
    },
    'Flex.advanced': {
      'InputField.title': {
        Title: {
          text: 'Page title',
        },
        Input: {
          placeholder: 'E.g. Design Porfolio',
          onKeyup: (e, el, s) => {
            const val = el.node.value
            const keyFromTitle = val.toLowerCase().replace(/[^a-z0-9]/gu, '-')
            const key = ['main', 'index'].includes(keyFromTitle) ?
              '' :
              keyFromTitle
            const canApplyKey = !s.touched
            const obj = {
              title: val
            }
            if (canApplyKey) {
              obj.key = `/${key}`
            }
            s.update(obj)
          },
        },
      },
    },
  },
};