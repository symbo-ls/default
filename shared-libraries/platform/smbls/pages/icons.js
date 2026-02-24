export const icons = {
  SectionHeader: {
    heading: {
      Title: {
        text: 'Icons',
      },
    },
    nav: {
      add: {
        props: () => ({
          icon: 'plus',
          href: window.location.pathname + '/add-icon'
        }),
      },
    },
    props: {
      margin: '- - B1',
    },
  },
  Flex: {
    flow: 'y',
    gap: 'C1',
    lazyLoad: true,
    childExtends: 'IconsGroup',
    childrenAs: 'state',
    children: el => false,
  },
};