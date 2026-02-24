export const EditorTools = {
  extends: 'NavbarButtonSet',
  gap: 'W',
  childProps: {
    '.isDisabled': {
      opacity: '.35',
      pointerEvents: 'none',
    },
  },
  TextNavbarButtonDropdown: {
    ignoreChildProps: true,
    ignoreChildExtend: true,
    ignoreChildExtends: true,
    isActive: null,
    margin: '- U - -',
    Button: {
      icon: (el) => {
        const preffered = el.getCanvasScope('preferredEditor')
        const map = {
          'editor': 'sf pencil',
          'code': 'code',
          'sidebar': 'sidebarLeft'
        }
        return map[preffered] || map['editor']
      },
      text: null,
      lineHeight: 0.9,
      align: 'end',
      onClick: (ev, el) => {
        const preferredEditor = el.getCanvasScope('preferredEditor')

        if (!preferredEditor || preferredEditor === 'editor') {
          const editorActive = el.getCanvasScope('editorActive')
          el.setCanvasScope({
            editorActive: !editorActive
          })
          return
        }

        if (preferredEditor === 'code') {
          if (el.getWindow('componentEditor') === 'code') {
            el.closeWindow('componentEditor')
          } else {
            el.setWindow('componentEditor', 'code')
          }
        }
      },
    },
    IconButton: {
      DropdownParentFocus: {
        Dropdown: {
          EditInNavbarMenu: {
            fontSize: 'A2',
          },
        },
      },
    },
  },
  ShareBtn: {
    hide: true,
    icon: 'share outline',
    title: 'Share',
    isActive: (el) => el.getWindow('componentEditor') === 'share',
    onClick: (ev, el) => {
      if (el.getWindow('componentEditor') === 'share') {
        el.closeWindow('componentEditor')
      } else {
        el.setWindow('componentEditor', 'share')
      }
      el.parent.update()
    },
  },
};