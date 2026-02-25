export const ExtensionCanvasNavbar = {
  extend: 'Navbar',
  props: {
    gap: 'A2',
    round: 'C1',
    padding: 'V Z',
    fontSize: 'Z',
    userSelect: 'none',
    theme: 'common-box'
  },
  LogoDropdown: {},
  Inspects: {
    extends: 'NavbarButtonSet',
    gap: 'X2',
    Inspect: {
      title: 'Inspect element',
      icon: 'sf inspect',
      onClick: (ev, el, s) => {
        if (window.chrome && window.chrome.runtime) {
          const extId = window.prompt(
            'What is your extension id?',
            // 'ohaibdehbmoofjegbepabbkaljahdhac',
            'lfjlkobjhaemapiegmoceekipkjgapae'
          )
          window.chrome.runtime.sendMessage(
            extId, {
              type: 'toggle_platform_mode'
            },
            (response) => {
              console.log('%creceived response', 'color: skyBlue', response)

              if ('domql' in response) {
                console.log('%cdomql received', 'color: green')

                s.update({
                  value: response.domql
                })
              }
            }
          )
        } else {
          console.error('chrome extension not installed')
        }
      }
    },
    AddToCanvasButton: {
      '!value': {
        opacity: 0.35,
        pointerEvents: 'none'
      },
      extends: 'DropdownButton',
      ignoreChildExtend: true,
      ignoreChildExtends: true,
      ignoreChildProps: true,
      Button: {
        icon: 'plus oval',
        fontWeight: 400,
        text: 'Add to canvas',
        aspectRatio: 'none',
        onClick: async (ev, el, s) => {
          await el.closeModal()

          const t = setTimeout(() => {
            el.call('openModal', '/add-component', {
              key: 'ParsedComponent',
              title: '',
              type: 'components',
              value: s.value,
              advanced: true
            })
            clearTimeut(t)
          }, 500)
        }
      },
      IconButton: {}
    },
    Edit: {
      disabled: true,
      opacity: 0.35,
      pointerEvents: 'none',
      title: 'Edit',
      icon: 'sf pencil',
      onClick: (ev, el, s) => {}
    },
    Replace: {
      disabled: true,
      opacity: 0.35,
      title: 'Replace',
      icon: 'sf replace',
      onClick: (ev, el, s) => {},
      pointerEvents: 'none'
    }
  },
  UrlAddressBar: {
    flex: 1
  },
  History: {
    extends: 'NavbarButtonSet',
    gap: 'X2',
    Undo: {
      title: 'Undo',
      icon: 'undo',
      onClick: (ev, el, s) => {
        el.sdk.undo()
      }
    },
    Redo: {
      title: 'Redo',
      icon: 'redo',
      onClick: (ev, el, s) => {
        el.sdk.redo()
      }
    },
    History: {
      title: 'History',
      icon: 'sf history',
      onClick: (ev, el, s) => {
        el.getRootState().toggle('isVersionsOpen', {
          preventUpdate: true
        })
        el.getVersionsAside()?.update()
      }
    }
  },
  Meta: {
    extends: 'NavbarButtonSet',
    gap: 'W2',
    InNewTab: {
      icon: 'sf arrow up right',
      title: 'In new tab',
      onClick: 'openInNewTab'
    },
    Share: {
      title: 'Share',
      icon: 'sf share',
      onClick: (ev, el, s) => {},
      Dropdown: {
        left: 'auto',
        right: '-A',
        ShareDropdown: {}
      },
      extends: [
        'CanvasButton',
        'IconButton',
        'DropdownParentFocus'
      ]
    }
  },
  Closing: {
    extends: 'NavbarButtonSet',
    gap: 'W2',
    InNewTab: {
      icon: 'question mark',
      title: 'Help'
    },
    Quetion: {
      title: 'Close',
      icon: 'crossmark',
      onClick: (ev, el, s) => el.closeModal()
    }
  }
}
