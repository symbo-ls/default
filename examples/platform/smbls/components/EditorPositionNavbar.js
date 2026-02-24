export const EditorPositionNavbar = {
  extends: 'NavbarButtonSet',
  Expand: {
    title: 'Expand',
    icon: el => 'arrowCompact' + (el.getUserSettings('editorPanelsAtRight') ? 'Left' : 'Right'),
    margin: '- - - auto',
    hide: el => {
      const EditorPanels = el.getEditorPanels()
      return EditorPanels?.props.isExpanded
    },
    onClick: (ev, el) => {
      const EditorPanels = el.getEditorPanels()
      EditorPanels.setProps({
        isExpanded: true
      })
    },
  },
  Minimize: {
    title: 'Minimize',
    icon: el => 'arrowCompact' + (el.getUserSettings('editorPanelsAtRight') ? 'Right' : 'Left'),
    margin: '- - - auto',
    hide: el => {
      const EditorPanels = el.getEditorPanels()
      return !EditorPanels?.props.isExpanded
    },
    onClick: (ev, el) => {
      const EditorPanels = el.getEditorPanels()
      EditorPanels.setProps({
        isExpanded: false
      })
    },
  },
  Left: {
    title: 'Align to left',
    icon: 'boxFilledLeft',
    hide: el => !el.getUserSettings('editorPanelsAtRight'),
    onClick: (ev, el) => {
      const EditorPanels = el.getEditorPanels()
      el.call('setUserSettings', 'editorPanelsAtRight', false)
      EditorPanels.update()
    },
  },
  Right: {
    title: 'Align to right',
    icon: 'boxFilledRight',
    hide: el => el.getUserSettings('editorPanelsAtRight'),
    onClick: (ev, el) => {
      const EditorPanels = el.getEditorPanels()
      el.call('setUserSettings', 'editorPanelsAtRight', true)
      EditorPanels.update()
    },
  },
};