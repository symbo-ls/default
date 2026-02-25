export const SharingPermissions = {
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: 'A'
  },
  CaptionTitle: {
    Text: {
      text: 'Access Permissions'
    }
  },
  Flex: {
    gap: 'A',
    flow: 'y',
    margin: '- -Z2',
    childExtends: 'DomainItem',
    childProps: {
      align: 'start',
      Icon: null,
      Upgrade: null,
      Hgroup: {},
      Select: {
        padding: 'X Y2',
        margin: '-W -Y2 - auto',
        background: 'none',
        color: 'currentColor',
        width: 'D3+Z2',
        onChange: (ev, el, s, ctx) => {
          const value = ev.target.value
          if (value) {
            s.update({
              action: value
            })
          }
        },
        childrenAs: 'props',
        childProps: {
          tag: 'option',
          attr: {
            selected: (el, s) => el.node.value === s.action
          }
        }
      }
    },
    Guests: {
      Hgroup: {
        H: {
          text: 'Preview visibility'
        },
        P: {
          text: 'Control access to the preview links'
        }
      },
      Select: {
        children: [
          {
            text: 'Public'
          },
          {
            text: 'Password protected'
          },
          {
            text: 'Private'
          }
        ]
      }
    },
    Editors: {
      Hgroup: {
        H: {
          text: 'Canvas access'
        },
        P: {
          text: 'Control access to the canvas'
        }
      },
      Select: {
        children: [
          {
            text: 'Public'
          },
          {
            text: 'Unlisted'
          },
          {
            text: 'Private'
          }
        ]
      }
    }
  }
}
