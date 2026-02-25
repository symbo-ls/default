const Dropdownmorefilesmenu = {
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
      isActive: (el, s) => el.props.key === s.activeContent,
      onClick: (ev, el, s) => {
        const activeContent = el.props.key
        el.setWindow('explorer', 'explorer:' + activeContent)
        // el.setWindow('explorer', 'explorer', {
        //   forcedValue: activeContent
        // })
        // el.call('setSidebarContent', activeContent)
      },
      Icon: {
        color: 'currentColor',
        opacity: '1',
        margin: '- Y1 - -',
        fontWeight: '100'
      },
      ':hover': {
        style: {
          svg: {
            opacity: 1
          }
        }
      }
    },
    childrenAs: 'props',
    children: el => [{
      key: 'ARTBOARD_TYPES',
      text: 'Artboards',
      Icon: {
        name: 'sf components'
      }
    }, {
      key: 'FUNCTION_TYPES',
      text: 'Functions',
      Icon: {
        name: 'fnOutline'
      }
    }, {
      key: 'STATE_TYPES',
      text: 'State',
      Icon: {
        name: 'sfDocument'
      }
    }, {
      key: 'ASSETS_TYPES',
      text: 'Assets',
      Icon: {
        name: 'sfAssets'
      }
    }, {
      key: 'COLOR_TYPES',
      text: 'Colors',
      Icon: {
        name: 'sfPallete'
      }
    }, {
      key: 'RESPONSIVE_TYPES',
      text: 'Responsive',
      Icon: {
        name: 'sfResponsive'
      },
      Sup: {
        color: 'disabled',
        margin: '-Z - - X2',
        fontSize: 'Y',
        text: '(soon)'
      }
    }, {
      key: 'TYPOGRAPHY_TYPES',
      text: 'Typography',
      Icon: {
        name: 'fontFace'
      },
      Sup: {
        color: 'disabled',
        margin: '-Z - - X2',
        fontSize: 'Y',
        text: '(soon)'
      }
    }, {
      key: 'SPACING_TYPES',
      text: 'Spacing',
      Icon: {
        name: 'spaceOutlineColored'
      },
      Sup: {
        color: 'disabled',
        margin: '-Z - - X2',
        fontSize: 'Y',
        text: '(soon)'
      }
    }, {
      key: 'ICON_TYPES',
      text: 'Icons',
      Icon: {
        name: 'iconsOutlineColored'
      }
    }, {
      key: 'TRANSITION_TYPES',
      text: 'Animations',
      Icon: {
        name: 'animationsAlt'
      },
      Sup: {
        color: 'disabled',
        margin: '-Z - - X2',
        fontSize: 'Y',
        text: '(soon)'
      }
    }, {
      key: 'INTEGRATIONS_TYPES',
      text: 'Integrations',
      Icon: {
        name: 'fuse'
      }
    }]
  },
  extend: 'Flex',
  props: {
    padding: 'Z1 A',
    gap: 'A',
    flexFlow: 'y'
  }
}

export { Dropdownmorefilesmenu as 'Dropdown.MoreFilesMenu' }
