export const SelectedNavbar = {
  if: (el) => true || el.getUserSettings('allowTitleOnArtboard'),
  extends: 'EditNavbar',
  state: {
    type: 'components',
    value: {},
    isEditMode: false,
  },
  minWidth: 'G1',
  fontSize: 'Y2',
  position: 'absolute',
  bottom: '100%',
  margin: 'Z -',
  left: '50%',
  transition: 'X opacity defaultBezier',
  padding: '0 W 0 Z2',
  round: '--canvas-round',
  top: 'auto',
  pointerEvents: 'auto',
  theme: 'common-box',
  isEditing: (el, s) => s.isEditMode,
  transform: 'translate3d(-50%, 0, 1px)',
  borderColor: 'line',
  borderWidth: '1px',
  borderStyle: 'solid',
  '.isEditing': {
    theme: 'field',
  },
  '!isEditing': {
    theme: 'navbar',
  },
  onBeforeUpdate: (_, el, s, ctx, opts) => {
    s.isEditMode = Boolean(opts.force)

    const selected = el.getSelectedKey()
    if (!selected) return
    s.key = selected
    s.type = selected.startsWith('/') ? 'pages' : 'components'
  },
  style: {
    width: 'calc(100% + var(--spacing-Y1) * 2)',
    maxWidth: 'calc(100% + var(--spacing-Y1) * 2)',
  },
  NavbarButtonSet_title: {
    maxWidth: '40%',
    hide: (el, s) => s.isEditMode,
    onDblclick: (ev, el, s) => {
      s.update({
        isEditMode: true
      }, {
        force: true
      })
    },
    Text: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      lineHeight: '1.7',
      ignoreChildExtend: true,
      text: (el) => el.getSelectedKey(),
    },
    CopyButton: {
      value: (el, s) => el.getSelectedKey(),
    },
  },
  EditorTools: {
    margin: '- - - auto',
    hide: (el, s) => s.isEditMode,
    gap: 'U',
    paddingInlineEnd: '0',
    PreviewBtn: {
      icon: 'sf play',
      title: 'Preview',
      onClick: (ev, el, s) => {
        el.activateChosen(s.key)
        el.call('clearFollowing')
      },
    },
    ContextBtn: {
      icon: 'three dots vertical',
      title: 'Options',
      onClick: (ev, el, s) => {
        el.activateContext(ev, s.key)
      },
      order: 3,
    },
    childExtends: 'NavbarButton',
    Refresh: {
      icon: 'reload outline',
      title: 'Refresh',
      onClick: (ev, el) => {
        const key = el.getSelectedKey()
        const item = el.getItem?.(key)
        el.call('refreshComponentOnCanvas', key, item)
      },
    },
    InNewTab: {
      icon: 'arrow up right',
      title: 'In new tab',
      onClick: (ev, el) => {
        const url = el.call('generatePreviewUrl')
        window.open(url, 'Symbols preview')
      },
    },
    TextNavbarButtonDropdown: {},
  },
  FileSidebarAddNewItem: {
    hide: (el, s) => !s.isEditMode,
    flex: 1,
    padding: '- Y1 - -',
    onSubmit: async (ev, el, s) => {
      ev.preventDefault()
      const capitalizeType = el.call('capitalize', s.type)
      await el.call(`rename${capitalizeType}`, 'new-key', async newKey => {
        el.node.reset()
        s.update({
          isEditMode: false,
          key: newKey
        })
      })
    },
    Label: {
      border: 'none',
      '.hasItems': null,
      margin: '0',
      Icon: null,
      Input: {
        autofocus: true,
        padding: '0',
        value: (el, s) => {
          return el.getSelectedKey()
        },
        onInput: () => {},
        attr: {
          required: true,
          placeholder: (el, s) => 'Type ' + (
            s.type === 'pages' ?
            '/page-path' : 'ComponentName'),
        },
      },
      Flex: {
        childExtends: 'NavbarButton',
        Save: {
          padding: 'Y2',
          fontSize: 'A',
        },
        Close: {
          order: 2,
          padding: 'Y2',
          fontSize: 'A',
          onClick: (ev, el, s) => {
            s.parent.update({
              isEditMode: false
            })
          },
        },
      },
    },
  },
  EditorPositionNavbar: null,
  NavbarButtonSet_meta: null,
};