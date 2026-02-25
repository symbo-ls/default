export const HeaderBreadcrumb = {
  padding: '0',
  fontSize: 'Z2',
  Button_page: {
    extends: [
      'Button',
      'DropdownParentFocus'
    ],
    theme: 'tertiary',
    gap: 'Z',
    flow: 'row-reverse',
    padding: 'Y2 Z2',
    icon: 'arrow angle down',
    color: 'title',
    fontWeight: '400',
    text: el => {
      const path = window.location.pathname.split('/')[1]
      if (['dashboard', 'governance', 'tutorials'].includes(path)) return el.call('capitalize', path)
      else if (['docs', 'developers', 'api', 'index'].includes(path)) return 'Documentation'
      else return 'Canvas'
    },
    Icon: {
      minWidth: 'A'
    },
    Dropdown: {
      ListInDropdown: {
        children: el => [{
          if: (el, s) => el.isAuthorised(),
          text: 'Dashboard',
          href: '/dashboard'
        }, {
          if: (el, s) => el.isAuthorised(),
          text: 'Canvas',
          href: el.getCanvasPathnameAnyway()
        }, {
          hide: el => !el.getRootState('email').endsWith('@symbols.app'),
          text: 'Governance',
          href: '/governance'
        }, {
          text: 'Documentation',
          href: '/developers'
        }, {
          hide: true,
          text: 'Tutorials',
          href: '/tutorials'
        }, {
          text: 'Examples',
          href: '/docs/examples'
        }, {
          text: 'Resources',
          href: '/docs/resources'
        }],
        childProps: {
          textAlign: 'start',
          padding: 'Z1 A',
          color: 'inactive',
          round: 'C1',
          theme: null,
          fontWeight: '400',
          align: 'center start',
          Text: null,
          Caption: null,
          Icon: {
            order: 2,
            margin: '- - - auto'
          },
          ':hover': {
            theme: 'field'
          },
          '.isActive': {
            theme: 'field'
          }
        },
        childrenAs: 'props',
        childExtends: [
          'Link',
          'Button'
        ]
      },
      childrenAs: 'state',
      left: '0',
      align: 'start'
    }
  },
  Button_username: {
    extends: [
      'Button',
      'Link'
    ],
    hide: true,
    theme: 'transparent',
    ':hover': {
      theme: 'tertiary'
    },
    gap: 'X2',
    href: el => '/' + el.getRootState('username'),
    flow: 'row-reverse',
    padding: 'Y2 Z2',
    text: el => el.getRootState('username')
  },
  Button_project: {
    if: (el, s) => el.isAuthorised(),
    extends: [
      'Button',
      'DropdownParentFocus'
    ],
    hide: el => !el.getRootState('appKey') || !el.getRootState('appKey').split('.').length,
    theme: 'tertiary',
    gap: 'Z',
    flow: 'row-reverse',
    padding: 'Y2 Z2',
    icon: 'arrow angle down',
    href: (el, s) => el.getCanvasPathname(),
    color: 'title',
    fontWeight: '500',
    maxWidth: 'F3',
    Text: {
      color: 'title',
      text: el => el.getRootState('appKey')?.split('.')[0],
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontWeight: 'bold',
      lineHeight: '1.15',
      padding: '- - - X',
      maxWidth: '100%'
    },
    Icon: {
      minWidth: 'A'
    },
    Dropdown: {
      childrenAs: 'state',
      left: '0',
      align: 'start',
      onChoose: async (ev, el, s, ctx, callee) => {
        if (callee.props.href && !callee.props.isCanvas) {
          await el.call('openModal', '/settings', {
            key: callee.props.href
          })
        }
      },
      ListInDropdown: {
        childProps: {
          textAlign: 'start',
          padding: 'Z1 A',
          color: 'inactive',
          round: 'C1',
          theme: null,
          fontWeight: '400',
          align: 'center start',
          Text: null,
          Caption: null,
          Icon: {
            order: 2,
            margin: '- - - auto'
          },
          ':hover': {
            theme: 'field'
          },
          '.isActive': {
            theme: 'field'
          }
        },
        childrenAs: 'props',
        children: el => [{
          extends: ['Link', 'Button'],
          text: 'Go to Canvas',
          hide: el => el.isCanvas(),
          href: el.getCanvasPathnameAnyway(),
          isCanvas: true
        }, {
          text: 'Open as URL',
          onClick: 'openInNewTab'
        }, {
          if: el => el.isAdmin(),
          text: 'Project account',
          href: '/project-account'
        }, {
          if: el => el.isAdmin(),
          text: 'Invite member',
          href: '/invite'
        }, {
          if: el => el.isEditMode(),
          text: 'Project data',
          href: '/project-data'
        }, {
          if: el => el.isAdmin(),
          text: 'Connect',
          href: '/connect'
        }, {
          text: 'Install',
          href: '/install'
        }, {
          if: el => el.isEditMode(),
          text: 'Shared libraries',
          href: '/shared-libs'
        }, {
          if: el => el.isOwner(),
          text: 'Pricing',
          href: '/pricing'
        }, {
          text: 'Settings',
          href: '/settings'
        }]
      }
    }
  }
}
