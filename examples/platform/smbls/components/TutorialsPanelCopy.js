export const TutorialsPanelCopy = {
  extend: 'Flex',
  props: {
    padding: 'A1 Z1',
    flow: 'y',
    gap: 'B2',
  },
  Hgroup: {
    H: {
      fontSize: 'B2',
      margin: '0',
      color: 'title',
      fontWeight: '500',
      text: (el) => {
          const {
            name,
            username
          } = el.getRootState()
          return `Hi ${username || name || ''} 👋`
        },
    },
    P: {
      margin: '0',
      fontSize: 'Z2',
      color: 'paragraph',
      text: `Let's run through docs and tutorials...`,
    },
  },
  DocsSidebar: {
    top: 'auto',
    padding: '0',
    fontSize: 'Z2',
    childProps: {
      position: 'relative',
      padding: '- 0',
      NumbCaption: {
        Numb: null,
        SquareButton: {
          padding: 'X',
        },
      },
      ':not(:last-child):after': {
        content: `''`,
        position: 'absolute',
        width: '100%',
        borderStyle: 'solid',
        borderWidth: '1px 0 0 0',
        borderColor: 'line',
        bottom: '-Z2+W',
      },
    },
  },
};