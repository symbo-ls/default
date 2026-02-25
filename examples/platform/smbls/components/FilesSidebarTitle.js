export const FilesSidebarTitle = {
  IconButton_arrow: {},
  Span: {},
  'NavbarButton.add': {
    if: el => el.sdk.hasPermission('editMode'),
    transition: 'A defaultBezier opacity',
    color: 'disabled',
    title: 'Add new',
    icon: 'plus',
    fontSize: 'Z2',
    allowedAddNewDropdown: [
      'components',
      'pages',
      'functions',
      'methods',
      'snippets',
      'typography',
      'state'
    ],
    allowedAddNewPanel: [
      'semantic_color',
      'color',
      'theme',
      'media',
      'icons',
      'media',
      'spacing'
    ],
    allowedAddModal: [
      'font',
      'font_family',
      'templates',
      'cases',
      'dependencies',
      'files'
    ],
    hide: (el, s) => {
      const activeFileSidebar = el.call('getActiveDynamicIslandCategory')
      return (
        !el.sdk.hasPermission('editMode') ||
        activeFileSidebar !== 'Local' ||
        (!el.props.allowedAddNewDropdown.includes(s.type) &&
          !el.props.allowedAddNewPanel.includes(s.type) &&
          !el.props.allowedAddModal.includes(s.type))
      )
    },
    margin: '- - - auto',
    onClick: async (ev, el, s) => {
      ev.stopPropagation()
      ev.preventDefault()
      el.call('setCookie', `sidebar_${s.type}`, true)

      if (el.props.allowedAddNewDropdown.includes(s.type)) {
        s.toggle('adding')
        return setTimeout(
          () =>
            el
              .lookup('FilesSidebarList')
              .parent.lookdown('FileSidebarAddNewItem')
              .Label.Input.node.focus(),
          100
        )
      }

      if (el.props.allowedAddNewPanel.includes(s.type)) {
        return el.call('setFloatingPanel', {
          type: el.call('getSingular', s.type),
          key: '',
          value: null
        })
      }

      await el.call(
        'openModal',
        `/add-${el.getSingular(s.type.replace(/_/gu, '-'))}`
      )
    }
  },
  'NavbarButton.sort': {
    transition: 'A defaultBezier opacity',
    color: 'disabled',
    title: 'Sort A/Z',
    icon: (el, s) => {
      const value = el.call('getCookie', `sidebar_${s.type}_sort`) === 'true'
      return value ? 'textLineHeight' : 'language'
    },
    fontSize: 'Z2',
    hide: (el, s) => {
      return ![
        'components',
        'pages',
        'files',
        'state',
        'functions',
        'methods'
      ].includes(s.type)
    },
    onClick: async (ev, el, s) => {
      ev.stopPropagation()
      ev.preventDefault()
      const value = el.call('getCookie', `sidebar_${s.type}_sort`) === 'true'
      el.call('setCookie', `sidebar_${s.type}_sort`, !value)
      s.update()
    }
  },
  'NavbarButton.question': {},
  extend: [
    'FilesSectionTitle'
  ]
}
