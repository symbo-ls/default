export const LibraryNavbar = {
  extend: 'Flex',
  props: {
    align: 'center space-between',
    fontSize: 'Z',
    padding: 'Y2',
    top: '0',
    margin: '- -X2',
    border: '0',
    position: 'sticky',
    theme: 'common-box',
    zIndex: 2,
    gap: 'X',
  },
  CanvasSearch: {
    round: 'C1',
    fontSize: 'A1',
    flex: 1,
    Form: {
      Icon: {},
      Input: {
        paddingBlock: 'Z',
        placeholder: 'Search library...',
        onInput: (ev, el, s) => {
            s.update({
              search: el.node.value
            })
          },
      },
    },
  },
  NavbarButtonSet: {
    gap: 'X2',
    margin: '- - - A2',
    padding: '0',
    Docs: {
      isActive: false,
      title: 'How it works?',
      icon: 'question mark',
      onClick: (ev, el) => {
          el.setWindow('docs', '/components')
        },
    },
  },
};