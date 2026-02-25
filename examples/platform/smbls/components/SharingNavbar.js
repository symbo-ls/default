export const SharingNavbar = {
  extend: 'NavbarButtonSet',
  props: {
    gap: 'W2'
  },
  PreviewButton: {
    extends: 'DropdownButton',
    ignoreChildExtend: true,
    ignoreChildExtends: true,
    ignoreChildProps: true,
    Button: {
      icon: 'play oval',
      text: null,
      aspectRatio: 'none',
      onClick: (ev, el) => {
        el.openModal('/browser-preview')
      },
      Icon: {
        color: 'blue'
      }
    },
    IconButton: {
      DropdownParentFocus: {
        position: 'absolute',
        Dropdown: {
          left: '-D2',
          onClick: () => {},
          PreviewModesMenu: {}
        },
        inset: '0'
      }
    }
  },
  InNewTab: {
    icon: 'sf arrow up right',
    title: 'In new tab',
    onClick: 'openInNewTab'
  },
  Share: {
    title: 'Share',
    icon: 'sf share',
    Dropdown: {
      left: 'auto',
      right: '-A',
      onClick: (ev, el, s) => {},
      'Dropdown.Share': {}
    },
    extends: [
      'CanvasButton',
      'IconButton',
      'DropdownParentFocus'
    ]
  }
}
