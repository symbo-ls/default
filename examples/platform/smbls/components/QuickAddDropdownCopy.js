export const QuickAddDropdownCopy = {
  state: {},
  QuickAddMenu: {
    CaptionTitle: {
      margin: '- - Z',
      Text: {
        text: 'Quick add'
      }
    },
    ListInDropdown: {
      margin: '- -Z2',
      gap: '-',
      childProps: {
        ':hover': {
          style: {
            svg: {
              opacity: 1
            }
          }
        },
        padding: 'Z Z2',
        fontSize: 'A',
        gap: 'X',
        fontWeight: '400',
        round: 'Z',
        Text: null,
        color: 'title',
        Icon: {
          color: 'currentColor',
          opacity: '1',
          margin: '0',
          fontWeight: '100'
        }
      },
      childrenAs: 'props',
      children: el => [{
        text: 'Component',
        Icon: {
          name: 'plus'
        },
        onClick: (ev, el, s) => {
          const key = el.call('findNewName', 'components', 'NewComponent', {
            autoRename: true
          })
          el.call('createItem', 'components', key)
        }
      }, {
        text: 'Page',
        Icon: {
          name: 'plus'
        },
        onClick: (ev, el, s) => {
          const key = el.call('findNewName', 'pages', '/new-page', {
            autoRename: true
          })
          el.call('createItem', 'pages', key)
        }
      }, {
        text: 'File',
        Icon: {
          name: 'plus'
        },
        onClick: (ev, el, s) => {
          el.call('openModal', '/add-file')
        }
      }]
    }
  },
  Line: {
    margin: 'A -Z2 B'
  },
  QuickAddPanel: {
    CaptionTitle: {
      margin: '- - Y2',
      Text: {
        text: 'apply action'
      }
    },
    Flex: {
      flow: 'y',
      gap: 'Z2',
      childProps: {
        width: '100%'
      },
      Select_action: {
        width: '100%'
      },
      Select_type: {
        width: '100%'
      },
      FileSidebarAddNewItem: {
        order: 2,
        margin: '-X W -',
        Label: {
          Flex: {
            margin: '- -W - -',
            order: 2,
            opacity: 1,
            Save: {
              extends: 'NavbarButton'
            },
            Close: null
          }
        }
      }
    }
  },
  props: {
    width: 'G+C',
    flow: 'y',
    gap: 'A',
    padding: 'A A1',
    textAlign: 'start'
  }
}
