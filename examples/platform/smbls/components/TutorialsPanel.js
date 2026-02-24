export const TutorialsPanel = {
  CaptionTitle: {
    Text: {
      text: 'Docs and articles',
    },
  },
  DocsSidebar: {
    top: 'auto',
    padding: '0',
    fontSize: 'Z2',
    gap: 'A2',
    childProps: {
      position: 'relative',
      padding: '- 0',
      NumbCaption: {
        Numb: null,
        SquareButton: {
          padding: 'X',
        },
      },
    },
  },
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: 'A',
  },
};