const Dropdownquickadd = {
  state: {},
  QuickAddMenu: {
    CaptionTitle: {
      margin: '- - Z',
      Text: {
        text: 'Add blank',
      },
    },
    ListInDropdown: {
      margin: '- -Z2',
      gap: '-',
      childProps: {
        ':hover': {
          style: {
            svg: {
              opacity: 1,
            },
          },
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
          fontWeight: '100',
        },
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
      }],
    },
  },
  Line: {
    margin: '- -Z2 X',
  },
  MoreInsertMenu: {},
  Line_2: {
    margin: '- -Z2 Z',
  },
  QuickAddPanel: {
    CaptionTitle: {
      margin: '- - Y2',
      Text: {
        text: 'apply action',
      },
    },
    Flex: {
      flow: 'y',
      gap: 'Z2',
      childProps: {
        width: '100%',
      },
      Select_action: {
        width: '100%',
      },
      Select_type: {
        width: '100%',
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
              extends: 'NavbarButton',
            },
            Close: null,
          },
        },
      },
    },
  },
  Line_3: {
    margin: '- -Z2 Z',
  },
  ComingSoonMenu: {
    CaptionTitle_soon: {
      Text: {
        text: 'Coming soon',
      },
    },
    ListInDropdown: {
      margin: '- -Z2',
      gap: '0',
      childProps: {
        padding: 'Z Z2',
        fontSize: 'A',
        round: 'Z',
        fontWeight: '400',
        color: 'title',
        Text: null,
        Icon: {
          color: 'currentColor',
          opacity: '1',
          margin: '- Y1 - -',
          fontWeight: '100',
        },
        ':hover': {
          style: {
            svg: {
              opacity: 1,
            },
          },
        },
      },
      childrenAs: 'props',
      children: el => [{
        text: 'Marketplace',
        Icon: {
          name: 'plus'
        },
        onClick: (ev, el) => {
          el.setWindow('explorer', 'insert')
        }
      }, {
        text: 'Integrations',
        Icon: {
          name: 'fuse'
        },
        onClick: (ev, el) => {
          el.setWindow('explorer', 'insert:integrations')
        }
      }, {
        text: 'Figma',
        Icon: {
          name: 'figma'
        },
        Sup: {
          margin: '-Z - - X2',
          fontSize: 'Y',
          text: '(soon)'
        },
        onClick: (ev, el) => {
          el.setWindow('explorer', 'insert:figma')
        }
      }, {
        text: 'Icons',
        Icon: {
          name: 'icons'
        },
        Sup: {
          margin: '-Z - - X2',
          fontSize: 'Y',
          text: '(soon)'
        },
        onClick: (ev, el) => {
          el.setWindow('explorer', 'insert:icons')
        }
      }, {
        text: 'Fonts',
        Icon: {
          name: 'fontFace'
        },
        Sup: {
          margin: '-Z - - X2',
          fontSize: 'Y',
          text: '(soon)'
        },
        onClick: (ev, el) => {
          el.setWindow('explorer', 'insert:fonts')
        }
      }],
    },
  },
  extend: 'Flex',
  props: {
    width: 'G+C',
    flow: 'y',
    gap: 'A',
    padding: 'A A1',
    textAlign: 'start',
  },
};

export { Dropdownquickadd as 'Dropdown.QuickAdd' }