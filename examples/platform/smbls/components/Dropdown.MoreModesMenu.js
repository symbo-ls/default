const Dropdownmoremodesmenu = {
  ListInDropdown_themes: {
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
      text: 'Light mode',
      isActive: (el) => el.getRootState('sceneTheme') === 'light',
      Icon: {
        theme: 'sepia',
        name: (el, s) => el.getRootState('sceneTheme') === 'light' ? 'sun' : 'sun outline',
      },
      onClick: (ev, el, s) => {
        const key = 'light'
        el.getRootState().update({
          globalTheme: key,
          sceneTheme: key
        })
        el.getRoot().call('router', window.location.pathname)
        el.getRoot().call('setCookie', 'sceneTheme', key)
        el.getRoot().call('setCookie', 'globalTheme', key)
      },
    }, {
      text: 'Dark mode',
      isActive: (el) => el.getRootState('sceneTheme') === 'dark',
      Icon: {
        theme: 'sepia',
        name: (el, s) => el.getRootState('sceneTheme') === 'dark' ? 'moon' : 'moon outline',
      },
      onClick: (ev, el, s) => {
        const key = 'dark'
        el.getRootState().update({
          globalTheme: key,
          sceneTheme: key
        })
        el.getRoot().call('router', window.location.pathname)
        el.getRoot().call('setCookie', 'sceneTheme', key)
        el.getRoot().call('setCookie', 'globalTheme', key)
      },
    }],
  },
  Line: {
    margin: '0 -Z2',
  },
  More: {
    CaptionTitle: {
      margin: 'X - Y2',
      Text: {
        text: 'More canvas modes',
      },
    },
    ListInDropdown_modes: {
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
        text: 'Code mode',
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
        text: 'Preview mode',
        Icon: {
          name: 'sf eye'
        },
        Sup: {
          color: 'disabled',
          margin: '-Z - - X2',
          fontSize: 'Y',
          text: '(soon)'
        }
      }, {
        text: 'Comments mode',
        Icon: {
          name: 'chat'
        },
        Sup: {
          color: 'disabled',
          margin: '-Z - - X2',
          fontSize: 'Y',
          text: '(soon)'
        }
      }],
    },
  },
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: 'A',
    padding: 'Z1 A',
  },
};

export { Dropdownmoremodesmenu as 'Dropdown.MoreModesMenu' }