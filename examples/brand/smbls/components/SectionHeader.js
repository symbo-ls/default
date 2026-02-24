export const SectionHeader = {
  tag: 'header',
  gap: 'B',
  align: 'start space-between',
  flow: 'x',
  margin: '0 0 B1',
  Article: {
    extends: 'ArticleSmall',
    flow: 'column',
    flex: 1,
    Title: {
      fontWeight: '600',
      show: ({
        parent
      }) => parent.parent.props.title,
      text: ({
        parent,
        state
      }) => parent.parent.props.title || state.title,
    },
    P: {
      lineHeight: '1.5em',
      margin: 'X - -',
      fontWeight: '400',
      maxWidth: 'I_default',
      color: 'paragraph',
      show: ({
        parent
      }) => parent.parent.props.p,
      text: ({
        parent,
        state
      }) => parent.parent.props.p || state.p,
    },
  },
  Nav: {
    extends: 'Flex',
    flow: 'row-reverse',
    fontSize: 'A2',
    gap: 'A',
    childProps: {
      scrollToTop: false,
    },
    childExtends: [
      'MenuItem',
    ],
    children: ({
      state
    }) => state.nav,
    Toggle: {
      if: ({
          state
        }) =>
        // eslint-disable-next-line no-undefined
        state[state.__element.key] || state.toggleShow !== undefined,
      props: ({
        state
      }) => ({
        isActive: !state.toggleShow,
        Icon: {
          name: `arrowAngle${state.toggleShow ? 'Up' : 'Down'}`
        }
      }),
      on: {
        click: (event, element, state) => {
          state.update({
            toggleShow: !state.toggleShow
          })
        },
      },
    },
  },
};