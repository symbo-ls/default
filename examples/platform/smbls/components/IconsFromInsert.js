export const IconsFromInsert = {
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: 'Z',
    position: 'relative'
  },
  CaptionTitle: {
    width: '100%',
    Text: {
      text: 'Icons'
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
        el.setWindow('explorer', 'insert:icons')
      }
    },
    align: 'center'
  },
  IconsGroup: {
    limit: 96,
    childProps: {
      padding: 'auto',
      Icon: {
        fontSize: 'A'
      }
    }
  },
  InsertSectionShadow: {}
}
