export const DragNdropUser = {
  flow: 'column',
  align: 'center center',
  gap: 'A',
  round: 'A',
  Avatar: {
    boxSize: 'C C',
    src: '{{ src }}',
  },
  Flex: {
    gap: 'Y',
    childProps: {
      padding: '0',
      boxSize: 'B B',
      background: 'gray4',
      round: 'Y1',
      color: 'gray7',
    },
    childExtends: 'IconButton',
    childrenAs: 'props',
    children: [
      {
        icon: 'reload',
      },
      {
        icon: 'trash',
      },
    ],
  },
};