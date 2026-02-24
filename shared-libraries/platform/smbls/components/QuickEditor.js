export const QuickEditor = {
  state: {
    recents: [
    ],
    recentsIndex: 0,
    showLayers: true,
  },
  FilesSidebarListItem: {
    lazyLoad: true,
    extends: [
      {
        props: {
          content: {
            lazyLoad: true,
          },
        },
      },
      'FilesSidebarListItem',
    ],
    isActive: null,
    '.isActive': null,
    '!isActive': null,
    onClick: () => {},
    background: 'transparent',
    zIndex: 'auto',
    onDblclick: () => {},
    Text: {
      fontSize: 'Z2',
      margin: '- - - Y1',
    },
    EditCode: {
      margin: '0',
    },
    QuickEditorNavbar: {
      margin: '- - - auto',
    },
    Span: null,
    '& .layers': {
      fontSize: 'A1',
      margin: '-Y - -',
      overflow: 'hidden auto',
      maxHeight: 'calc(100vh - D2 - W2)',
      '& > div > div': {
        paddingBlockStart: '0',
      },
    },
  },
  PromptAI: {
    margin: 'auto - -',
    order: 2,
    hide: true,
  },
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: '0',
    position: 'absolute',
    top: 'C+X2',
    padding: '0',
    left: '--canvas-gutter',
    round: '--canvas-round',
    borderColor: 'line',
    borderWidth: '1px',
    borderStyle: 'solid',
    theme: 'common-box',
    minWidth: 'H',
    width: 'H',
    fontSize: 'Y2',
    hide: (el, s) => !el.getCanvasScope('editorActive') || !s.value,
    onFrame: (el, s) => {
    const editorActive = el.getCanvasScope('editorActive')
    const selected = el.getSelectedKey()
    el.variables({
      editorActive,
      selected
    }).changed(() => {
      if (selected && editorActive) {
        const componentState = el.call(
          'deepClone',
          el.getSelected().state.parse()
        )
        // console.log(componentState)
        s.replace(componentState, {
          preventStateUpdateListener: true,
          forceMonacoUpdate: true
        })
      } else {
        if (s.value) {
          delete s.code
          s.remove('value', {
            preventStateUpdateListener: true,
            forceMonacoUpdate: false
          })
        }
      }
    })
  },
  },
};