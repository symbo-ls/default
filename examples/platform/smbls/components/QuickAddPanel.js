export const QuickAddPanel = {
  extend: 'Flex',
  state: {
    type: 'components'
  },
  tag: 'form',
  props: {
    flow: 'y',
    gap: 'Z',
    onSubmit: (ev, el, s) => {
      ev.preventDefault()
      el.call('createItem', s.type, s.key)
    }
  },
  CaptionTitle: {
    Text: {
      text: 'Quick add'
    }
  },
  Flex: {
    gap: 'X',
    margin: '- - - -Z+W',
    Select_action: {
      background: 'none',
      color: 'currentColor',
      padding: 'X Y2',
      width: 'D3',
      onChange: (ev, el, s, ctx) => {
        const value = ev.target.value
        if (value) {
          s.update({
            action: value
          })
        }
      },
      children: [
        {
          text: 'Create',
          value: 'create'
        },
        {
          text: 'Reuse',
          value: 'reuse'
        },
        {
          text: 'Duplicate',
          value: 'duplicate'
        }
      ],
      childrenAs: 'props',
      childProps: {
        tag: 'option',
        attr: {
          selected: (el, s) => el.node.value === s.action
        }
      }
    },
    Select_type: {
      background: 'none',
      color: 'currentColor',
      padding: 'X Y2',
      width: 'E+A',
      onChange: (ev, el, s, ctx) => {
        const value = ev.target.value
        if (value) {
          s.update({
            type: value
          })
        }
      },
      children: [
        {
          text: 'Component',
          value: 'components'
        },
        {
          text: 'Page',
          value: 'pages'
        },
        {
          text: 'Function',
          value: 'functions'
        },
        {
          text: 'Method',
          value: 'methods'
        },
        {
          text: 'State',
          value: 'state'
        },
        {
          text: 'Dependency',
          value: 'dependencies'
        }
      ],
      childrenAs: 'props',
      childProps: {
        tag: 'option',
        attr: {
          selected: (el, s) => el.node.value === s.action
        }
      }
    },
    FileSidebarAddNewItem: {
      Label: {
        border: 'none',
        '.hasItems': null,
        margin: '0',
        Icon: null,
        Input: {
          padding: 'Z',
          attr: {
            required: true,
            placeholder: (el, s) => 'Type ' + (
              s.type === 'pages'
                ? '/page-path'
                : s.type === 'components'
                  ? 'ComponentName'
                  : s.type === 'functions'
                    ? 'functionName'
                    : s.type === 'methods'
                      ? 'methodName'
                      : s.type === 'state'
                        ? 'state_name'
                        : s.type === 'secrets'
                          ? 'secret_name'
                          : s.type === 'dependencies'
                            ? '@dep/name'
                            : '') + '...'
          }
        },
        Flex: {
          margin: '- - - auto',
          Save: {
            extends: 'NavbarButton'
          },
          Close: null
        }
      },
      flex: 1
    }
  }
}
