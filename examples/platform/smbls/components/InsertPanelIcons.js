export const InsertPanelIcons = {
  extend: 'Flex',
  props: {
    width: '100%',
    gap: 'C',
    flow: 'y',
    overflowY: 'auto',
  },
  LibraryNavbar: {},
  Flex: {
    flow: 'y',
    gap: 'B',
    IconsGroup: {
      limit: 1000,
      childProps: {
        padding: 'auto',
        Icon: {
          fontSize: 'A',
        },
      },
    },
    padding: 'A',
  },
};