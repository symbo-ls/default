export const IconsPanelWidget = {
  extends: '/icons',
  width: '100%',
  SectionHeader: null,
  Flex: {
    childProps: {
      Grid: {
        columns: 'repeat(6, 1fr)',
        fontSize: '',
        childProps: {
          aspectRatio: '1 / 1',
          Icon: {
            fontSize: 'B',
          },
          ':hover': {
            '> svg': {
              fontSize: 'B',
            },
          },
        },
      },
    },
  },
  AddButton: {
    padding: 'Y2',
    order: 3,
    scrollToTop: false,
    href: () => window.location.pathname + '/add-icon',
  },
};