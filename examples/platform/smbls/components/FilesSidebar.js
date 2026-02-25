export const FilesSidebar = {
  data: {},
  state: {
    activeFileSidebar: 'Local',
    activeContent: 'ARTBOARD_TYPES'
  },
  props: {
    flexFlow: 'y',
    minHeight: 'F1',
    height: 'max-content',
    onInit: (el, s, ctx, opts) => {
      const activeContent = el.getWindow('explorer')
      if (!el.call('isString', activeContent)) return
      if (activeContent.includes(':')) {
        s.activeContent = activeContent.split(':')[1]
        return
      }
      const activeContentCookie = el.call(
        'getCookie',
        el.getAppKey() + '_activeContent'
      )
      if (activeContentCookie) s.activeContent = activeContentCookie
    },
    ':hover': {
      '& header > a:first-child': {
        opacity: 1
      }
    }
  },
  ExplorerSwitcher: {
    padding: 'V',
    margin: 'W2 -W1 A1'
  },
  Overflow: {
    extends: 'Flex',
    flow: 'y',
    gap: 'B2',
    overflow: 'hidden auto',
    flex: 1,
    lazyLoad: true,
    round: 'A',
    '::-moz-scrollbar': {
      hide: true
    },
    '::-webkit-scrollbar': {
      hide: true
    },
    SectionsList: {
      flexFlow: 'y',
      gap: 'A2',
      padding: '- Y1',
      childProps: {
        ':first-child .hr': {
          hide: true
        }
      },
      childrenAs: 'element',
      children: (el, s) => {
        const activeType =
            el.parent.props.activeType || el.getWindow('explorer')
        const activeContent = s.activeContent

        if (!activeType) {
          return []
        }

        const types = el.call('getActiveSidebarTypes', activeContent)
        return types.reduce((initial, type) => {
          if (
          // !s.search || //&&
          // el.call('isString', activeType) &&
          // activeType !== type) ||
            !el.call('checkFeatureByPackage', type)
          ) {
            return initial
          }

          switch (type) {
            case 'docs':
              return [
                ...initial,
                {
                  extend: 'FilesSidebarSection',
                  state: {
                    type
                  },
                  FilesSidebarTitle: {
                    Span: {
                      Text: {
                        text: 'Learning centre'
                      }
                    }
                  },
                  // FilesSidebarList: null,
                  FilesSidebarList: {
                    FileSidebarAddNewItem: null,
                    childExtends: 'FilesSidebarListItem',
                    // childExtends: 'CaseTemplate',
                    childProps: {
                      isActive: false,
                      isCurrent: false,
                      onClick: (ev, el, s) => {
                        console.log('open docs')
                      }
                    },
                    childrenAs: 'props'
                  }
                }
              ]
            case 'color':
              return [
                ...initial,
                {
                  extend: 'FilesSidebarSection',
                  state: {
                    type
                  },
                  FilesSidebarTitle: {},
                  FilesSidebarList: {
                    childExtends: ['ColorTemplateRow', 'FilesSidebarListItem']
                  }
                }
              ]
            case 'gradient':
              return [
                ...initial,
                {
                  extend: 'FilesSidebarSection',
                  state: {
                    type
                  },
                  FilesSidebarTitle: {},
                  FilesSidebarList: {
                    childExtends: ['ColorTemplateRow', 'FilesSidebarListItem']
                  }
                }
              ]
            case 'semantic_color':
              return [
                ...initial,
                {
                  extend: 'FilesSidebarSection',
                  state: {
                    type
                  },
                  FilesSidebarTitle: {},
                  FilesSidebarList: {
                    childExtends: [
                      'SemanticColorTemplateRow',
                      'FilesSidebarListItem'
                    ]
                  }
                }
              ]
            case 'global_theme':
              return [
                ...initial,
                {
                  extend: 'FilesSidebarSection',
                  state: {
                    type
                  },
                  FilesSidebarTitle: {},
                  FilesSidebarList: {
                    childExtends: [
                      'GlobalThemeTemplateRow',
                      'FilesSidebarListItem'
                    ]
                  }
                }
              ]
            case 'theme':
              return [
                ...initial,
                {
                  extend: 'FilesSidebarSection',
                  state: {
                    type
                  },
                  FilesSidebarTitle: {
                    Span: {
                      Text: {
                        text: 'themes'
                      }
                    }
                  },
                  FilesSidebarList: {
                    columns: 'repeat(3, 1fr)',
                    childProps: {
                      minWidth: 'none',
                      round: 'C1'
                    },
                    childExtends: {
                      extend: ['ThemeTemplateRow', 'FilesSidebarListItem']
                    }
                  }
                }
              ]
            case 'typography':
              return [
                ...initial,
                {
                  extend: 'FilesSidebarSection',
                  state: {
                    type
                  },
                  FilesSidebarTitle: {},
                  FileSidebarAddNewItem: {
                    border: 'none!important',
                    onSubmit: (ev, submitEl) => {
                      ev.preventDefault()
                      submitEl.call('createTypography')
                      submitEl.Label.Input.node.value = ''
                      return s.update({
                        key: null,
                        err: null,
                        adding: false
                      })
                    },
                    Label: {
                      Icon: {},
                      Input: {
                        onInput: null
                      }
                    }
                  },
                  FilesSidebarList: {
                    gap: 'Z1',
                    childExtends: ['TypographyTemplate', 'FilesSidebarListItem']
                  }
                }
              ]
            case 'font':
              return [
                ...initial,
                {
                  extend: 'FilesSidebarSection',
                  state: {
                    type
                  },
                  FilesSidebarTitle: {},
                  FilesSidebarList: {
                    childExtends: ['FontItemRow', 'FilesSidebarListItem'],
                    childProps: {
                      onClick: async (ev, el, s) => {
                        ev.preventDefault()
                        if (
                          el.lookup('Overflow')?.state.activeFileSidebar ===
                            'Local'
                        ) {
                          await el.call('openModal', '/edit-font', {
                            key: s.key
                          })
                        }
                      }
                    }
                  }
                }
              ]
            case 'font_family':
              return [
                ...initial,
                {
                  extend: 'FilesSidebarSection',
                  state: {
                    type
                  },
                  FilesSidebarTitle: {
                    Span: {
                      text: 'Font Families',
                      Text: null
                    }
                  },
                  FilesSidebarList: {
                    childExtends: ['FontFamilyObject', 'FilesSidebarListItem']
                  }
                }
              ]
            case 'type_templates':
              return [
                ...initial,
                {
                  extend: 'FilesSidebarSection',
                  state: {
                    type
                  },
                  FilesSidebarTitle: {
                    Span: {
                      text: 'Text Styles',
                      Text: null
                    }
                  },
                  FilesSidebarList: {
                    childExtends: ['TextStylesTemplate', 'FilesSidebarListItem']
                  }
                }
              ]
            case 'spacing':
              return [
                ...initial,
                {
                  extend: 'FilesSidebarSection',
                  props: {
                    gap: '0'
                  },
                  state: {
                    type: 'spacing'
                  },
                  FilesSidebarTitle: {},
                  FileSidebarAddNewItem: {
                    border: 'none!important',
                    onSubmit: (ev, submitEl) => {
                      ev.preventDefault()
                      submitEl.call('createSpacing')
                      return s.update({
                        key: null,
                        err: null,
                        adding: false
                      })
                    }
                  },
                  FilesSidebarList: {
                    // display: 'flex',
                    // flexDirection: 'column',
                    gap: '0',
                    // margin: '-',
                    Default: {
                      state: el.filterKeys(el.getDesignSystem('SPACING'))
                    },
                    childExtends: ['SpacingTemplateRow', 'FilesSidebarListItem']
                    // childExtends: 'SpacingTemplate'
                  }
                }
              ]
            case 'icons':
              return [
                ...initial,
                {
                  extend: 'FilesSidebarSection',
                  state: {
                    type
                  },
                  FilesSidebarTitle: {},
                  // FilesSidebarList: null,
                  FilesSidebarList: {
                    // columns: 'repeat(7, 1fr)',
                    // gap: 'W',
                    // margin: '- -Y',
                    // style: {
                    //   svg: {
                    //     // width: '100%',
                    //     // height: '100%',
                    //     display: 'inline-block'
                    //     // fill: 'currentColor',
                    //     // '*': {
                    //     //   fill: 'currentColor'
                    //     // }
                    //   }
                    // },
                    FileSidebarAddNewItem: null,
                    childExtends: 'IconTemplateRow'
                    // childExtends: ['IconTemplateRow', 'FilesSidebarListItem']
                    // {
                    //   extend: ['IconTemplateRow', 'FilesSidebarListItem']
                    // html: () =>
                    //   s.value?.replace('<svg', '<svg viewBox="0 0 24 24"')
                    // props: {
                    //   padding: 'Y2',
                    //   ':hover': {
                    //     '> svg': {
                    //       fontSize: '1em'
                    //     }
                    //   }
                    // }
                    // }
                  }
                }
              ]
            case 'shape':
              return [
                ...initial,
                {
                  extend: 'FilesSidebarSection',
                  state: {
                    type
                  },
                  FilesSidebarTitle: {},
                  FilesSidebarList: null,
                  FilesSidebarGrid: {
                    // extends: ['Grid', Shapes.CommonSection.Grid],
                    // gap: 'Z1',
                    // columns: 'repeat(6, 1fr)',
                    // childProps: {
                    //   background: 'none',
                    //   padding: 'W2',
                    //   _shape: { '&': { boxSize: 'A1' } }
                    // }
                  }
                }
              ]
            case 'cases':
              return [
                ...initial,
                {
                  extend: 'FilesSidebarSection',
                  state: {
                    type
                  },
                  FilesSidebarTitle: {},
                  // FilesSidebarList: null,
                  FilesSidebarList: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'A',
                    FileSidebarAddNewItem: null,
                    childExtends: ['CaseTemplateRow', 'FilesSidebarListItem']
                    // childExtends: 'CaseTemplate',
                    // childProps: {
                    //   zIndex: null,
                    //   padding: null,
                    //   theme: null,
                    //   Code: { theme: 'secondary' },
                    //   Title: null
                    // }
                  }
                }
              ]
            case 'media':
              return [
                ...initial,
                {
                  extend: 'FilesSidebarSection',
                  state: {
                    type
                  },
                  FilesSidebarTitle: {},
                  FilesSidebarList: {
                    childExtends: ['MediaTemplateRow', 'FilesSidebarListItem']
                  }
                }
              ]
            case 'files':
              return [
                ...initial,
                {
                  extend: 'FilesSidebarSection',
                  state: {
                    type
                  },
                  FilesSidebarTitle: {},
                  FileSidebarAddNewItem: null,
                  FilesSidebarList: {
                    childProps: {
                      flow: 'row'
                    }
                  }
                }
              ]
            default:
              return [
                ...initial,
                {
                  extend: 'FilesSidebarSection',
                  state: {
                    type
                  }
                }
              ]
          }
        }, [])
      },
      onBeforeUpdate: (_, el, s, ctx, opts) =>
        Boolean(el.getWindow('explorer')) && !opts.layerClick
    }
  }
}
