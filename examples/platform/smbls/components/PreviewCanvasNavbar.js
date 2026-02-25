export const PreviewCanvasNavbar = {
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
    Undo: {
      title: 'Select',
      icon: 'sfCursor'
    }
  },
  ComponentAddressBar: {
    flex: 1
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
        disabled: true,
        text: 'Environment'
      },
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
  Meta: {
    extends: 'NavbarButtonSet',
    gap: 'W2',
    InNewTab: {
      icon: 'sf arrow up right',
      title: 'In new tab',
      onClick: (ev, el, s) => {
        window.open(s.url)
      },
      '!url': {
        opacity: '.35',
        pointerEvents: 'none'
      }
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
      '!url': {
        opacity: '.35',
        pointerEvents: 'none'
      },
      extends: [
        'CanvasButton',
        'IconButton',
        'DropdownParentFocus'
      ]
    },
    Close: {
      title: 'Close',
      icon: 'crossmark',
      onClick: (ev, el, s) => el.closeModal()
    }
  }
}
