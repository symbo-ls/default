export const ConnectionNavbar = {
  align: 'center space-between',
  padding: '0',
  round: 'C1',
  gap: 'A',
  theme: 'canvas-card-glass',
  ':hover .avatar': {
    opacity: 0
  },
  ConnectionLabel: {
    gap: 'Y1',
    margin: '- - - A+V',
    lineHeight: 1,
    onClick: (ev, el) => {
      el.call('openInNewTab')
    },
    ':hover': {
      textDecoration: 'underline'
    },
    Circle: {
      boxSize: 'Y1',
      isActive: true,
      position: 'relative',
      isLoading: false,
      animationIterationCount: 'infinite',
      '.isLoading': {
        animation: 'blinking',
        animationDuration: 'G2'
      },
      '!isLoading': {
        animation: null
      },
      onRender: (el, s) => {
        const handler = ({
          origin
        }) => {
          if (origin === 'auto') {
            el.setProps({
              isLoading: true
            })
            setTimeout(() => el.setProps({
              isLoading: false
            }), 1000)
          }
        }
        el.sdk.rootBus.on('checkpoint:done', handler)
      }
    },
    Text: {
      maxWidth: '100%',
      text: el => el.getAppKey(),
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      padding: '- - .1em'
    },
    CopyButton: null
  },
  NavbarButtonSet: {
    padding: '0 X',
    gap: 'Y',
    VersionsButton: {
      if: el => el.sdk.hasPermission('editMode'),
      icon: 'version outline',
      title: 'Publishing and Versions',
      scrollToTop: false,
      onClick: (ev, el) => {
        el.getRootState().toggle('isVersionsOpen', {
          preventUpdate: true
        })
        el.getVersionsAside()?.update()
      }
    },
    Pub: {
      if: el => el.sdk.hasPermission('editMode'),
      icon: 'upload outline',
      title: 'Publishing and Versions',
      scrollToTop: false,
      onClick: async (ev, el) => {
        await el.call('openModal', '/publish')
      }
    },
    SettingsButton: {
      extends: 'Link',
      title: 'Settings',
      color: 'paragraph',
      icon: 'settings outline',
      isActive: el => el.getWindow('modal') === 'Settings',
      scrollToTop: false,
      onClick: async (ev, el) => {
        await el.call('openModal', '/settings', {
          key: '/settings'
        })
      }
    },
    childProps: {
      padding: 'Y1'
    }
  }
}
