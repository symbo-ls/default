export const FilesSidebarListItem = {
  Span: {},
  Text: {},
  EditCode: {},
  ContextMenu: {
    extends: 'NavbarButton',
    if: el => el.sdk.hasPermission('editMode'),
    hide: (el, s) => s.editing || !el.call('hasArtboard', s.type),
    class: 'layer-controls',
    icon: 'threeDots',
    padding: 'Y',
    margin: '-W',
    onClick: (ev, el) => {
      ev.preventDefault()
      ev.stopPropagation()
      el.activateContext(ev)
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
      const capitalizeType = el.call('capitalize', s.type)
      await el.call(`rename${capitalizeType}`, 'new-key', async newKey => {
        // el.call('removeItemFromSidebar', s.type, s.key)
        // el.getCanvasCollection().update()
        el.node.reset()
        s.update({
          editing: false,
          key: newKey
        })
      })
    },
  },
  extend: 'FileItem',
  props: {
    onBeforeUpdate: (_, el, s) => {
    if (el.call('getCookie', `sidebar_${s.type}`) === 'false') {
      return false
    }

    if (s.editing) {
      return
    }

    const {
      node
    } = el

    const scroll =
      el.getUserSettings('explorerAutoscroll') &&
      s.key &&
      s.key === el.getSelectedKey()

    if (!scroll) {
      return
    }

    if (el.getRootData().sidebarClick) {
      el.getRootData().sidebarClick = false
      return
    }

    const t = setTimeout(() => {
      if (!node || !node.scrollIntoView) {
        return
      }
      node.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'center'
      })
      el.getRootData().sidebarClick = false
      clearTimeout(t)
    }, 65)
  },
    onMouseenter: (ev, el, s) => {
    if (!el.call('hasArtboard', s.type) || s.editing) {
      return
    }

    ev.stopPropagation()
    const data = el.getCanvasScope()
    if (data.inContext) {
      return
    }
    const Collection = el.getCanvasCollection()

    const componentFound = Collection?.lookdown(el => el.state?.key === s.key)
    if (data.Collection && componentFound) {
      el.activateHovered(componentFound)
    }
    const allowOnChosen = el.getChosenKey() && el.getChosenKey() !== s.key
    const allowSettings = el.getUserSettings('allowFilesidebarPreview')
    if (allowOnChosen && allowSettings) {
      const t = setTimeout(() => {
        el.call('setScenePosition', s.key, {
          visible: true
        })
        clearTimeout(t)
      }, 0)
    }
  },
    onMouseleave: (ev, el, s) => {
    if (!el.call('hasArtboard', s.type) || s.editing) {
      return
    }

    const data = el.getCanvasScope()
    if (data.inContext) {
      return
    }
    if (el.getHoveredKey() === s.key) {
      el.activateHovered(null)
    }
    ev.stopPropagation()
  },
    onClick: async (ev, el, s) => {
    ev.stopPropagation()

    if (s.editing) {
      return
    }

    if (el.data.dblclicking) {
      el.data.dblclicking = false
      return
    }

    const data = el.getCanvasScope()
    el.getRootData().sidebarClick = true

    if (s.type === 'dependencies') {
      await el.call('openModal', '/edit-dependency', {
        key: s.key
      })
    } else if (s.type === 'secrets') {
      await el.call('openModal', '/edit-secret', {
        key: s.key
      })
    } else if (s.type === 'files') {
      await el.call('openModal', '/edit-file', {
        key: s.key
      })
    } else if (['functions', 'snippets', 'methods'].includes(s.type)) {
      await el.call('activateFunction', s.key)
    } else if (s.type === 'state') {
      await el.call('activateState', s.key)
      // } else if (s.type === 'designSystem') {
      //   await el.call('activateDs', s.key)
      // } else if (s.type === ) {
      //   await el.call('activateMethod', s.key)
    } else {
      // el.activateSelected(data.hovered)
      if (data.activeFunction || data.activeState) {
        el.openWindow('editorPanels')
      }
      // if (el.getRootState('isCmdPressed') && data.chosen) el.activateChosen(data.hovered, el, s)
      const component = el.getHovered() || el
      const {
        state
      } = component

      if (
        !el.call(
          'inOnCurrentCanvasPage',
          component?.state?.type || state?.type,
          component?.state?.key || state?.key
        )
      ) {
        el.call(
          'openCanvasPage',
          el.call('findKeyInOtherCanvasPages', state?.key) || 'Default'
        )
      }

      const t = setTimeout(() => {
        if (data.chosen || state?.key === el.getSelectedKey()) {
          // el.activateChosen(component?.state?.key)
          el.state.update({
            showLayers: !el.state.showLayers
          })
        } else {
          el.activateSelected(state?.key)
          el.zoomToNode(data.selected)
        }
        clearTimeout(t)
      }, 15)
    }
  },
    onDblclick: (ev, el, s) => {
    if (s.editing) {
      return
    }

    el.data.dblclicking = true

    ev.stopPropagation()
    const hovered = el.getHoveredKey()
    el.activateSelected(hovered, el, s)
    el.activateChosen(hovered, el, s)
    el.call('clearFollowing')

    // Open the nested structure recursively using shared function
    el.call('expandAllLayersForParentComponent', el, s)
  },
    onContextmenu: (ev, el, s) => {
    if (s.editing) {
      return
    }

    if (s.key !== el.getHoveredKey()) {
      el.activateHovered(s.key)
    }

    const t = setTimeout(() => {
      el.activateContext(ev, el)
      clearTimeout(t)
    }, 0)
  },
    onInit: (el, s) => {
    if (['pages', 'components'].includes(s.type)) {
      const showLayersSchema = el.call('getShowLayersSchema')
      const path = el.call('getLayerPath') || []
      path.push('showLayers')
      const showLayers =
        el.call('getInObjectByPath', showLayersSchema, path) || false
      s.update({
        showLayers
      }, {
        preventStateUpdateListener: true
      })
    }
  },
    onStateUpdate: (changes, el, s) => {
    if (changes && Object.hasOwn(changes, 'showLayers')) {
      const path = el.call('getLayerPath')
      path.push('showLayers')
      el.call('saveLayersVisibilityState', path, changes.showLayers)
    }
  },
  },
};