const Dropdownenvs = {
  Envs: {
    extends: 'Flex',
    flow: 'y',
    gap: 'A',
    CaptionTitle: {
      Text: {
        text: 'Environments'
      }
    },
    Flex: {
      gap: 'A',
      flow: 'y',
      margin: '- -Z2',
      childExtends: 'EnvItem',
      Prod: {
        Hgroup: {
          H: {
            text: 'Production'
          },
          P: {
            text: 'Specify production channel'
          }
        }
      },
      Test: {
        Hgroup: {
          H: {
            text: 'Test'
          },
          P: {
            text: 'Specify staging channel'
          }
        }
      },
      Dev: {
        extends: [
          'CanvasButton',
          'EnvItem'
        ],
        isActive: true,
        Circle: {
          isActive: true
        },
        Hgroup: {
          H: {
            text: 'Development'
          },
          P: {
            text: 'Default - set to latest'
          }
        },
        Buttons: {
          hide: false
        },
        Upgrade: null
      }
    }
  },
  Line: {
    margin: '-A'
  },
  EnvItem_Local: {
    Hgroup: {
      H: {
        text: 'Local'
      },
      P: {
        text: el => 'localhost:1234'
      }
    },
    Upgrade: null,
    Connect: {
      extends: 'Link',
      color: 'title',
      text: 'Connect',
      margin: '- - - auto',
      alignSelf: 'start',
      whiteSpace: 'nowrap',
      fontSize: 'Z2',
      lineHeight: 1,
      ':hover': {
        textDecoration: 'underline'
      },
      onClick: (f, el, st) => {
        el.call('openModal', '/settings', {
          key: '/connect'
        })
      }
    },
    margin: '- -Z2'
  },
  Line_2: {
    margin: '-A'
  },
  Domains: {
    extends: 'Flex',
    flow: 'y',
    gap: 'A',
    CaptionTitle: {
      Text: {
        text: 'Domains'
      }
    },
    Flex: {
      gap: 'A',
      flow: 'y',
      margin: '- -Z2',
      childExtends: 'DomainItem',
      Custom: {
        Hgroup: {
          H: {
            text: 'Custom domain'
          },
          P: {
            text: 'Connect any domain to your app'
          }
        }
      },
      Lookup: {
        Hgroup: {
          H: {
            text: 'Find your domain'
          },
          P: {
            text: 'Connect to a new domain'
          }
        },
        Upgrade: null,
        Icon: {
          name: 'sf search'
        }
      }
    }
  },
  extend: 'Flex',
  props: {
    padding: 'Z1 A',
    flow: 'y',
    gap: 'C',
    textAlign: 'start',
    width: 'G1'
  }
}

export { Dropdownenvs as 'Dropdown.Envs' }
