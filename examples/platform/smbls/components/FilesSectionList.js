export const FilesSectionList = {
  extend: 'Flex',
  childExtend: 'FileItem',
  props: {
    fontSize: 'Z2',
    flow: 'column',
    align: 'stretch',
    gap: 'X1',
    childrenAs: 'state',
    children: [
      {
        type: 'components',
        key: 'Logo',
        value: {
          Img: {},
        },
      },
      {
        type: 'components',
        key: 'Header',
        value: {
          Logo: {},
        },
      },
    ],
  },
};