export const LibraryFromInsert = {
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: 'Z'
  },
  CaptionTitle: {
    align: 'center',
    Text: {
      text: 'Insert From Library'
    },
    SearchButton: {
      extends: [
        'CanvasButton',
        'IconButton'
      ],
      icon: 'search',
      margin: '- auto - A'
    },
    ExpandButton: {
      extends: [
        'CanvasButton',
        'IconButton'
      ],
      icon: 'expand',
      onClick: (ev, el) => {
        el.setWindow('explorer', 'insert:library')
      }
    },
    width: '100%'
  }
}
