export const Tests = {
  props: {
    children: [
      'one',
      'two'
    ],
    childProps: {
      onClick: (ev, el, s) => {
        s.update({
          act: el.props.text
        })
      },
      '.isAct': {
        color: 'red',
        textDecoration: 'underline'
      }
    }
  }
}
