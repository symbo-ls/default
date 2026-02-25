export const FilesSidebarCopy = {
  data: {},
  state: {
    activeFileSidebar: 'Local',
    activeContent: 'ARTBOARD_TYPES',
    keyword: '',
    thread: [
    ],
    images: [
    ],
    selectedOption: 0
  },
  props: {
    flexFlow: 'y',
    minHeight: 'F1',
    height: 'max-content',
    onInit: (el, s) => {
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
  ActiveContentSwitcher: {
    theme: 'common-box',
    padding: 'V',
    margin: 'X -W1 Z'
  },
  Overflow: {
    extends: 'Flex',
    flow: 'y',
    gap: 'B2',
    overflow: 'hidden auto',
    flex: 1,
    padding: '0',
    '::-moz-scrollbar': {
      hide: true
    },
    '::-webkit-scrollbar': {
      hide: true
    },
    isPaid: (el, s) => el.getRootState('tier') !== 'starter',
    '!isPaid': {
      paddingBlockEnd: 'D3'
    },
    Flex: {
      theme: 'common-box',
      round: 'A1',
      hide: (el, s) => !['ARTBOARD_TYPES'].includes(s.activeContent),
      ChooseCanvas: {
        flex: 1,
        FilesSidebarTitle: {
          theme: null,
          paddingInlineStart: 'A',
          Span: {
            ':hover': null
          }
        }
      }
    },
    SectionsList: {
      hide: (el, s) => ['AI', 'TUTORIALS'].includes(s.activeContent),
      flexFlow: 'y',
      gap: 'B2',
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
                  extend: 'Flex',
                  props: {
                    gap: 'B2',
                    flexDirection: 'column'
                  },
                  childExtend: 'FilesSidebarSection',
                  Color: {
                    state: {
                      type: 'color'
                    },
                    FilesSidebarTitle: {},
                    // FilesSidebarList: null,
                    FilesSidebarList: {
                      // margin: 'X 0 -',
                      childExtends: ['ColorTemplateRow', 'FilesSidebarListItem']
                      // childProps: {
                      //   transition: 'C opacity defaultBezier',
                      //   '.builtin': {
                      //     opacity: '0.1'
                      //   },
                      //   ':hover': {
                      //     opacity: '1'
                      //   },
                      //   Color: {
                      //     boxSize: 'auto'
                      //   }
                      // }
                    }
                  },
                  Gradient: {
                    state: {
                      type: 'gradient'
                    },
                    FilesSidebarTitle: {},
                    // FilesSidebarList: null,

                    FilesSidebarList: {
                      childExtends: ['ColorTemplateRow', 'FilesSidebarListItem']
                    }

                    // FilesSidebarGrid: {
                    //   margin: 'X 0 -',
                    //   childExtends: 'ColorTemplate',
                    //   childProps: {
                    //     Color: {
                    //       boxSize: 'auto'
                    //     }
                    //   }
                    // }
                  },
                  SemanticColor: {
                    state: {
                      type: 'semantic_color'
                    },
                    FilesSidebarTitle: {},
                    FilesSidebarList: {
                      childExtends: [
                        'SemanticColorTemplateRow',
                        'FilesSidebarListItem'
                      ]
                    }
                    // FilesSidebarList: null,
                    // FilesSidebarGrid: {
                    //   margin: 'X 0 -',
                    //   columns: 'repeat(3, 1fr)',
                    //   childExtends: 'SemanticColorTemplate',
                    //   childProps: {
                    //     transition: 'C opacity defaultBezier',
                    //     ':hover': {
                    //       opacity: '1'
                    //     }
                    //   }
                    // }
                  },
                  GlobalTheme: {
                    state: {
                      type: 'global_theme'
                    },
                    FilesSidebarTitle: {},
                    FilesSidebarList: {
                      childExtends: [
                        'GlobalThemeTemplateRow',
                        'FilesSidebarListItem'
                      ]
                    }
                  },
                  Theme: {
                    state: {
                      type: 'theme'
                    },
                    FilesSidebarTitle: {
                      Span: {
                        Text: {
                          text: 'themes'
                        }
                      }
                    },
                    FilesSidebarList: {
                      // margin: 'X 0 -',
                      columns: 'repeat(3, 1fr)',
                      childProps: {
                        minWidth: 'none',
                        round: 'C1'
                      },
                      childExtends: {
                        extend: ['ThemeTemplateRow', 'FilesSidebarListItem']
                      }
                    }

                    // FilesSidebarGrid: {
                    //   margin: 'X 0 -',
                    //   columns: 'repeat(3, 1fr)',
                    //   childProps: { minWidth: 'none', round: 'C1' },
                    //   childExtends: {
                    //     extend: 'ThemeTemplate',
                    //     Flex: null,
                    //     Flex_content: {
                    //       childProps: {
                    //         Color: {
                    //           padding: 'Y2 Z1',
                    //           Icon: { margin: 'auto' }
                    //         }
                    //       }
                    //     }
                    //   }
                    // }
                  }
                }
              ]
            case 'typography':
              return [
                ...initial,
                {
                  extend: 'Flex',
                  props: {
                    gap: 'B',
                    flexDirection: 'column'
                  },
                  childExtend: 'FilesSidebarSection',
                  Typography: {
                    props: {
                      gap: '0'
                    },
                    state: {
                      type: 'typography'
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
                      childExtends: [
                        'TypographyTemplate',
                        'FilesSidebarListItem'
                      ]
                    }
                  },
                  Fonts: {
                    state: {
                      type: 'font'
                    },
                    FilesSidebarTitle: {},
                    // FilesSidebarGrid: null,
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
                  },
                  FontFamily: {
                    state: {
                      type: 'font_family'
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
                    // FilesSidebarList: null,
                    // FilesSidebarGrid: {
                    //   margin: 'X 0 -',
                    //   columns: 'repeat(1, 1fr)',
                    //   childExtends: ['FontFamilyObject'],
                    //   childProps: {
                    //     // eslint-disable-next-line no-shadow
                    //     href: (el, s) =>
                    //       `${window.location.pathname}/edit-font-family/${s.key}`
                    //   }
                    // }
                  },
                  TextStyles: {
                    props: {
                      gap: '0'
                    },
                    state: {
                      type: 'templates'
                    },
                    FilesSidebarTitle: {
                      Span: {
                        text: 'Text Styles',
                        Text: null
                      }
                    },
                    FilesSidebarList: {
                      // display: 'flex',
                      // flexDirection: 'column',
                      // gap: '0',
                      // margin: '-',
                      childExtends: [
                        'TextStylesTemplate',
                        'FilesSidebarListItem'
                      ]
                      // childExtends: 'TextStylesTemplate'
                    }
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
    },
    AISidebarPanel: {
      flex: 1
    },
    TutorialsPanel: {}
  }
}
