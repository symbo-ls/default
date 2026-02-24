const Dropdownmoretoolsmenu = {
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
      text: 'Get started',
      Icon: {
        name: 'intOutline'
      },
      onClick: (ev, el) => {
        el.setWindow('explorer', 'onboarding')
        el.parent.update()
      }
    }, {
      text: 'View',
      hide: true,
      Icon: {
        name: 'eye'
      },
      onClick: (ev, el) => {
        const active = 'view'
        const isSelected = active === el.getWindow('explorer')
        const hasSelected = el.getWindow('explorer')?.startsWith(active)
        const val = isSelected ? null : active
        el.setWindow('explorer', val)
        el.parent.update()
      }
    }, {
      text: 'Examples',
      Icon: {
        name: 'ratingFrame'
      },
      onClick: (ev, el) => {
        el.setWindow('docs', '/examples')
      }
    }, {
      text: 'Learn using',
      Icon: {
        name: 'learn'
      },
      onClick: (ev, el) => {
        const active = 'learn'
        const isSelected = active === el.getWindow('explorer')
        const hasSelected = el.getWindow('explorer')?.startsWith(active)
        const val = isSelected ? null : active
        el.setWindow('explorer', val)
        el.parent.update()
      }
    }],
  },
  DashboardNav: {
    CaptionTitle: {
      margin: 'X - X2',
      Text: {
        text: 'Tools',
      },
    },
    ListInDropdown: {
      margin: '- -Z2',
      gap: '0',
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
        fontWeight: '400',
        round: 'Z',
        Text: null,
        color: 'title',
        Icon: {
          color: 'currentColor',
          opacity: '1',
          margin: '- Y1 - -',
          fontWeight: '100',
        },
      },
      childrenAs: 'props',
      children: el => [{
        text: 'Project code',
        Icon: {
          name: 'code'
        },
        onClick: (ev, el) => {
          el.call('openModal', '/project-code', {
            animationProps: {
              animation: 'fadeIn'
            }
          })
        }
      }, {
        text: 'Playground',
        hide: true,
        Icon: {
          name: 'play oval'
        },
      }, {
        text: 'Props reference',
        Icon: {
          name: 'code'
        },
        onClick: (ev, el) => {
          el.setWindow('docs', '/props')
        }
      }, {
        text: 'Compiler tools',
        Icon: {
          name: 'code'
        },
        onClick: (ev, el) => {
          el.call('openModal', '/compile', {
            animationProps: {
              animation: 'fadeIn'
            }
          })
        }
      }],
    },
  },
  GeneralNav: {
    CaptionTitle: {
      margin: 'X - X2',
      Text: {
        text: 'More',
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
        Icon: null,
        ':hover': {
          style: {
            svg: {
              opacity: 1,
            },
          },
        },
        Text: null,
        color: 'title',
      },
      childrenAs: 'props',
      children: el => [{
        text: 'Intro to Symbols',
        onClick: (ev, el) => {
          el.setWindow('explorer', 'onboarding')
        }
      }, {
        text: 'Documentation',
        onClick: (ev, el) => {
          el.setWindow('docs', '/developers')
        }
      }, {
        text: 'Support',
        onClick: (ev, el) => {
          el.setWindow('docs', '/resources')
        }
      }, {
        text: 'Contribution',
        onClick: (ev, el) => {
          el.setWindow('docs', '/symbols-developer')
        }
      }],
    },
  },
  extend: 'Flex',
  props: {
    padding: 'Z1 A',
    gap: 'A',
    flexFlow: 'y',
  },
};

export { Dropdownmoretoolsmenu as 'Dropdown.MoreToolsMenu' }