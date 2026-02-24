export const ItemAlt = {
  flex: 1,
  gap: 'A2',
  flow: 'column',
  align: 'flex-start space-between',
  padding: 'A2 B B',
  '@mobileL': {
    flow: 'row',
  },
  Flex_header: {
    props: {
      gap: 'A2',
      align: 'center flex-start',
    },
    Icon: {
      fontSize: 'B2',
      name: 'tree',
    },
  },
  Img: {
    round: 'A',
    margin: '- - - -Z',
    aspectRatio: '16 / 9',
    height: '12em',
    src: 'https://p194.p3.n0.cdn.zight.com/items/rRuDJBlD/7f15d948-1604-4c5f-ad1f-d9aebe607f52.png?v=499b93d980e92921c72e5dc02b7e5ce2',
  },
  Flex_footer: {
    props: {
      minWidth: 'auto',
      align: 'flex-end space-between',
      gap: 'E',
    },
    ArticleMedium: {
      props: {
        alignItems: 'flex-start',
        width: '100%',
        maxWidth: 'F1',
        title: {
          text: 'What is Symbols?',
        },
        p: {
          text: 'A minute video explaining how to get started with Symbols',
        },
      },
    },
  },
};