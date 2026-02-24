export const FileItem = {
  data: {},
  Span: {
    order: '-1',
    class: 'dot',
    boxSize: '1.618ch',
    text: '・',
    color: 'placeholder',
    position: 'relative',
    textDecoration: 'none',
    hasError: (el, s) => {
      if (!el.call('hasArtboard', s.type)) return false
      const item = el.call('getItem', s.key)
      return Boolean(item?.state?.error)
    },
    '.hasError': {
      color: 'red',
    },
    Icon: {
      left: 0,
      top: 0,
      position: 'absolute',
      color: 'placeholder',
      name: (el, s) => `arrow angle ${s.showLayers ? 'down' : 'right'}`,
      visibility: 'hidden',
      opacity: 0,
      transition: 'A defaultBezier',
      transitionProperty: 'opacity, transform',
      hasLayers: (el, s) => Boolean(el.call('hasArtboard', s.type)),
      '!hasLayers': {
        pointerEvents: 'none',
      },
      onClick: (ev, el, s) => {
        ev.stopPropagation()
        ev.preventDefault()
        if (!el.call('hasArtboard', s.type)) {
          return
        }

        // Check for Ctrl+Click or Cmd+Click (Mac)
        const isCtrlOrCmdClick = ev && (ev.ctrlKey || ev.metaKey)

        if (isCtrlOrCmdClick) {
          // Expand all nested layers recursively
          el.call('expandAllLayersForParentComponent', el, s)
        } else {
          // Normal click - just toggle
          s.update({
            showLayers: !s.showLayers
          })
        }
      },
    },
  },
  Text: {
    class: 'text',
    show: (el, s) => !s.editing,
    text: '{{ key }}',
    maxWidth: '65%',
    overflow: 'hidden',
    padding: '.1em - .1em',
    position: 'relative',
    textOverflow: 'ellipsis',
  },
  EditCode: {
    extends: 'NavbarButton',
    if: el => el.isEditMode(),
    hide: (el, s) => s.editing || !el.call('hasArtboard', s.type),
    class: 'layer-controls',
    padding: 'Y',
    margin: '-W -Y -W auto',
    icon: 'code',
    onClick: (ev, el, s) => {
      ev.preventDefault()
      ev.stopPropagation()
      el.setWindow('componentEditor', 'code')
      el.activateSelected(s.key)
    },
  },
  Rename: {
    extends: 'FileSidebarAddNewItem',
    show: (el, s) => Boolean(s.editing),
    flex: 1,
    Label: {
      margin: '0 0 0 -1.4em',
      padding: '0 0 0 1.4em',
      Icon: null,
      Input: {
        flex: 1,
        value: (el, s) => s.key,
        name: 'new-key',
        onInput: () => {},
      },
      Flex: {
        Save: {
          type: 'submit',
        },
        Close: {
          onClick: (ev, el, s) => {
            ev.preventDefault()
            ev.stopPropagation()
            s.update({
              editing: false
            })
          },
        },
      },
      Err: {
        whiteSpace: 'pre-line',
        padding: 'X Y',
        theme: 'modal',
        round: 'X',
        fontSize: 'Y2',
        position: 'static',
      },
    },
    onSubmit: async (ev, el, s) => {
      ev.preventDefault()
      el.node.reset()
      s.update({
        editing: false,
        key: newKey
      })
    },
  },
  content: (el, s) => {
    if (!s.value) return
    if (!s.showLayers || !el.call('hasArtboard', s.type)) {
      return {
        props: {
          hide: true
        }
      }
    }
    return {
      extend: 'Layers',
      props: {
        minWidth: '100%',
        margin: '-Z2 - - -B',
        flex: 1,
        onClick: ev => ev.stopPropagation()
      }
    }
  },
  extend: 'Button',
  props: {
    position: 'relative',
    padding: 'Y Y1',
    zIndex: '1',
    theme: 'transparent',
    isActive: (el, s) => s.showLayers,
    isCurrent: (el, s) => s.key === el.getSelectedKey(),
    width: '100%',
    align: 'center start',
    flow: 'x wrap',
    userSelect: 'none',
    gap: 'Z',
    round: '--canvas-round',
    ':hover .dot': {
      color: 'transparent',
      '& svg': {
        opacity: 1,
        visibility: 'visible',
      },
    },
    ':hover .layer-controls': {
      opacity: 1,
    },
    ':after': {
      content: '""',
      borderStyle: 'solid',
      borderColor: 'dim',
      borderWidth: '0 0 0 0',
      position: 'absolute',
      inset: '-W auto -W -Z',
    },
    '.isActive': {
      theme: 'layer',
      '& .dot': {
        color: 'transparent',
        '& svg': {
          opacity: 1,
          visibility: 'visible',
        },
      },
      '.isCurrent': {
        theme: 'field',
      },
      '& .layer-controls': {
        opacity: 1,
      },
    },
    '!isActive': {
      color: 'caption',
      fontWeight: 400,
      opacity: '.85',
      '.isCurrent': {
        theme: 'field',
      },
      '& .layer-controls': {
        opacity: 0,
      },
    },
    sidebarItem: true,
  },
};