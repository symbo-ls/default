const Dropdownshare = {
  state: {},
  ShareSection: {
    extends: 'Flex',
    flow: 'y',
    gap: 'A',
    CaptionTitle: {
      Text: {
        text: 'Share'
      }
    },
    DomainItem_Env: {
      margin: '- -Z2',
      Upgrade: null,
      Icon: null,
      Hgroup: {
        H: {
          text: 'Environment'
        },
        P: {
          text: 'Inherint or switch while sharing'
        }
      },
      Select: {
        padding: 'X Y2',
        margin: '-W -Y2 - auto',
        background: 'none',
        color: 'currentColor',
        width: 'D3',
        onChange: (ev, el, s, ctx) => {
          const value = ev.target.value
          if (value) {
            s.update({
              env: value
            })
          }
        },
        childrenAs: 'props',
        childProps: {
          tag: 'option',
          attr: {
            selected: (el, s) => el.node.value === s.action
          }
        },
        children: [
          {
            text: 'Current'
          },
          {
            text: 'Development'
          },
          {
            text: 'Staging'
          },
          {
            text: 'Production'
          }
        ]
      },
      align: 'start'
    },
    Label: {
      extends: 'Flex',
      align: 'start',
      gap: 'A',
      Hgroup: {
        H: {
          tag: 'p',
          text: 'Selection share'
        },
        P: {
          fontSize: 'Y2',
          color: 'paragraph',
          text: 'Link to selected element on canvas'
        },
        gap: 'X'
      },
      Toggle: {
        margin: '- - - auto',
        fontSize: 'Y2',
        Input: {
          onChange: (ev, el, s) => s.update({
            isSelcetedActive: el.node.checked
          })
        }
      }
    },
    Flex: {
      gap: 'A',
      flow: 'y',
      margin: '- -Z2',
      childExtends: 'DomainItem',
      childProps: {
        onInit: (el, s) => {
          s.path = el.getCanvasPathname()
        },
        onBeforeUpdate: (_, el, s) => {
          const isSelected = s.parent.isSelcetedActive ? el.getSelectedKey() : ''
          if (isSelected) {
            s.selected = isSelected.startsWith('/') ? isSelected : '?selected=' + el.getSelectedKey()
          } else {
            s.selected = ''
          }

          if (s.parent.env) {
            const prefix = (isSelected ? '&' : '?') + 'env='
            s.env = {
              Current: prefix + 'dev',
              Development: '',
              Staging: prefix + 'staging',
              Production: prefix + 'production'
            }[s.parent.env]
          }
        },
        Icon: null,
        Hgroup: {
          H: {
            text: '{{ title }}'
          },
          P: {
            text: el => '{{ domain }}{{ path }}{{ selected }}{{ env }}'
          }
        },
        Upgrade: null,
        Copy: {
          extends: [
            'CanvasButton',
            'IconButton'
          ],
          padding: 'Y2',
          margin: '-Y - - auto',
          icon: 'copy outline',
          value: '{{ env }}{{ domain }}{{ path }}{{ selection }}',
          Icon: {
            order: 2,
            color: 'blue'
          }
        },
        Open: {
          extends: [
            'CanvasButton',
            'Link',
            'IconButton'
          ],
          padding: 'Y2',
          margin: '-Y -Y2 -',
          icon: 'arrow up right',
          href: 'https://{{ domain }}{{ path }}{{ selection }}',
          target: '_blank'
        }
      },
      childrenAs: 'state',
      children: [
        {
          title: 'Preview link',
          domain: 'preview.symbo.ls'
        },
        {
          title: 'Canvas link',
          domain: 'symbols.app'
        }
      ]
    }
  },
  Line: {
    margin: '-Z2'
  },
  SharingPermissions: {},
  extend: 'Flex',
  props: {
    width: 'G1',
    flow: 'y',
    gap: 'C',
    padding: 'Z1 A',
    textAlign: 'start'
  }
}

export { Dropdownshare as 'Dropdown.Share' }
